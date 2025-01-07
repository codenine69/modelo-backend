import {db} from "../../DB/conexion";
 


export function getAllUsuarioQuery() {
    return new Promise((resolve, reject) => {
        const query = `
        SELECT * FROM usuarios
        `; 
        db.query(query, (error, result) => {
            if (error) return reject(error);
            console.log(result);
            
            resolve(result);
        });
    });
}