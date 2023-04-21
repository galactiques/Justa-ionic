import {Router} from "express";
import { getEmprestimos } from "../controladores/emprestimos.js";


const router = Router()

router.get('/', getEmprestimos)


export default router
