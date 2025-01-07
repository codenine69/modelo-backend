import { Router } from "express";

// controllers
import * as CtrlDocumento from "./documento.controller";
const router = Router();
router.get("/list", CtrlDocumento.getAllDocumentoController);


export default router;
