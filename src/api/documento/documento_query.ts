import {db} from "../../DB/conexion";
 


export function getAllDocumentoQuery() {
    return new Promise((resolve, reject) => {
        const query = `
        SELECT * FROM documentos
        `; 
        db.query(query, (error, result) => {
            if (error) return reject(error);
            console.log(result);
            
            resolve(result);
        });
    });
}