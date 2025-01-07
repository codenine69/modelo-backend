import { Router } from "express";

// controllers
import * as CtrlOficina from "./oficina.controller";
const router = Router();
router.get("/list", CtrlOficina.getAllOficinaController);


export default router;
