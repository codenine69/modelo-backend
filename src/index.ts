import express from "express";
import cors from "cors";
import morgan from "morgan";
import { env_entorno } from "./env"; 
import casoRoutes from "./api/caso/caso.routes"
// import { conMysql } from "./DB/conexion";


//server app
const app = express();

const port = env_entorno.PORT || 4000 ;
app.listen(port, () => {
  console.log(`🔥  🚀  server runn port ➡️ ... ${port} 😃  ✔️`);
});

 
// Configura CORS para permitir solicitudes desde http://localhost:4200
app.use(cors({ origin: 'http://localhost:4200' }));

//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// static files
app.use(express.static("upload"));

//routes 
app.use('/caso', casoRoutes)   

app.use(express.static("upload"));

