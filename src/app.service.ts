import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  ObtenerTodo(): string {
    return "";
  }

  ObtenerUnArticulo(): string {
      return "";
  }

  AgregarUnArticulo(): string {
      return "";
  }

  EliminarUnArticulo(): string {
      return "";
  }

  EditarUnArticulo(): string {
      return "";
  }
}
