import {Router} from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { CreateComplimentController } from "../api/controllers/CreateComplimentController";

import { ListUserSendComplimentsController } from "../api/controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "../api/controllers/ListUserReceiveComplimentsController";

const router = Router();

router
.get('/users/compliments/send', ensureAuthenticated,ListUserSendComplimentsController.handle)
.get('/users/compliments/receive', ensureAuthenticated,ListUserReceiveComplimentsController.handle)
.post('/compliments',ensureAuthenticated, CreateComplimentController.handle)

export {router}