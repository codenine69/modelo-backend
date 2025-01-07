import mysql from 'mysql2'
import { env_entorno } from "../env/index";


export const db = mysql.createPool({
    // host: env_entorno.host,
    // user: env_entorno.user,
    // password: env_entorno.password,
    uri:env_entorno.URL,
    // database: 'db_personal'
});
