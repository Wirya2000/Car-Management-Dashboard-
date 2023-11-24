import express from 'express'

const router = express.Router();
const userController = require("./../controllers/userControllers")
const upload = require("../middleware/upload");


router.get("/admin/add", userController.isSuperAdmin, userController.editRoleToAdmin);
router.get("/userProfile", userController.authorize, userController.getUserProfile) // semua role
router.post("/register", upload.none(), userController.register); // => Semua role , default role  = member;
router.post("/login", upload.none(), userController.login); // => semua role 

module.exports = router;