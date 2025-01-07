import {db} from "../../DB/conexion";
 


export function getAllOficinaQuery() {
    return new Promise((resolve, reject) => {
        const query = `
        SELECT * FROM oficinas
        `; 
        db.query(query, (error, result) => {
            if (error) return reject(error);
            console.log(result);
            
            resolve(result);
        });
    });
}