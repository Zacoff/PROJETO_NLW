import {Router} from "express";

import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import {AuthenticateUserController} from "./controllers/AuthenticateUserController";

import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";

import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";

const router = Router();

router
.post("/users",ensureAuthenticated ,CreateUserController.handle) //middlewares
.post("/tags", ensureAuthenticated , ensureAdmin ,CreateTagController.handle)
.post("/login", AuthenticateUserController.handle)
.post('/compliments',ensureAuthenticated, CreateComplimentController.handle)

.get('/users/compliments/send', ensureAuthenticated,ListUserSendComplimentsController.handle)
.get('/users/compliments/receive', ensureAuthenticated,ListUserReceiveComplimentsController.handle)
.get('/tags',ensureAuthenticated, ListTagsController.handle)
.get('/users', ensureAuthenticated, ListUsersController.handle)

export {router}