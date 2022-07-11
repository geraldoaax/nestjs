import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('courses') //Rota principal --pode definir no metodo
export class CoursesController {
  @Get() //rota aninhada -- parametro
  findAll() {
    return 'Listagem de Cursos'
  }

  @Get(':id') //rota aninhada -- parametro
  findOne(@Param('id') id: string) { //desestruturacao
    return `Curso de ${id}`
  }

  @Post()
  create(@Body() body: any) {
    return body
  }
}
