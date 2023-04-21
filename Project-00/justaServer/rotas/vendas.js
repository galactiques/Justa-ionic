import {Router} from "express";
import {getVenda, getVendas , postVenda} from "../controladores/vendas.js";

const router = Router()

router.get('/', getVendas)
router.get('/:id', getVenda)
router.post('/', postVenda)




export default router