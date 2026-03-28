import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './screens/HomeScreen';
import TodoListScreen from './screens/TodoListScreen';
import { Todo, ListType } from './types';
import { DEFAULT_TODOS } from './data/mockData';

const STORAGE_KEY = '@todos';

type Screen = 'home' | 'list';

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [currentListType, setCurrentListType] = useState<ListType>('all');

  // Load todos from AsyncStorage on mount
  useEffect(() => {
    loadTodos();
  }, []);

  // Save todos to AsyncStorage whenever they change
  useEffect(() => {
    if (!isLoading) {
      saveTodos();
    }
  }, [todos, isLoading]);

  const loadTodos = async () => {
    try {
      const storedTodos = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
      } else {
        // If no stored todos, use default ones
        setTodos(DEFAULT_TODOS);
      }
    } catch (error) {
      console.error('Failed to load todos:', error);
      setTodos(DEFAULT_TODOS);
    } finally {
      setIsLoading(false);
    }
  };

  const saveTodos = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (error) {
      console.error('Failed to save todos:', error);
    }
  };

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: Date.now(),
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const navigateToList = (listType: ListType) => {
    setCurrentListType(listType);
    setCurrentScreen('list');
  };

  const navigateToHome = () => {
    setCurrentScreen('home');
  };

  const handleAddTodoFromHome = () => {
    setCurrentListType('reminders');
    setCurrentScreen('list');
  };

  if (isLoading) {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>Loading...</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }

  // Render current screen
  if (currentScreen === 'home') {
    return (
      <HomeScreen
        todos={todos}
        onNavigateToList={navigateToList}
        onAddTodo={handleAddTodoFromHome}
      />
    );
  }

  return (
    <TodoListScreen
      todos={todos}
      listType={currentListType}
      onAddTodo={addTodo}
      onToggleTodo={toggleTodo}
      onDeleteTodo={deleteTodo}
      onBack={navigateToHome}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 16,
    color: '#8E8E93',
  },
});
