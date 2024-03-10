import ProductSchema from "../schema/product_schema";
import { Response } from "express";

class ProductDao {
  //Get all products
  protected static async getAllProducts(response: Response): Promise<any> {
    const data = await ProductSchema.find().sort({ _id: 1 });
    response.status(200).json(data);
  }

  //Create new Product
  protected static async addProduct(
    params: any,
    response: Response
  ): Promise<any> {
    const found = await ProductSchema.findOne(params);
    if (found) {
      response.status(400).json({ message: "El producto ya existe" });
    } else {
      const productObject = new ProductSchema(params);
      productObject
        .save()
        .then(() =>
          response.status(200).json({ message: "Producto agregado con éxito" })
        )
        .catch(() =>
          response.status(400).json({ message: "Error al agregar el producto" })
        );
    }
  }

  protected static async deleteProduct(
    identifier: any,
    response: Response
  ): Promise<any> {
    try {
      const found = await ProductSchema.findById(identifier).exec();
      if (found) {
        const deleted = await ProductSchema.findByIdAndDelete(identifier);
        response
          .status(200)
          .json({
            message: "Producto eliminado con éxito.",
            deleted_register: deleted,
          });
      } else {
        response.status(400).json({ message: "El registro no existe." });
      }
    } catch (error) {
      response.status(400).json({message: "No se pudo eliminar el registro."});
    }
  }
}

export default ProductDao;
