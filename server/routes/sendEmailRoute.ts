import {Router} from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { SendEmailController } from '../api/controllers/SendEmailController';

const router = Router();


router.post('/users/compliments/sendEmail', ensureAuthenticated ,SendEmailController.handle)

export { router };
