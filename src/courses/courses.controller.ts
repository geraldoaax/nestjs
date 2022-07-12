import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses') //Rota principal --pode definir no metodo
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {
  }


  @Get() //rota aninhada -- parametro
  findAll(@Res() response) {
    return response.status(200).send('Listagem de Cursos')
  }

  @Get(':id') //rota aninhada -- parametro
  findOne(@Param('id') id: string) { //desestruturacao
    return `Curso de ${id}`
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body() body: any) { //pegar uma informacao especifica
    return body
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return `Atualização do Curso #${id}`
  }

  @Delete(':id') //rota aninhada -- parametro
  remove(@Param('id') id: string) { //desestruturacao
    return `Exclusão de ${id}`
  }

}
