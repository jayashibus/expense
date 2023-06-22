import { Injectable } from '@nestjs/common';
import { ReportType, data } from 'src/data';
import { v4 as uuidv4 } from 'uuid';
import {
  CreateReportDto,
  UpdateReportDto,
  ReportResponseDto,
} from 'src/dtos/report.dto';

// interface Report {
//   amount: number;
//   source: string;
// }

// interface UpdateReport {
//   amount?: number;
//   source?: string;
// }

@Injectable()
export class AppService {}
