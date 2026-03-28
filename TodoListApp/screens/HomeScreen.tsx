import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import CategoryCard from '../components/CategoryCard';
import ListItem from '../components/ListItem';
import { Todo, ListType } from '../types';

interface HomeScreenProps {
  todos: Todo[];
  onNavigateToList: (listType: ListType) => void;
  onAddTodo: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ todos, onNavigateToList, onAddTodo }) => {
  const allCount = todos.length;
  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <Text style={styles.headerTitle}>My Reminders</Text>
          </View>

          <View style={styles.grid}>
            <View style={styles.row}>
              <CategoryCard
                title="All"
                count={allCount}
                icon="📥"
                color="#5A5A5E"
                onPress={() => onNavigateToList('all')}
              />
              <View style={styles.spacing} />
              <CategoryCard
                title="Completed"
                count={completedCount}
                icon="✓"
                color="#8E8E93"
                onPress={() => onNavigateToList('completed')}
              />
            </View>
          </View>

          <View style={styles.myListsSection}>
            <Text style={styles.myListsTitle}>My Lists</Text>

            <ListItem
              title="Reminders"
              count={allCount}
              icon="☰"
              iconColor="#FF9F0A"
              onPress={() => onNavigateToList('reminders')}
            />
          </View>
        </ScrollView>

        <TouchableOpacity
          style={styles.fab}
          onPress={onAddTodo}
          activeOpacity={0.8}
        >
          <Text style={styles.fabIcon}>+</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 4,
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#FF9F0A',
    marginBottom: 4,
  },
  grid: {
    marginTop: 8,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 0,
  },
  spacing: {
    width: 12,
  },
  myListsSection: {
    marginTop: 40,
  },
  myListsTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF9F0A',
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FF9F0A',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  fabIcon: {
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: '300',
  },
});

export default HomeScreen;
