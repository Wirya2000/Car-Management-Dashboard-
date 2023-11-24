import CarRepository from "../repositories/cars";

import {Request, Response} from 'express'

export default class CarService {
  #carRepository: CarRepository;

  constructor() {
    this.#carRepository = new CarRepository();
  }

  async get() {
    return await this.#carRepository.getAll();
  }

  async post(req: Request) {
    return await this.#carRepository.post(req);
  }
  
  async getById(req: Request) {
    return await this.#carRepository.getById(req);
  }

  async deleteById(req: Request) {
    return await this.#carRepository.deleteById(req);
  }

  async updateById(req: Request) {
    return await this.#carRepository.updateById(req);
  }
}