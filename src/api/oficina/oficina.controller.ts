import { Request, Response } from "express"; 
// import { PrismaClient } from "@prisma/client";
import multer from "multer";
import short from 'short-uuid'
import dayjs from "dayjs";
import path from "path";    
import { getAllOficinaQuery } from "./oficina_query";
 


//? GET ALL PRODUCTOS
//? ******************************************************************************************************************/

export const getAllOficinaController = async (req: Request, res: Response) => {
    try {
      const body = await getAllOficinaQuery()
  
      return res.json({ body });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msn: "Error: server 😕 ❗️❗️", err });
    }
  };