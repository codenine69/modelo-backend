import mysql from 'mysql2'
import { env_entorno } from "../env/index";


export const db = mysql.createPool({
    // host: env_entorno.HOST,
    // user: env_entorno.USER,
    // password: env_entorno.password,
    // database: env_entorno.DATABASE,
    uri: env_entorno.URL || 'REEEEE'
});
