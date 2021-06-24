import {Router} from "express";

import { CreateUserController } from "./controllers/CreateUserController"
import { CreateTagController } from "./controllers/CreateTagController"
import { CreateComplimentController } from "./controllers/CreateComplimentController"

import { ensureAdmin } from "./middlewares/ensureAdmin";
import {AuthenticateUserController} from "./controllers/AuthenticateUserController"

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

router.post("/users" ,createUserController.handle) //middlewares
.post("/tags", ensureAdmin ,createTagController.handle)
.post("/login", authenticateUserController.handle)
.post('/compliments', createComplimentController.handle)



export {router}