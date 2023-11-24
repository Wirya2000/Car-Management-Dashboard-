import { CarsModel } from "../models/Cars";
const cloudinary = require("cloudinary").v2

import {Request, Response} from 'express'

export default class CarRepository {
  async getAll() {
    return await CarsModel.query() || [];
  }

  async post(req: Request) {
    const reqBody:any = req.body;
  
    // const id_car = reqBody.id
  
    const name:string = reqBody?.name
    const type:string = reqBody?.type
    const price:number = Number(reqBody?.price)

    let photo:string = ""
    //@ts-ignore
    const filebase64: string = req.file.buffer.toString("base64");
    //@ts-ignore
    const file: string = `data:${req.file.mimetype};base64,${filebase64}`

    await cloudinary.uploader.upload(file, (err: any, result: any)=> {
        if(err){
            return "gagal"
        }
        
        photo = result.url
    })

    const start_rent:Date = reqBody?.start_rent
    const finish_rent:Date = new Date(reqBody?.finish_rent)
    const created_at:Date = new Date(reqBody?.created_at)
    const updated_at:Date = new Date(reqBody?.updated_at)
    
    return await CarsModel.query().insert({name, type, price, photo, start_rent, finish_rent, created_at, updated_at}).returning("*");
  }

  async getById(req: Request) {
    const id:number = Number(req.params.id);
    return await CarsModel.query().where("id", id).throwIfNotFound()
  }

  async deleteById(req: Request) {
    const reqParam  = req.params;
    const id:number = Number(reqParam.id);

    return await CarsModel.query().where("id", id).del();
  }

  async updateById(req:Request) {
    const reqBody = req.body;
    const reqParam  = req.params;

    const id:number = Number(reqParam.id)

    const name:string = reqBody?.name
    const type:string = reqBody?.type
    const price:number = reqBody?.price

    let photo:string = ""
    //@ts-ignore
    const filebase64: string = req.file.buffer.toString("base64");
    //@ts-ignore
    const file: string = `data:${req.file.mimetype};base64,${filebase64}`

    await cloudinary.uploader.upload(file, (err: any, result: any)=> {
        if(err){
            return "gagal"
        }
        
        photo = result.url
    })

    const start_rent:Date = reqBody?.start_rent
    const finish_rent:Date = reqBody?.finish_rent
    const created_at:Date = reqBody?.created_at
    const updated_at:Date = reqBody?.updated_at
    return await CarsModel.query().where("id", '=', id).update({name, type, price, photo, start_rent, finish_rent, created_at, updated_at})
  }
}