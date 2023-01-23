import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create.student';
export class UpdateStudentDto extends PartialType(CreateStudentDto) {}