const { Router } = require('express')
const UsersController = require('../controllers/UsersController')
const UserAvatarController = require("../controllers/UserAvatarController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")
const multer = require("multer")
const uploadConfig = require("../configs/upload")

const usersRoutes = Router()

const userController = new UsersController
const userAvatarController = new UserAvatarController

const upload = multer(uploadConfig.MULTER)

usersRoutes.post("/", userController.create)
usersRoutes.put("/", ensureAuthenticated, userController.update)
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update)

module.exports = usersRoutes