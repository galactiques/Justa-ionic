import {Router} from "express";
import { getUsers } from "../controladores/users.js";

const router = Router()

router.get('/', getUsers)

export default router