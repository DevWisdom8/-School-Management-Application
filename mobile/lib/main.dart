import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'app.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  // Initialize dependencies
  // await Firebase.initializeApp();
  // await Hive.initFlutter();

  runApp(
    const ProviderScope(
      child: SchoolManagementApp(),
    ),
  );
}

