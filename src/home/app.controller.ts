import { Controller, Get } from '@nestjs/common';
import { ProposalService } from 'src/proposal/proposal.service';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly s3Service: ProposalService,
  ) {}

  @Get()
  getHello(): string {
    console.log(this.s3Service.getHello());
    return this.appService.getHello();
  }
}
