import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentController } from './controller/student.controller';
import { StudentSchema } from './schema/student.schema';
import { StudentService } from './service/student.service';




@Module({
  imports:[MongooseModule.forRoot('mongodb://localhost:27017/studentdb'),
  MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }])],
  controllers: [StudentController],
  providers: [StudentService],
})
export class RootModule {
  constructor(){
    console.log('root module')
  }
}
