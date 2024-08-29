import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarDto } from './dtos/create-car.dto';

@Controller('api')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get('cars')
  async getCars() {
    return {
      dataMobil: await this.carService.getCars(),
    };
  }

  @Get('car/:id')
  async findOneBy(@Param('id') id: number) {
      await this.carService.findOneBy(id);
  }

  @Post('car/create')
  async create(@Body() dto: CreateCarDto) {
    return this.carService.create(dto);
  }

  @Post('car/update/:id')
  async updateCar(@Param('id') id: number, @Body() dto: CreateCarDto) {
    return this.carService.updateCar(id, dto);
  }
  

  @Delete('car/delete/:id')
  async deleteCar(@Param('id') id: number) {
    await this.carService.deleteCar(id);
    return {
      message: 'success delete car',
    };
  }
}
