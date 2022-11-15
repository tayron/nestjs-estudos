import { Controller, Get } from '@nestjs/common';
import { ProposalService } from 'src/proposal/proposal.service';
import { HomeService } from './home.service';

@Controller()
export class HomeController {
  constructor(
    private readonly appService: HomeService,
    private readonly s3Service: ProposalService,
  ) {}

  @Get()
  getHello(): string {
    console.log(this.s3Service.getHello());
    return this.appService.getHello();
  }
}
