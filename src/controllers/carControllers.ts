import { CarsModel } from '../models/Cars'

const cloudinary = require("cloudinary").v2

import {Request, Response} from 'express'
// const {v4: uuidv4} = require("uuid")
// const carListData = require("./../models/dummyData")

cloudinary.config({ 
  cloud_name: 'dyahtry6c', 
  api_key: '291325687983317', 
  api_secret: 'gis217Ddp3oKVitGhDOMQWHNZ_I' 
});

const get = async (req: Request, res: Response)=> {
    const getCars = await CarsModel.query() || [];
    res.status(200).json(getCars);
    // const {brand=""} = req.query || {}
    // const filteredCars = carListData.filter(({brand: brandVal})=> brandVal.toLowerCase() === brand.toLowerCase())

    // res.status(200).render('home', {
    //     cars: brand ?  filteredCars : carListData
    // })
}

const post = async (req: Request, res: Response)=> {
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
            return res.status(400).json({
                message: err.message, 
            })
        }
        
        photo = result.url


        // res.status(201).json({
        //     message: "Upload success", 
        //     url: result.url
        // })
    })

    const start_rent:Date = reqBody?.start_rent
    const finish_rent:Date = new Date(reqBody?.finish_rent)
    const created_at:Date = new Date(reqBody?.created_at)
    const updated_at:Date = new Date(reqBody?.updated_at)
    
    const postCar = await CarsModel.query().insert({name, type, price, photo, start_rent, finish_rent, created_at, updated_at}).returning("*");

    return res.json(postCar);
}

const getById = async (req: Request, res: Response) => {
    const id:number = Number(req.params.id);
    const getData = await CarsModel.query().where("id", id).throwIfNotFound()
    return res.json(getData);
    // const getId = req.params.id;
    // const filterById = carListData.filter(({id: Number})=> id === Number(getId) )

    // res.status(200).json(filterById)
}

const deleteById = async (req:Request, res: Response) => {
    const reqParam  = req.params;
    const id:number = Number(reqParam.id);

    const deleteData  = await CarsModel.query().where("id", id).del();

    return res.json({
        status: 'OK', 
        message: deleteData
    });

    // const reqParam  = req.params;
    // const id_car_brand = Number(reqParam.id);

    // const deleteData  = await CarBrandsModel.query().where("id_car_brand", id_car_brand).del();


    //  return res.json({
    //      status: 'OK', 
    //      message: deleteData
    //  });
}

const updateById = async (req:Request, res: Response) => {
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
            return res.status(400).json({
                message: err.message, 
            })
        }
        
        photo = result.url


        // res.status(201).json({
        //     message: "Upload success", 
        //     url: result.url
        // })
    })

    const start_rent:Date = reqBody?.start_rent
    const finish_rent:Date = reqBody?.finish_rent
    const created_at:Date = reqBody?.created_at
    const updated_at:Date = reqBody?.updated_at
    const update  = await CarsModel.query().where("id", '=', id).update({name, type, price, photo, start_rent, finish_rent, created_at, updated_at})
    
    return res.json(update);
    // const reqBody = req.body;
    // const reqParam  = req.params;

    // const id_car_brand = Number(reqParam.id)

    // const name = reqBody?.name
    // const update  = await CarBrandsModel.query().where("id_car_brand", '=', id_car_brand).update({name})

    // return res.json(update);
}

module.exports = {
    get, 
    getById, 
    post,
    deleteById,
    updateById
}