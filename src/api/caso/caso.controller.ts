import { Request, Response } from "express"; 
// import { PrismaClient } from "@prisma/client";
import multer from "multer";
import short from 'short-uuid'
import dayjs from "dayjs";
import path from "path";  
import { getAllCasoQuery } from "./caso_query";
 


//? GET ALL PRODUCTOS
//? ******************************************************************************************************************/

export const getAllCasoController = async (req: Request, res: Response) => {
    try {
      const body = await getAllCasoQuery()
  
      return res.json({ body });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msn: "Error: server 😕 ❗️❗️", err });
    }
  };