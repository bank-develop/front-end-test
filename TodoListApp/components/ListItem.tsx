import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface ListItemProps {
  title: string;
  count: number;
  icon: string;
  iconColor: string;
  onPress: () => void;
}

const ListItem: React.FC<ListItemProps> = ({
  title,
  count,
  icon,
  iconColor,
  onPress
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.6}
    >
      <View style={[styles.iconContainer, { backgroundColor: iconColor }]}>
        <Text style={styles.icon}>{icon}</Text>
      </View>

      <Text style={styles.title}>{title}</Text>

      <View style={styles.rightContent}>
        <Text style={styles.count}>{count}</Text>
        <Text style={styles.arrow}>›</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1C1C1E',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 8,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  icon: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  title: {
    flex: 1,
    fontSize: 17,
    color: '#FFFFFF',
    fontWeight: '400',
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  count: {
    fontSize: 17,
    color: '#8E8E93',
    marginRight: 8,
  },
  arrow: {
    fontSize: 24,
    color: '#8E8E93',
    fontWeight: '300',
  },
});

export default ListItem;
