import { Router } from "express";
import { postRecebivel, getRecebivel } from "../controladores/recebiveis.js";

const router = Router()

router.get('/', getRecebivel)
router.post('/', postRecebivel)




export default router