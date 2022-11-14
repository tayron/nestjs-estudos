import { Module } from '@nestjs/common';
import { S3 } from 'src/helper/s3';
import { ProposalService } from 'src/proposal/proposal.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [S3],
  providers: [AppService, ProposalService, S3],
  controllers: [AppController],
})
export class AppModule {}
