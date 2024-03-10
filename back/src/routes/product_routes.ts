import { Router } from "express";
import ProductController from "../controller/product_controller";

class ProductRouter{
    public apiRouter: Router;

    constructor(){
        this.apiRouter = Router();
        this.configureRouter();
    }

    public configureRouter(){
        this.apiRouter.get("/api/v1/products/all", ProductController.GetAll);
        this.apiRouter.post("/api/v1/products/add", ProductController.CreateProduct);
        this.apiRouter.delete("/api/v1/products/delete/:code", ProductController.DeleteProduct);
    }
}

const productRouter = new ProductRouter();
export default productRouter.apiRouter;