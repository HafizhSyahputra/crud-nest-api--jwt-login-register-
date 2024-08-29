import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './car.entity';
import { CreateCarDto } from './dtos/create-car.dto';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car) private readonly carRepository: Repository<Car>,
  ) {}

  async create(dto: CreateCarDto) {
    const car = this.carRepository.create(dto);

    return await this.carRepository.save(car);
  }

  async getCars() {
    return this.carRepository.find();
  }

  async findOneBy(id: number) {
    return this.carRepository.findOneBy({ id });
  }

  async updateCar(id: number, dto: CreateCarDto) {
    const car = await this.carRepository.findOne({ where: { id } });

    Object.assign(car, dto);

    return await this.carRepository.save(car);
  }

  async deleteCar(id: number) {
    const car = await this.carRepository.findOne({ where: { id } });


    return await this.carRepository.remove(car);
  }
}
