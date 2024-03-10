import ProductDao from "../dao/product_dao"
import { Response, Request } from "express";

class ProductController extends ProductDao{
    public GetAll(request: Request, response: Response){
    ProductController.getAllProducts(response);
    }

    public CreateProduct(request: Request, response:Response){
        ProductController.addProduct(request.body, response);
    }

    public DeleteProduct(request: Request, response: Response){
        ProductController.deleteProduct(request.params.code, response);
    }
}

const productController = new ProductController();
export default productController;