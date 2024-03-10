import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import express from "express";
import ConexionDB from "./connectionDB";
import apiProductRoute from "../routes/product_routes";

class Server {
  public app: express.Application;

  constructor() {
    dotenv.config({ path: "variables.env" });
    ConexionDB();
    this.app = express();
    this.initConfiguration();
    this.initRoutes();
  }

  public initConfiguration() {
    this.app.set("PORT", process.env.PORT);
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.json({ limit: "50MB" }));
    this.app.use(express.urlencoded({ extended: true }));
  }

  public initRoutes() {
    this.app.use("/backend", apiProductRoute);
  }

  public initServer() {
    this.app.listen(this.app.get("PORT"), () => {
      console.log("Backend listo en:", "localhost:"+this.app.get("PORT"));
    });
  }
}

export default Server;
