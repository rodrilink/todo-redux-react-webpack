let nextTodoId = 0;

export const addTodo = (text, date) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text: text,
    date: date
  };
};

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};

export const copyTodo = (id) => {
  return {
    type: 'COPY_TODO',
    id
  };
};
