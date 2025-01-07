import { Request, Response } from "express"; 
// import { PrismaClient } from "@prisma/client";
import multer from "multer";
import short from 'short-uuid'
import dayjs from "dayjs";
import path from "path";     
import { getAllUsuarioQuery } from "./usuario_query";
 


//? GET ALL PRODUCTOS
//? ******************************************************************************************************************/

export const getAllUsuariosController = async (req: Request, res: Response) => {
    try {
      const body = await getAllUsuarioQuery()
  
      return res.json({ body });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msn: "Error: server 😕 ❗️❗️", err });
    }
  };