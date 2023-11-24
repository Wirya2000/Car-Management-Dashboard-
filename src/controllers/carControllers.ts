import {Request, Response} from 'express'
import CarService from '../services/cars'

const get = async (res: Response)=> {
  // const getCars = await CarsModel.query() || [];
  // res.status(200).json(getCars)

  new CarService().get().then((response) => {
    console.log({response})
    res.status(200).json({
      message: "success",
      data: response
    })
  }).catch((err)=> {
    res.status(200).json({
        message: "failed", 
        data: err
    })
  })
}

const post = async (req: Request, res: Response)=> {
  new CarService().post(req).then((response) => {
    console.log({response})
    res.status(200).json({
      message: "success",
      data: response
    })
  }).catch((err)=> {
    res.status(200).json({
        message: "failed", 
        data: err
    })
  })
}

const getById = async (req: Request, res: Response) => {
  new CarService().getById(req).then((response) => {
    console.log({response})
    res.status(200).json({
      message: "success",
      data: response
    })
  }).catch((err)=> {
    res.status(200).json({
        message: "failed", 
        data: err
    })
  })
}

const deleteById = async (req:Request, res: Response) => {
  new CarService().deleteById(req).then((response) => {
    console.log({response})
    res.status(200).json({
      message: "success",
      data: response
    })
  }).catch((err)=> {
    res.status(200).json({
        message: "failed", 
        data: err
    })
  })
}

const updateById = async (req:Request, res: Response) => {
  new CarService().updateById(req).then((response) => {
    console.log({response})
    res.status(200).json({
      message: "success",
      data: response
    })
  }).catch((err)=> {
    res.status(200).json({
        message: "failed", 
        data: err
    })
  })
}

module.exports = {
    get, 
    getById, 
    post,
    deleteById,
    updateById
}