import { Controller, Get } from '@nestjs/common';

@Controller('courses') //Rota principal --pode definir no metodo
export class CoursesController {
  @Get('list') //rota aninhada -- parametro
  findAll() {
    return 'Listagem de Cursos'
  }
}
