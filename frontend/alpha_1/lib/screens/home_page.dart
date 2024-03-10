import 'package:alpha_1/screens/add_product_page.dart';
import 'package:alpha_1/screens/get_all_products.dart';
import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            MaterialButton(
              onPressed: () {
                Navigator.of(context).push(
                  MaterialPageRoute(
                    builder: (context) => const AddProductPage(),
                  ),
                );
              },
              color: Colors.purple,
              textColor: Colors.white,
              child: const Text("CREATE"),
            ),
            MaterialButton(
              onPressed: () {
                Navigator.of(context).push(
                  MaterialPageRoute(
                    builder: (context) => const AllProductsPage(),
                  ),
                );
              },
              color: Colors.purple,
              textColor: Colors.white,
              child: const Text("READ"),
            ),
            MaterialButton(
              onPressed: () {},
              color: Colors.purple,
              textColor: Colors.white,
              child: const Text("UPDATE"),
            ),
          ],
        ),
      ),
    );
  }
}
