import { Router } from "express";

// controllers
import * as CtrlUsuario from "./usuario.controller";
const router = Router();
router.get("/list", CtrlUsuario.getAllUsuariosController);


export default router;
