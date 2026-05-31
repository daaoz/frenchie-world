# Frenchie World 🐾 - Setup Guide

A premium French Bulldog wellness and social community app built with React Native & Expo.

## ✅ Status

**Core files created:**
- ✅ src/ (App.tsx + screens + components)
- ✅ package.json
- ✅ app.json (Expo config)
- ✅ index.js (entry point)
- ✅ tsconfig.json
- ✅ .gitignore

## 🚀 Quick Start

### Prerequisites
- **Node.js**: 16+ (check: `node -v`)
- **npm**: 7+ (check: `npm -v`)
- **Expo CLI** (optional): `npm install -g eas-cli`

### Step 1: Install Dependencies
```bash
npm install
```

**What gets installed:**
- react-native & React 18
- expo (dev framework)
- @react-navigation (tab navigation)
- react-native-safe-area-context
- react-native-gesture-handler
- react-native-screens
- TypeScript types

### Step 2: Start Development Server
```bash
npm start
```

This starts Expo Metro bundler. You'll see a QR code in the terminal.

### Step 3: Choose Your Platform

**Option A: Expo Go (Fastest for Testing)**
1. Download Expo Go from App Store or Play Store
2. Scan the QR code shown in terminal
3. App loads in 10-20 seconds

**Option B: iOS Simulator**
```bash
npm run ios
```
(Requires Xcode installed on macOS)

**Option C: Android Emulator**
```bash
npm run android
```
(Requires Android Studio & emulator setup)

**Option D: Web Browser**
```bash
npm run web
```
(Opens at http://localhost:19006)

## 📁 Project Structure

```
frenchie-world/
├── src/
│   ├── App.tsx                    ← Root component
│   ├── navigation/
│   │   └── MainNavigator.tsx      ← Tab navigation
│   ├── screens/
│   │   ├── Home/
│   │   ├── Frenchie/
│   │   ├── Health/
│   │   ├── Post/
│   │   └── Profile/
│   ├── components/Common/
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   └── utils/
│       └── theme.ts
├── index.js                       ← Expo entry point
├── app.json                       ← Expo config
├── package.json                   ← Dependencies
├── tsconfig.json                  ← TypeScript config
└── README_SETUP.md               ← This file
```

## 🎨 What You'll See

5 Main Tabs:
1. **🏠 Home** - Welcome screen with quick stats
2. **🐕 Frenchie** - Frenchie profile with personality traits
3. **❤️ Health** - Weight tracking & vet visits
4. **💬 Feed** - Community posts (mock data)
5. **👤 Profile** - Human user profile

**Color Palette:**
- Primary: Lavender Purple (#9B7DB8)
- Secondary: Light Lavender (#E6D9F0)
- Accent: Pink (#F4A5D9)

## ⚡ Development Commands

```bash
# Start dev server
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android

# Run on Web
npm run web

# Type checking
npm run type-check

# Linting (when eslint is setup)
npm run lint
```

## 🔧 Troubleshooting

**Issue: Port 19000 already in use**
```bash
npm start -- --port 19001
```

**Issue: Metro bundler not starting**
```bash
npm start -- --clear
```

**Issue: Module not found errors**
```bash
rm -rf node_modules package-lock.json
npm install
npm start -- --clear
```

**Issue: TypeScript errors**
```bash
npm run type-check
```

## 📦 No Firebase Yet

This is the **UI skeleton** with:
- ✅ Tab navigation
- ✅ 5 full screens
- ✅ Reusable components
- ✅ Theme system
- ✅ Mock data only

**Firebase setup** comes next phase.

## 🎯 Next Steps After Testing

1. ✅ Verify app runs locally
2. 📦 Add Firebase setup (when ready)
3. 🔐 Add authentication
4. 💾 Connect Firestore
5. 📲 Build for TestFlight/Beta

## 📚 Resources

- [Expo Docs](https://docs.expo.dev)
- [React Native Docs](https://reactnative.dev)
- [React Navigation Docs](https://reactnavigation.org)

---

**Happy coding! 🐾**
