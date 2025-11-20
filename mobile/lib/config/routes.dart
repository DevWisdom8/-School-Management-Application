import 'package:flutter/material.dart';

class AppRoutes {
  static const String splash = '/';
  static const String login = '/login';
  static const String register = '/register';
  static const String dashboard = '/dashboard';
  static const String timetable = '/timetable';
  static const String grades = '/grades';
  static const String homework = '/homework';
  static const String attendance = '/attendance';
  static const String messages = '/messages';
  static const String documents = '/documents';
  static const String profile = '/profile';

  static Route<dynamic> generateRoute(RouteSettings settings) {
    switch (settings.name) {
      // case splash:
      //   return MaterialPageRoute(builder: (_) => SplashScreen());
      // case login:
      //   return MaterialPageRoute(builder: (_) => LoginScreen());
      // Add more routes as they are implemented
      default:
        return MaterialPageRoute(
          builder: (_) => Scaffold(
            body: Center(
              child: Text('No route defined for ${settings.name}'),
            ),
          ),
        );
    }
  }
}

