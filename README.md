# React Native To-Do List Application

This repository contains a React Native To-Do List application developed as a technical test for a React Native Engineer position.

## Project Overview

The application is a fully functional To-Do List mobile app with an iPhone Reminders-inspired design, built using React Native, Expo, and TypeScript.

## Screenshots

<img src="./screenshots/home-screen.png" width="300" alt="Home Screen" />

### Features Preview
- **Home Screen**: Shows "My Reminders" with category cards (All, Completed) and custom lists
- **Orange Theme**: Consistent orange accent color (#FF9F0A) throughout the app
- **Floating Action Button**: Quick access to add new reminders
- **List Management**: View and organize reminders by categories

## Quick Start

```bash
cd TodoListApp
npm install
npm start
```

Then scan the QR code with Expo Go app on your mobile device.

## Project Location

The complete application is located in the [`TodoListApp`](./TodoListApp) directory.

## Features Implemented

### Core Requirements
- ✅ New React Native project setup
- ✅ Header titled "To-Do List"
- ✅ 3 default to-do items on launch
- ✅ Input field to add new items
- ✅ Button to submit new items
- ✅ List updates immediately

### Bonus Features
- ✅ Mark items as completed (checkbox with strikethrough)
- ✅ Delete items from the list
- ✅ Beautiful styling mimicking iPhone Reminders app
- ✅ Data persistence using AsyncStorage
- ✅ Task counter showing remaining items
- ✅ Empty state handling
- ✅ TypeScript for type safety

## Technical Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **State Management**: React Hooks (useState, useEffect)
- **Data Persistence**: @react-native-async-storage/async-storage
- **Styling**: React Native StyleSheet (iOS-inspired design)
- **Additional Tools**: NativeWind (Tailwind CSS for React Native)

## Documentation

For detailed setup instructions, features, and usage guide, please see the [TodoListApp README](./TodoListApp/README.md).

## Project Structure

```
front-end-test/
├── README.md (this file)
└── TodoListApp/
    ├── components/
    │   ├── AddTodo.tsx
    │   └── TodoItem.tsx
    ├── types/
    │   └── index.ts
    ├── App.tsx
    ├── README.md
    └── package.json
```

## Development Highlights

- **Clean Code**: Well-structured, modular components
- **Type Safety**: Full TypeScript implementation
- **Best Practices**: Follows React Native conventions
- **User Experience**: Intuitive, iOS-style interface
- **Performance**: Optimized with FlatList for efficient rendering
- **Persistence**: Automatic save/load with AsyncStorage

## Time Investment

Completed within the 90-minute time limit, focusing on:
- Core functionality implementation
- Code quality and structure
- User experience and design
- Documentation and setup instructions

## Deliverables

- ✅ Source code in GitHub repository
- ✅ Comprehensive README with setup instructions
- ✅ All required features implemented
- ✅ All bonus features completed
- ✅ TypeScript for improved code quality
- ✅ iPhone Reminders-inspired UI design

## Testing

The application has been:
- Type-checked with TypeScript compiler
- Structured following React Native best practices
- Designed for cross-platform compatibility (iOS, Android, Web)

## Running the Application

1. Navigate to the project directory:
   ```bash
   cd TodoListApp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Choose your preferred testing method:
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Press `w` for web browser
   - Scan QR code with Expo Go app

## Contact

This project demonstrates proficiency in:
- React Native development
- TypeScript
- Mobile UI/UX design
- State management
- Local data persistence
- Code organization and best practices

For questions or feedback about this technical test, please refer to the project's issue tracker or contact information provided separately.
