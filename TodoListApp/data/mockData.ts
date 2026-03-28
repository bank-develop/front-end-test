import { Todo } from '../types';

// Default 3 todo items
export const DEFAULT_TODOS: Todo[] = [
  {
    id: '1',
    text: 'ออกกำลังกาย 30 นาที',
    completed: false,
    createdAt: Date.now(),
  },
  {
    id: '2',
    text: 'ชาบูกับเพื่อน',
    completed: false,
    createdAt: Date.now() + 1,
  },
  {
    id: '3',
    text: 'Deploy รอบถัดไป16.30 น.',
    completed: false,
    createdAt: Date.now() + 2,
  },
];
