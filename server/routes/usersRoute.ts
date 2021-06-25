import {Router} from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { CreateUserController } from "../api/controllers/CreateUserController";

import { ListUsersController } from "../api/controllers/ListUsersController";

const router = Router();

router
.get('/users', ensureAuthenticated, ListUsersController.handle)

.post("/users",ensureAuthenticated ,CreateUserController.handle)

export {router}