import express from 'express'
// const express = require("express");
const router = express.Router();
const carController = require("./../controllers/carControllers")
const upload = require("../middleware/upload");

router.get("/", carController.get);
router.get("/:id", carController.getById)
router.post("/create", upload.single("photo"), carController.post);
router.put("/:id", upload.single("photo"), carController.updateById);
router.delete("/:id", carController.deleteById);

module.exports = router;