import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../../features/todos/todosSlice';
import filtersReducer from '../../features/filters/filtersSlice';

export default configureStore({
  reducer: {
    // Define top-level state fields. Example: (`todos` handled by `todosReducer`)
    todos: todosReducer,
    filters: filtersReducer
  }
});