import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';

import fs from 'fs';
import { diskStorage } from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { MlService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly mlService: MlService) {}

  @Get()
  getData() {
    return this.mlService.getData();
  }

  @Post('predict-monkeypox')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const filename = `${uuidv4()}${path.extname(file.originalname)}`;
          cb(null, filename);
        },
      }),
    })
  )
  async predict(@UploadedFile() image: Express.Multer.File): Promise<any> {
    const imageBuffer = fs.readFileSync(image.path);
    const result = await this.mlService.predict(imageBuffer);
    console.log('first', { result: (1 - result) * 100 });
    return { result: (1 - result) * 100 };
  }
}
