# Frenchie World MVP - Simplified Architecture

## 🎯 MVP Scope
Launch with core features only:
- User authentication & profiles
- Frenchie profile creation & personality
- Health tracking (weight, vet visits, medications)
- Medical history
- Simple reminders
- Community feed (posts + photos)
- Post creation & viewing

**Target: Launch in 8-12 weeks**

---

## 📁 Folder Structure

```
frenchie-world/
├── src/
│   ├── screens/
│   │   ├── Auth/
│   │   │   ├── LoginScreen.tsx
│   │   │   ├── SignupScreen.tsx
│   │   │   └── OnboardingScreen.tsx
│   │   ├── Home/
│   │   │   ├── FeedScreen.tsx
│   │   │   ├── FrenchieListScreen.tsx
│   │   │   └── HomeScreen.tsx
│   │   ├── Frenchie/
│   │   │   ├── FrenchieProfileScreen.tsx
│   │   │   ├── AddFrenchieScreen.tsx
│   │   │   ├── EditFrenchieScreen.tsx
│   │   │   ├── PersonalityScreen.tsx
│   │   │   ├── HealthScreen.tsx
│   │   │   ├── MedicalHistoryScreen.tsx
│   │   │   └── RemindersScreen.tsx
│   │   ├── Post/
│   │   │   ├── CreatePostScreen.tsx
│   │   │   ├── PostDetailScreen.tsx
│   │   │   └── FeedScreen.tsx
│   │   ├── Profile/
│   │   │   ├── HumanProfileScreen.tsx
│   │   │   └── EditProfileScreen.tsx
│   │   └── Settings/
│   │       └── SettingsScreen.tsx
│   │
│   ├── components/
│   │   ├── Common/
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── Loading.tsx
│   │   ├── Post/
│   │   │   ├── PostCard.tsx
│   │   │   ├── PostComposer.tsx
│   │   │   └── ImagePicker.tsx
│   │   ├── Frenchie/
│   │   │   ├── FrenchieCard.tsx
│   │   │   ├── FrenchieSelector.tsx
│   │   │   ├── HealthMetricCard.tsx
│   │   │   └── PersonalityTrait.tsx
│   │   └── Reminder/
│   │       ├── ReminderCard.tsx
│   │       └── ReminderForm.tsx
│   │
│   ├── services/
│   │   ├── firebase/
│   │   │   ├── firebaseConfig.ts
│   │   │   ├── authService.ts
│   │   │   ├── userService.ts
│   │   │   ├── frenchieService.ts
│   │   │   ├── postService.ts
│   │   │   ├── healthService.ts
│   │   │   └── storageService.ts
│   │   ├── notification/
│   │   │   └── reminderService.ts
│   │   └── image/
│   │       └── imageService.ts
│   │
│   ├── store/
│   │   ├── store.ts
│   │   ├── slices/
│   │   │   ├── authSlice.ts
│   │   │   ├── userSlice.ts
│   │   │   ├── frenchiesSlice.ts
│   │   │   ├── feedSlice.ts
│   │   │   ├── healthSlice.ts
│   │   │   └── remindersSlice.ts
│   │   └── hooks/
│   │       └── index.ts
│   │
│   ├── navigation/
│   │   ├── RootNavigator.tsx
│   │   ├── AuthNavigator.tsx
│   │   ├── MainNavigator.tsx
│   │   └── types.ts
│   │
│   ├── types/
│   │   ├── index.ts
│   │   ├── user.ts
│   │   ├── frenchie.ts
│   │   ├── post.ts
│   │   ├── health.ts
│   │   └── reminder.ts
│   │
│   ├── utils/
│   │   ├── constants.ts
│   │   ├── validators.ts
│   │   ├── formatters.ts
│   │   └── theme.ts
│   │
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useFrenchie.ts
│   │   ├── usePost.ts
│   │   └── useHealth.ts
│   │
│   ├── App.tsx
│   └── index.ts
│
├── firebase/
│   ├── firestore.rules
│   ├── storage.rules
│   └── functions/
│       ├── package.json
│       ├── src/
│       │   └── index.ts (minimal setup for future)
│       └── .gitignore
│
├── app.json
├── app.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## 📊 Data Models (Firestore Collections)

### `users/{userId}`
```typescript
{
  uid: string;
  email: string;
  displayName: string;
  profileImage: string;
  bio: string;
  createdAt: timestamp;
  updatedAt: timestamp;
}
```

### `frenchies/{frenchieId}`
```typescript
{
  id: string;
  userId: string; // owner
  name: string;
  breed: string; // "French Bulldog" or specific type
  birthDate: timestamp;
  profileImage: string;
  
  // Personality
  personality: {
    favoriteSnack: string;
    favoriteToy: string;
    traits: string[]; // ["playful", "lazy", "cuddly", etc]
    energyLevel: number; // 1-5
    fears: string[];
    habits: string[];
    snores: boolean;
    behaviorNotes: string;
  };
  
  // Health
  weight: number; // kg
  lastWeightDate: timestamp;
  
  createdAt: timestamp;
  updatedAt: timestamp;
}
```

### `medicalHistory/{recordId}`
```typescript
{
  id: string;
  frenchieId: string;
  userId: string;
  
  type: "vet_visit" | "vaccination" | "medication" | "surgery" | "note";
  date: timestamp;
  title: string;
  description: string;
  vetName?: string;
  diagnosis?: string;
  treatment?: string;
  notes: string;
  
  createdAt: timestamp;
  updatedAt: timestamp;
}
```

### `health/{healthEntryId}`
```typescript
{
  id: string;
  frenchieId: string;
  userId: string;
  
  date: timestamp;
  weight: number;
  notes: string;
  
  createdAt: timestamp;
}
```

### `reminders/{reminderId}`
```typescript
{
  id: string;
  frenchieId: string;
  userId: string;
  
  title: string;
  description: string;
  type: "medication" | "vet_appointment" | "grooming" | "feeding" | "custom";
  
  // Scheduling
  startDate: timestamp;
  frequency: "once" | "daily" | "weekly" | "monthly";
  daysOfWeek?: number[]; // 0-6 for weekly
  time: string; // "09:00" format
  
  isActive: boolean;
  
  createdAt: timestamp;
  updatedAt: timestamp;
}
```

### `posts/{postId}`
```typescript
{
  id: string;
  userId: string;
  frenchieId: string; // which frenchie is featured
  
  content: string;
  images: string[]; // array of storage URLs
  
  createdAt: timestamp;
  updatedAt: timestamp;
}
```

---

## 🛠️ Tech Stack - MVP Edition

```json
{
  "dependencies": {
    "react-native": "^0.72.0",
    "react": "^18.2.0",
    "@react-navigation/native": "^6.1.0",
    "@react-navigation/bottom-tabs": "^6.5.0",
    "@react-navigation/stack": "^6.3.0",
    "react-redux": "^8.1.0",
    "@reduxjs/toolkit": "^1.9.0",
    "firebase": "^10.0.0",
    "typescript": "^5.0.0",
    "axios": "^1.4.0",
    "react-native-image-picker": "^5.0.0",
    "react-native-svg": "^13.0.0",
    "react-native-svg-transformer": "^1.0.0"
  },
  "devDependencies": {
    "@react-native-async-storage/async-storage": "^1.18.0",
    "expo": "^49.0.0",
    "eas-cli": "latest"
  }
}
```

---

## 🎨 UI/Theme Structure

**Lavender/Purple Palette (MVP):**
```typescript
const theme = {
  colors: {
    primary: "#9B7DB8",      // lavender purple
    secondary: "#E6D9F0",    // light lavender
    accent: "#F4A5D9",       // pink accent
    background: "#FAFBFC",   // nearly white
    surface: "#FFFFFF",      // white
    text: "#2D3142",         // dark text
    textSecondary: "#6B7280", // gray text
    success: "#10B981",
    error: "#EF4444",
    warning: "#F59E0B",
  },
  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    full: 999,
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
  }
};
```

---

## 🚀 Development Phases (8-12 weeks)

### Phase 1: Foundation (Weeks 1-2)
- [ ] Firebase setup & Firestore schema
- [ ] Authentication (signup/login)
- [ ] Navigation structure
- [ ] Basic UI components

### Phase 2: Core Features (Weeks 3-5)
- [ ] User profile management
- [ ] Frenchie creation & management
- [ ] Personality data input form
- [ ] Health tracking (weight logs)

### Phase 3: Extended Features (Weeks 6-8)
- [ ] Medical history tracking
- [ ] Reminders setup & UI
- [ ] Image uploads (profile + posts)
- [ ] Community feed basics

### Phase 4: Polish & Testing (Weeks 9-10)
- [ ] UI refinement
- [ ] Performance optimization
- [ ] Manual testing
- [ ] Bug fixes

### Phase 5: Deployment Prep (Weeks 11-12)
- [ ] Build for iOS & Android
- [ ] TestFlight/Beta testing
- [ ] App Store & Play Store submission prep

---

## 📱 Screen Map

```
Authentication
├── Login → Signup → Onboarding

Main App (Tab Navigation)
├── Home
│   ├── Feed Screen
│   └── Create Post
├── Frenchies
│   ├── Frenchie List
│   ├── Add/Edit Frenchie
│   ├── Frenchie Profile
│   ├── Personality
│   ├── Health
│   ├── Medical History
│   └── Reminders
├── My Profile
│   └── Edit Profile
└── Settings
```

---

## 🔒 Firebase Security (MVP)

**Firestore Rules:**
- Users can only read/write their own data
- Posts visible to all authenticated users
- Medical history/reminders only visible to owner

**Storage Rules:**
- User images in `/users/{userId}/*`
- Frenchie images in `/frenchies/{frenchieId}/*`
- Post images in `/posts/{postId}/*`

---

## 📋 Testing Strategy (MVP)

**Focus on:**
- User flows (signup, create frenchie, add post)
- Manual testing on 2-3 devices
- Firestore security rule validation

**Skip for MVP:**
- Comprehensive unit tests
- Integration tests
- CI/CD automation

---

## 🚨 Critical Path Items (Do These First)

1. Firebase project setup
2. Auth flow (login/signup)
3. Frenchie creation form
4. Feed display (read posts)
5. Post creation
6. Health tracking basics
7. Personality input form
8. Medical history view
9. Reminder scheduling UI
10. Build & deploy to TestFlight/Beta

**Avoid in MVP:** Analytics, followers, likes/comments, advanced notifications, content moderation

---

## 📦 Deployment

**Build & Distribution:**
- Use Expo EAS for simple builds
- TestFlight for iOS
- Google Play Beta for Android
- Gradual rollout (10% → 50% → 100%)

