import { UserModel } from "../models/Users";
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

  async post(req: Request, user: UserModel) {
    return await this.#carRepository.post(req, user);
  }
  
  async getById(req: Request) {
    return await this.#carRepository.getById(req);
  }

  async deleteById(req: Request, user: UserModel) {
    return await this.#carRepository.deleteById(req, user);
  }

  async updateById(req: Request, user: UserModel) {
    return await this.#carRepository.updateById(req, user);
  }
}