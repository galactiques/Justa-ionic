import {Router} from "express";
import { getSaldos } from "../controladores/saldo.js";

const router = Router()

router.get('/', getSaldos)

export default router