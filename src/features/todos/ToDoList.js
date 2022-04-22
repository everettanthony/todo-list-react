import { useSelector } from 'react-redux';
import { selectFilteredTodoIds } from '../../features/todos/todosSlice';
import ToDoItem from "./ToDoItem";

function ToDoList() {
  const todoIds = useSelector(selectFilteredTodoIds);
  const loadingStatus = useSelector((state) => state.todos.status);

  if (loadingStatus === 'loading') {
    return (
      <div className="todos-list">
        <div class="ui active inverted dimmer">
          <div class="ui text loader">Loading</div>
        </div>
      </div>
    );
  }

  const renderedListItems = todoIds.map((todoId) => {
    return <ToDoItem key={todoId} id={todoId} />
  });

  return (
    <div className="ui divided relaxed todos-list">
      {renderedListItems}
    </div>
  );
}

export default ToDoList;