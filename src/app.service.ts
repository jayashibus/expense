import { Injectable } from '@nestjs/common';
import { ReportType, data } from 'src/data';
import { v4 as uuidv4 } from 'uuid';
import {
  CreateReportDto,
  UpdateReportDto,
  ReportResponseDto,
} from 'src/dtos/report.dto';

interface Report {
  amount: number;
  source: string;
}

interface UpdateReport {
  amount?: number;
  source?: string;
}

@Injectable()
export class AppService {
  getAllReports(type: ReportType): ReportResponseDto[] {
    return data.report
      .filter((report) => report.type === type)
      .map((report) => new ReportResponseDto(report));
  }

  getReportById(type: ReportType, id: String): ReportResponseDto {
    const report = data.report
      .filter((report) => report.type === type)
      .find((report) => report.id === id);

    if (!report) return;

    return new ReportResponseDto(report);
  }

  createReport(
    type: ReportType,
    { amount, source }: Report,
  ): ReportResponseDto {
    const newReport = {
      id: uuidv4(),
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      type,
    };
    data.report.push(newReport);

    return new ReportResponseDto(newReport);
  }

  updateReport(
    type: ReportType,
    id: string,
    body: UpdateReport,
  ): ReportResponseDto {
    const reportToUpdate = data.report
      .filter((report) => report.type === type)
      .find((report) => report.id === id);

    if (!reportToUpdate) return;

    const reportIndex = data.report.findIndex(
      (report) => report.id === reportToUpdate.id,
    );

    data.report[reportIndex] = {
      ...data.report[reportIndex],
      ...body,
      updated_at: new Date(),
    };
    return new ReportResponseDto(data.report[reportIndex]);
  }

  deleteReport(type: ReportType, id: string) {
    const reportIndex = data.report.findIndex((report) => report.id === id);

    if (reportIndex === -1) return;

    data.report.splice(reportIndex, 1);

    return 'Deleted';
  }
}
