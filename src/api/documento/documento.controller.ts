import { Request, Response } from "express"; 
// import { PrismaClient } from "@prisma/client";
import multer from "multer";
import short from 'short-uuid'
import dayjs from "dayjs";
import path from "path";   
import { getAllDocumentoQuery, insertDocumento } from "./documento_query";
 


//? GET ALL PRODUCTOS
//? ******************************************************************************************************************/

export const getAllDocumentoController = async (req: Request, res: Response) => {
    try {
      const body = await getAllDocumentoQuery()
  
      return res.json({ body });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msn: "Error: server 😕 ❗️❗️", err });
    }
  };

  export const insertDocumentoController = async (req: Request, res: Response) => {
    try {
      const { body } = req;
      const create = insertDocumento(body);
      return res.json({ msn: "registro articulos", create });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msn: "Error: Server", err });
  
    }
  };
  