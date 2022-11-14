import { Injectable } from '@nestjs/common';
import { S3 } from '../helper/s3';

@Injectable()
export class ProposalService {
  constructor(private s3ExternalService: S3) {}

  getHello(): string {
    console.log(this.s3ExternalService);
    return 'Proposal service OK!';
  }
}
