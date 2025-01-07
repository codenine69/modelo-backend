import { Router } from "express";

// controllers
import * as CtrlAuditoriaCaso from "./caso.controller";
const router = Router();
router.get("/list", CtrlAuditoriaCaso.getAllCasoController);


export default router;
