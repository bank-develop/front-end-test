# To-Do List - React Native App

A simple and elegant To-Do List mobile application built with React Native and Expo, featuring an iPhone Reminders-inspired UI design.

## Features

- **Default Items**: Displays 3 default to-do items on first launch
- **Add New Items**: Input field with a button to add new reminders
- **Mark as Completed**: Tap the checkbox to mark items as complete with strikethrough styling
- **Delete Items**: Remove items from the list with the delete button
- **Data Persistence**: All changes are automatically saved using AsyncStorage
- **iOS-Inspired Design**: Clean, modern UI mimicking the iPhone Reminders app
- **TypeScript**: Fully typed for better code quality and developer experience

## Tech Stack

- **React Native** - Mobile app framework
- **Expo** - Development platform and tooling
- **TypeScript** - Type-safe JavaScript
- **AsyncStorage** - Local data persistence
- **NativeWind** - Tailwind CSS for React Native (configured but using StyleSheet for iOS-style precision)

## Prerequisites

Before running this project, make sure you have installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (optional, but recommended)
- [Expo Go app](https://expo.dev/client) on your iOS/Android device for testing

## Installation

1. **Clone or download this repository**
   ```bash
   cd TodoListApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## Running the App

### Option 1: Using Expo Go (Recommended for Quick Testing)

1. **Start the development server**
   ```bash
   npm start
   ```

2. **Scan the QR code**
   - On iOS: Open the Camera app and scan the QR code
   - On Android: Open the Expo Go app and scan the QR code

### Option 2: Using iOS Simulator (macOS only)

```bash
npm run ios
```

### Option 3: Using Android Emulator

```bash
npm run android
```

### Option 4: Web Browser

```bash
npm run web
```

## Project Structure

```
TodoListApp/
├── components/
│   ├── AddTodo.tsx       # Input component for adding new todos
│   └── TodoItem.tsx      # Individual todo item component
├── types/
│   └── index.ts          # TypeScript interfaces and types
├── App.tsx               # Main application component
├── package.json          # Project dependencies
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── babel.config.js       # Babel configuration
```

## Usage

1. **View Default Items**: On first launch, you'll see 3 default to-do items
2. **Add New Item**: Type in the input field and press "Add" or hit Enter
3. **Mark Complete**: Tap the circular checkbox to toggle completion status
4. **Delete Item**: Tap the "×" button to remove an item
5. **Data Persistence**: All changes are automatically saved and will persist when you restart the app

## Features Breakdown

### Required Features
- ✅ React Native project setup with TypeScript
- ✅ Header titled "To-Do List"
- ✅ 3 default to-do items displayed on launch
- ✅ Input field to add new items
- ✅ Button to submit new items
- ✅ List updates immediately upon adding items

### Bonus Features Implemented
- ✅ Mark items as completed (checkbox with strikethrough)
- ✅ Delete items from the list
- ✅ Beautiful styling inspired by iPhone Reminders app
- ✅ Persist data using AsyncStorage
- ✅ Shows remaining tasks counter
- ✅ Empty state message when no items exist
- ✅ Smooth animations and iOS-style interactions

## Design Highlights

The app mimics the iPhone Reminders app with:
- Large bold header with task counter
- Clean white cards with subtle shadows
- iOS blue accent color (#007AFF)
- Circular checkboxes that fill when completed
- Smooth transitions and native-feeling interactions
- Light gray background (#F2F2F7)
- San Francisco-style typography

## Code Quality

- **TypeScript**: Full type safety across the application
- **Component Architecture**: Modular, reusable components
- **React Hooks**: Modern React patterns with useState and useEffect
- **Clean Code**: Well-structured, readable, and maintainable
- **Best Practices**: Follows React Native conventions and patterns

## Troubleshooting

### App won't start
- Make sure all dependencies are installed: `npm install`
- Clear the cache: `npx expo start -c`

### Data not persisting
- Check that AsyncStorage is properly installed: `npx expo install @react-native-async-storage/async-storage`

### Styling issues
- Make sure babel.config.js is properly configured
- Restart the development server after configuration changes

## Future Enhancements

Potential features for future versions:
- Edit existing todos
- Due dates and reminders
- Categories/lists
- Priority levels
- Search functionality
- Sort and filter options
- Dark mode support
- Cloud sync

## Development Time

This application was developed following best practices and clean code principles, focusing on:
- User experience and intuitive design
- Code quality and maintainability
- Performance optimization
- Cross-platform compatibility

## License

This project was created as a technical test for a React Native Engineer position.

## Author

Developed as part of a technical assessment demonstrating React Native, TypeScript, and mobile app development skills.
