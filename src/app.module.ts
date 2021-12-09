import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { articulo } from './articulo';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, articulo],
})
export class AppModule {}
