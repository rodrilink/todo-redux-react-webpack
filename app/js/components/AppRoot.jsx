import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AddTodo from './AddTodo.jsx';
import TodoList from './TodoList.jsx';
import Estatus from './Estatus.jsx';
import { store, persistor } from '../store';


const TodoApp = () => (
  <div>
    <AddTodo />
    <Estatus />
    <TodoList />
  </div>
);

export default (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <TodoApp />
    </PersistGate>
  </Provider>
)