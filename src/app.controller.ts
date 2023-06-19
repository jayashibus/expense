import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('report/:type')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllIncomeReports() {
    return {};
  }

  @Get(':id')
  getAllIncomeReportById() {
    return {};
  }

  @Post()
  createReport() {
    return 'created';
  }

  @Put(':id')
  updateReport() {
    return 'Updated';
  }

  @Delete(':id')
  deleteReport() {
    return 'Deleted';
  }
}
