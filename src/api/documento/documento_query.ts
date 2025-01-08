import {db} from "../../DB/conexion";
 

export function insertDocumento(body: any) {
    return new Promise((resolve, reject) => {
        db.query(`INSERT INTO documentos SET ?`, body, (error, result) => {
            if (error) return reject(error);
            resolve(result);
        })
    })
}

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