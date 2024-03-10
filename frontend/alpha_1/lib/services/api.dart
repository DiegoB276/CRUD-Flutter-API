import 'dart:convert';

import 'package:alpha_1/model/product_model.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:flutter/foundation.dart';

class Api {
  static const baseUrl = "YOUR BASE URL";

  static addProduct(Map data) async {
    debugPrint("data before send: $data");
    var url = Uri.parse("${baseUrl}add");
    try {
      final res = await http.post(url, body: data);

      if (res.statusCode == 200) {
        var data = jsonDecode(res.body.toString());
        debugPrint("Data succes: $data");
      } else {
        debugPrint("Error al conectarse al server");
      }
    } catch (error) {
      debugPrint("ERROR!!! ${error.toString()}");
    }
  }

  static getAllProducts() async {
    var url = Uri.parse("${baseUrl}all");

    List<Product> products = [];

    try {
      final res = await http.get(url);

      if (res.statusCode == 200) {
        var jsonData = jsonDecode(res.body);
        for (var p in jsonData) {
          Product product = Product(
            id: p['_id'],
            nameProduct: p['name'],
            priceProduct: p['price'],
            descriptionProduct: p['desc'],
          );
          products.add(product);
        }
        return products;
      } else {
        return [];
      }
    } catch (error) {
      debugPrint("ERROR!! ${error.toString()}");
    }
  }

  static deleteProduct(String id) async {
    var url = Uri.parse("${baseUrl}delete/$id");

    try {
      final res = await http.delete(url);
      if (res.statusCode == 200) {
        debugPrint(jsonDecode(res.body));
      } else {
        debugPrint("Error al eliminar Producto");
      }
    } catch (error) {
      debugPrint(error.toString());
    }
  }
}
