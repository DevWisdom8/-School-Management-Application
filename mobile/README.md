# School Management Mobile App

Cross-platform mobile application (iOS & Android) for the School Management System built with Flutter.

## 🚀 Quick Start

### Prerequisites

- Flutter SDK >= 3.0.0
- Dart SDK >= 3.0.0
- Android Studio / Xcode
- Android SDK / iOS SDK

### Installation

```bash
# Install dependencies
flutter pub get

# Check Flutter setup
flutter doctor

# Run on Android
flutter run -d android

# Run on iOS (macOS only)
flutter run -d ios
```

## 📁 Project Structure

```
mobile/
├── android/             # Android native code
├── ios/                 # iOS native code
├── lib/
│   ├── main.dart        # App entry point
│   ├── app.dart         # Root app widget
│   ├── config/          # Configuration files
│   │   ├── app_config.dart
│   │   ├── routes.dart
│   │   └── theme.dart
│   ├── core/            # Core functionality
│   │   ├── constants/   # App constants
│   │   ├── utils/       # Utility functions
│   │   └── widgets/     # Reusable widgets
│   ├── data/            # Data layer
│   │   ├── models/      # Data models
│   │   ├── repositories/ # Data repositories
│   │   └── services/    # API services
│   ├── providers/       # State management
│   │   └── auth_provider.dart
│   ├── screens/         # App screens
│   │   ├── auth/        # Authentication screens
│   │   ├── dashboard/   # Dashboard screens
│   │   ├── grades/      # Grades screens
│   │   ├── timetable/   # Timetable screens
│   │   └── ...
│   └── widgets/         # Screen-specific widgets
├── assets/              # Images, fonts, etc.
│   ├── images/
│   ├── icons/
│   └── fonts/
├── test/                # Unit & widget tests
├── pubspec.yaml         # Project dependencies
└── README.md
```

## 🎨 Features

### Core Features
- ✅ User authentication (JWT)
- ✅ Role-based access (Student, Teacher, Parent, Admin)
- ✅ Push notifications (Firebase)
- ✅ Offline mode support
- ✅ Dark/Light theme
- ✅ Multi-language support

### Student Features
- View personal timetable
- Check grades and progress
- Submit homework
- View attendance records
- Internal messaging
- Download documents

### Teacher Features
- Manage classes
- Add/edit grades
- Create homework
- Mark attendance
- Messaging
- Upload materials

### Parent Features
- Monitor children's progress
- View timetables
- Check grades
- Justify absences
- Communication with teachers

### Admin Features
- User management
- System statistics
- Announcements
- Reports generation

## 🔌 Key Packages

### State Management
- **Provider** - Simple state management
- **Riverpod** - Advanced state management

### Networking
- **Dio** - HTTP client
- **Socket.io** - Real-time communication

### Storage
- **Hive** - Local database
- **Shared Preferences** - Key-value storage
- **Flutter Secure Storage** - Secure credential storage

### UI/UX
- **Google Fonts** - Custom fonts
- **Cached Network Image** - Image caching
- **Shimmer** - Loading placeholders
- **FL Chart** - Charts and graphs
- **Table Calendar** - Calendar widget

### Firebase
- **Firebase Core** - Firebase initialization
- **Firebase Messaging** - Push notifications

## 🔒 Authentication

```dart
import 'package:school_management_mobile/data/services/auth_service.dart';

// Login
final authService = AuthService();
final result = await authService.login(email, password);

if (result.success) {
  // Navigate to dashboard
}

// Logout
await authService.logout();
```

## 📡 API Integration

```dart
import 'package:school_management_mobile/data/services/api_service.dart';

class ApiService {
  final Dio _dio = Dio(BaseOptions(
    baseUrl: 'http://your-api-url.com/api/v1',
  ));

  Future<Response> get(String path) async {
    return await _dio.get(path);
  }

  Future<Response> post(String path, dynamic data) async {
    return await _dio.post(path, data: data);
  }
}
```

## 🎨 Theming

The app supports both light and dark themes:

```dart
// Light theme
ThemeData lightTheme = ThemeData(
  primarySwatch: Colors.blue,
  brightness: Brightness.light,
);

// Dark theme
ThemeData darkTheme = ThemeData(
  primarySwatch: Colors.blue,
  brightness: Brightness.dark,
);
```

## 🧪 Testing

```bash
# Run all tests
flutter test

# Run with coverage
flutter test --coverage

# Run specific test
flutter test test/auth_test.dart
```

### Writing Tests

```dart
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('AuthService', () {
    test('login with valid credentials returns success', () async {
      final authService = AuthService();
      final result = await authService.login('test@example.com', 'password');
      expect(result.success, true);
    });
  });
}
```

## 📱 Building

### Debug Build

```bash
# Android
flutter build apk --debug

# iOS
flutter build ios --debug
```

### Release Build

```bash
# Android APK
flutter build apk --release

# Android App Bundle (for Play Store)
flutter build appbundle --release

# iOS (for App Store)
flutter build ios --release
```

## 🔐 Configuration

### Android

1. Update `android/app/build.gradle`:
```gradle
android {
    defaultConfig {
        applicationId "com.yourcompany.school_management"
        minSdkVersion 21
        targetSdkVersion 34
    }
}
```

2. Add `android/app/google-services.json` for Firebase

### iOS

1. Update `ios/Runner/Info.plist` with required permissions
2. Add `ios/Runner/GoogleService-Info.plist` for Firebase
3. Update Bundle Identifier in Xcode

### Environment Variables

Create `.env` file:
```env
API_BASE_URL=http://localhost:5000/api/v1
SOCKET_URL=http://localhost:5000
```

## 📲 Push Notifications

### Setup Firebase

1. Create Firebase project
2. Add Android and iOS apps
3. Download configuration files
4. Follow Firebase setup instructions

### Handle Notifications

```dart
FirebaseMessaging.onMessage.listen((RemoteMessage message) {
  print('Got a message whilst in the foreground!');
  print('Message data: ${message.data}');

  if (message.notification != null) {
    print('Message also contained a notification: ${message.notification}');
  }
});
```

## 🌐 Localization

Add translations in `lib/l10n/`:

```dart
// en.json
{
  "app_name": "School Management",
  "login": "Login",
  "email": "Email",
  "password": "Password"
}

// fr.json
{
  "app_name": "Gestion Scolaire",
  "login": "Connexion",
  "email": "Email",
  "password": "Mot de passe"
}
```

## 🚀 Deployment

### Android (Google Play)

1. Generate keystore:
```bash
keytool -genkey -v -keystore ~/key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias key
```

2. Create `android/key.properties`:
```properties
storePassword=<password>
keyPassword=<password>
keyAlias=key
storeFile=<location of key.jks>
```

3. Build and upload to Play Console

### iOS (App Store)

1. Open project in Xcode
2. Configure signing
3. Archive the app
4. Upload to App Store Connect

## 📊 Performance

- Lazy loading for lists
- Image caching
- State management optimization
- Network request caching
- Bundle size optimization

## 🐛 Debugging

```bash
# Enable verbose logging
flutter run --verbose

# Hot reload
Press 'r' in terminal

# Hot restart
Press 'R' in terminal

# Inspect layout
flutter run --debug
# Then use Flutter DevTools
```

## 📚 Resources

- [Flutter Documentation](https://flutter.dev/docs)
- [Dart Documentation](https://dart.dev/guides)
- [Firebase for Flutter](https://firebase.google.com/docs/flutter/setup)
- [Material Design](https://material.io/design)
- [Cupertino Design](https://developer.apple.com/design/human-interface-guidelines/)

## 🤝 Contributing

See [CONTRIBUTING.md](../CONTRIBUTING.md) for development guidelines.

## 📄 License

MIT License - see [LICENSE](../LICENSE)

