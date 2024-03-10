import 'package:alpha_1/services/api.dart';
import 'package:flutter/material.dart';

class AddProductPage extends StatefulWidget {
  const AddProductPage({super.key});

  @override
  State<AddProductPage> createState() => _AddProductPageState();
}

class _AddProductPageState extends State<AddProductPage> {
  final nameController = TextEditingController();
  final priceController = TextEditingController();
  final descController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Agregar Producto"),
        centerTitle: true,
      ),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 15),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              TextField(
                controller: nameController,
                decoration: InputDecoration(
                  hintText: "Name Product",
                  border: OutlineInputBorder(
                    borderSide: BorderSide(
                      color: Colors.purple.shade800,
                    ),
                  ),
                ),
              ),
              const SizedBox(height: 10),
              TextField(
                controller: priceController,
                decoration: InputDecoration(
                  hintText: "Price Product",
                  border: OutlineInputBorder(
                    borderSide: BorderSide(
                      color: Colors.purple.shade800,
                    ),
                  ),
                ),
              ),
              const SizedBox(height: 10),
              TextField(
                controller: descController,
                maxLines: 3,
                decoration: InputDecoration(
                  hintText: "Description Product",
                  border: OutlineInputBorder(
                    borderSide: BorderSide(
                      color: Colors.purple.shade800,
                    ),
                  ),
                ),
              ),
              const SizedBox(height: 30),
              MaterialButton(
                onPressed: () => sendData(
                  nameController.text,
                  priceController.text,
                  descController.text,
                ),
                color: Colors.purple,
                textColor: Colors.white,
                child: const Text("Agregar Producto"),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

void sendData(String name, String price, String desc) {
  var data = {
    "name": name,
    "price": price,
    "desc": desc,
  };
  Api.addProduct(data);
}
