import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import TodoItem from '../components/TodoItem';
import AddTodo from '../components/AddTodo';
import { Todo, ListType } from '../types';

interface TodoListScreenProps {
  todos: Todo[];
  listType: ListType;
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
  onBack: () => void;
  onAddTodo: (text: string) => void;
}

const TodoListScreen: React.FC<TodoListScreenProps> = ({
  todos,
  listType,
  onToggleTodo,
  onDeleteTodo,
  onBack,
  onAddTodo,
}) => {
  const filteredTodos = listType === 'completed'
    ? todos.filter(todo => todo.completed)
    : todos;

  const title = listType === 'completed'
    ? 'Completed'
    : listType === 'reminders'
      ? 'Reminders'
      : 'All';

  const showAddTodo = listType === 'reminders';

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />
        <View style={styles.content}>
          <View style={styles.header}>
            <TouchableOpacity onPress={onBack} style={styles.backButton}>
              <Text style={styles.backIcon}>‹</Text>
              <Text style={styles.backText}>back</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{title}</Text>
            <Text style={styles.headerSubtitle}>
              {filteredTodos.filter((t) => !t.completed).length} remaining
            </Text>
          </View>

          {showAddTodo && (
            <View style={styles.addTodoContainer}>
              <AddTodo onAdd={onAddTodo} />
            </View>
          )}

          <FlatList
            data={filteredTodos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TodoItem
                todo={item}
                onToggle={onToggleTodo}
                onDelete={onDeleteTodo}
              />
            )}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>No reminders yet</Text>
                <Text style={styles.emptySubtext}>
                  {listType === 'completed'
                    ? 'Complete some tasks to see them here'
                    : 'Add a new reminder to get started'}
                </Text>
              </View>
            }
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    paddingVertical: 12,
    paddingHorizontal: 4,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  backIcon: {
    fontSize: 32,
    color: '#FFFFFF',
    marginRight: 4,
    fontWeight: '300',
  },
  backText: {
    fontSize: 17,
    color: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#FF9F0A',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 15,
    color: '#8E8E93',
  },
  addTodoContainer: {
    marginBottom: 16,
  },
  listContent: {
    paddingBottom: 20,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#8E8E93',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 15,
    color: '#8E8E93',
    textAlign: 'center',
    paddingHorizontal: 40,
  },
});

export default TodoListScreen;
