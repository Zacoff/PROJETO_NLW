import {Router} from "express";

import {AuthenticateUserController} from "../api/controllers/AuthenticateUserController";

const router = Router();

router.post("/login", AuthenticateUserController.handle)

export {router}