import { Module } from '@nestjs/common';
import { CatsController } from 'src/cats/cats.controller';
import { CatsService } from 'src/cats/cats.service';
import { S3 } from 'src/helper/s3';
import { ProposalService } from 'src/proposal/proposal.service';
import { HomeController } from './home/home.controller';
import { HomeService } from './home/home.service';

@Module({
  providers: [HomeService, ProposalService, S3, CatsService],
  controllers: [HomeController, CatsController],
})
export class MainModule {}
