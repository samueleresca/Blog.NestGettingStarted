import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { LabelsController } from './Controllers/LabelsController';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Label } from './Models/Label';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [AppController, LabelsController],
  components: [],
})

export class ApplicationModule { }
