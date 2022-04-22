import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './app/store/store';
import App from './app/layout/App';
import './app/api/server';
import { fetchTodos } from './features/todos/todosSlice';

const root = ReactDOM.createRoot(document.getElementById('root'));
store.dispatch(fetchTodos());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);