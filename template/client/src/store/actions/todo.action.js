import { ADD_TODO } from '../types';

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: todo,
});
