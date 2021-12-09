import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('Hello/:id/id2')
  getHelloparam(@Param('id') id, @Param('id2') id2:string): string {
    console.log(id)
    return this.appService.getHello();
  }

  @Get('ObtenerTodo')
  obtenerTodo(): string {
      return this.appService.ObtenerTodo();
    }  

  @Get('ObtenerUnArticulo')
  ObtenerUnArticulo(@Param('id') id): string {
      return this.appService.ObtenerUnArticulo();
    }

  @Get('AgregarUnArticulo')
  AgregarUnArticulo(@Param('id') id): string {
      return this.appService.AgregarUnArticulo();
    }

  @Get('EliminarUnArticulo')
    EliminarUnArticulo(@Param('id') id): string {
      return this.appService.EliminarUnArticulo();
    }

  @Get('EditarUnArticulo')
  EditarUnArticulo(@Param('id') id): string {
      return this.appService.EditarUnArticulo();
    }
}
