import {db} from "../../DB/conexion";
 


export function getAllCasoQuery() {
    return new Promise((resolve, reject) => {
        const query = `
        SELECT * FROM caso
        `; 
        db.query(query, (error, result) => {
            if (error) return reject(error);
            console.log(result);
            
            resolve(result);
        });
    });
}