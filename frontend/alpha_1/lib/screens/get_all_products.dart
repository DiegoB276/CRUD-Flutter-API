import 'package:alpha_1/model/product_model.dart';
import 'package:alpha_1/services/api.dart';
import 'package:flutter/material.dart';

class AllProductsPage extends StatefulWidget {
  const AllProductsPage({super.key});

  @override
  State<AllProductsPage> createState() => _AllProductsPageState();
}

class _AllProductsPageState extends State<AllProductsPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: FutureBuilder(
        future: Api.getAllProducts(),
        builder: (BuildContext context, AsyncSnapshot snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(
              child: CircularProgressIndicator(),
            );
          }
          if (!snapshot.hasData) {
            return const Center(
              child: Text("There is any register"),
            );
          } else {
            List<Product> productData = snapshot.data;
            return ListView.builder(
              itemCount: productData.length,
              itemBuilder: (BuildContext context, int index) {
                return Padding(
                  padding:
                      const EdgeInsets.symmetric(vertical: 10, horizontal: 10),
                  child: Card(
                    color: Colors.blueGrey[200],
                    child: Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            productData[index].nameProduct!,
                            style: const TextStyle(
                              fontSize: 20,
                              fontWeight: FontWeight.w600,
                            ),
                          ),
                          Text(
                            productData[index].priceProduct.toString(),
                            style: const TextStyle(
                              fontSize: 17,
                            ),
                          ),
                          Text(
                            productData[index].descriptionProduct!,
                            style: const TextStyle(
                              fontSize: 17,
                            ),
                          ),
                          const SizedBox(height: 10),
                          MaterialButton(
                            onPressed: () =>
                                onDelete(context, productData[index].id!),
                            color: Colors.red.shade300,
                            textColor: Colors.white,
                            child: const Text(
                              "Eliminar",
                              style: TextStyle(fontSize: 17),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                );
              },
            );
          }
        },
      ),
    );
  }
}

void onDelete(BuildContext context, String id) {
  Api.deleteProduct(id);
  ScaffoldMessenger.of(context).showSnackBar(
    const SnackBar(
      content: Text("Producto eliminado con éxito"),
    ),
  );
}
