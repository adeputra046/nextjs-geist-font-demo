# Android APK Build Guide for Correct Image Game

This guide explains how to convert the Next.js "Correct Image" game into an Android APK.

## Method 1: Progressive Web App (PWA) - Easiest
The game is already configured as a PWA and can be installed on Android devices directly.

### Steps:
1. Open the game in Chrome on Android
2. Tap the menu (three dots) → "Add to Home Screen"
3. The game will appear as an app icon on your home screen

## Method 2: Using Capacitor (Recommended for APK)

### Prerequisites:
- Node.js installed
- Android Studio installed
- Java JDK 11 or higher

### Step 1: Install Capacitor
```bash
npm install @capacitor/core @capacitor/cli @capacitor/android
```

### Step 2: Initialize Capacitor
```bash
npx cap init "Correct Image" "com.correctimage.kidsgame" --web-dir out
```

### Step 3: Build the Next.js app
```bash
npm run build
```

### Step 4: Add Android platform
```bash
npx cap add android
```

### Step 5: Open in Android Studio
```bash
npx cap open android
```

### Step 6: Build APK
In Android Studio:
1. Build → Build Bundle(s) / APK(s) → Build APK(s)
2. The APK will be in: `android/app/build/outputs/apk/debug/app-debug.apk`

## Method 3: Using Cordova (Alternative)

### Install Cordova
```bash
npm install -g cordova
```

### Create Cordova project
```bash
cordova create CorrectImage com.correctimage.kidsgame "Correct Image"
cd CorrectImage
cordova platform add android
```

### Copy built files
```bash
npm run build
cp -r out/* www/
```

### Build APK
```bash
cordova build android
```

## Method 4: Online Services (No Setup)

### Using PWA Builder
1. Go to https://www.pwabuilder.com
2. Enter your website URL
3. Download the Android APK package

## Testing the APK

### Install on Android device:
1. Enable "Install from Unknown Sources" in Android settings
2. Transfer the APK file to your device
3. Tap the APK file to install

## Distribution

### For Google Play Store:
1. Create a signed release APK
2. Create Google Play Console account
3. Upload APK and fill store listing
4. Submit for review

## Quick Start Commands

```bash
# Install dependencies
npm install

# Build the app
npm run build

# For PWA (installable web app)
npm run dev  # Then visit http://localhost:8000

# For APK with Capacitor
npm install @capacitor/core @capacitor/cli @capacitor/android
npx cap init "Correct Image" "com.correctimage.kidsgame" --web-dir out
npm run build
npx cap add android
npx cap open android
```

## Notes
- The game is optimized for mobile devices
- Touch-friendly interface with large buttons
- Works offline as PWA
- No external dependencies for images/icons
