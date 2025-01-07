import dotenv from "dotenv";
dotenv.config();

export const env_entorno = {
  SECRET_TOKEN: process.env.SECRET_TOKEN || "@20kkppPOLOÑRol2099@",
  PORT: process.env.PORT || 4000,

  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'root',
  database: process.env.MYSQL_DB || 'modelo',
  URL: process.env.DATABASE_URL
};
