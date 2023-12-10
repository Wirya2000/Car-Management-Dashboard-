import express from 'express'
// const express = require("express");
const router = express.Router();
const carController = require("./../controllers/carControllers")
const upload = require("../middleware/upload");
const userController = require("./../controllers/userControllers")

router.get("/", userController.isAdmin, carController.get);
router.get("/:id", userController.isAdmin, carController.getById)
router.post("/create", upload.single("photo"), userController.isAdmin, carController.post);
router.put("/:id", upload.single("photo"), userController.isAdmin, carController.updateById);
router.delete("/:id", userController.isAdmin, carController.deleteById);

module.exports = router;