import express, {Express} from 'express'
import knex from "knex";
import { Model } from "objection";
// const express = require('express')
const isAdmin = require('./src/middleware/isAdmin')
const handleLogger = require('./src/middleware/handlerLogger')
const carRouter = require('./src/routes/carRouter')
const app:Express = express()
const PORT = 3000

const knexInstance = knex({
    client: "postgresql",
    connection: {
      database: "challenge_5", 
      user: "postgres", 
      password: "root"
      // filename: "./dev.sqlite3"
    }
})

Model.knex(knexInstance)

app.set('view engine', 'ejs')
app.use(express.static("public"))
app.use(express.urlencoded())

app.use(handleLogger)
// app.use(isAdmin)
app.use("/v1/cars", carRouter)

app.listen(PORT, () => {
  console.log(`is listening to port ${PORT}`)
})