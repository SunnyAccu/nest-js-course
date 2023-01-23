import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NextFunction,Request,Response } from 'express';
import { RootModule } from './root.module';



function globalMiddleWareOne(req:Request,res:Response,next:NextFunction){
  console.log('this number one')
  next()

}

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  app.useGlobalPipes(new ValidationPipe())
  app.use(globalMiddleWareOne)
  await app.listen(3000);
}
bootstrap();
