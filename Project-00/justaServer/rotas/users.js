import {Router} from "express";
import { getUsers, patchSaldo2} from "../controladores/users.js";

const router = Router()

router.get('/', getUsers)
router.patch('/:id', patchSaldo2)

export default router