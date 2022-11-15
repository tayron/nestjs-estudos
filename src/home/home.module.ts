import { Module } from '@nestjs/common';
import { S3 } from 'src/helper/s3';
import { ProposalService } from 'src/proposal/proposal.service';
import { HomeController } from './home.controller';
import { HomeService } from './home.service';

@Module({
  imports: [S3],
  providers: [HomeService, ProposalService, S3],
  controllers: [HomeController],
})
export class HomeModule {}
