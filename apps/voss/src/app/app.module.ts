import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { MlService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [MlService],
})
export class AppModule {}
