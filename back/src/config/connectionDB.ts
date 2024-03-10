import { connect } from "mongoose";

const ConnectionDB = ()=>{
    const URL = String(process.env.DB_MONGO);
    connect(URL).then(()=>{
        console.log("Estás conectado a mongoDB", process.env.DB_MONGO);
    }).catch((error)=>{
        console.log("No encuentro a Mongo", error);
    });
}

export default ConnectionDB;