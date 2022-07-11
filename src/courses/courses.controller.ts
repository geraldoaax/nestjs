import { Controller, Get, Param } from '@nestjs/common';

@Controller('courses') //Rota principal --pode definir no metodo
export class CoursesController {
  @Get() //rota aninhada -- parametro
  findAll() {
    return 'Listagem de Cursos'
  }

  @Get(':id') //rota aninhada -- parametro
  findOne(@Param() params: any) {
    return `Curso de ${params.id}`
  }
}
