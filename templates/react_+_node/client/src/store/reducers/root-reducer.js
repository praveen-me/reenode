import { ADD_TODO } from '../types';

const initState = {
  todos: ['Learn React', 'Learn JavaScript ', 'Learn Redux'],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { payload } = action;
      return {
        todos: [...state.todos, payload],
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
