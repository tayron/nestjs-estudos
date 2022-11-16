import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { HomeModule } from './home/home.module';

@Module({
  imports: [HomeModule, CatsModule],
})
export class MainModule {}
