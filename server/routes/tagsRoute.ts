import {Router} from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureAdmin } from "../middlewares/ensureAdmin";

import { CreateTagController } from "../api/controllers/CreateTagController";

import { ListTagsController } from "../api/controllers/ListTagsController";

const router = Router();

router
.get('/tags',ensureAuthenticated, ListTagsController.handle)
.post("/tags", ensureAuthenticated , ensureAdmin ,CreateTagController.handle)

export {router}