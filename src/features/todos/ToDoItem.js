import { useSelector, useDispatch } from 'react-redux';
import { deleted, toggled, selectTodoById } from '../todos/todosSlice';

function ToDoItem({ id }) {
  const todo = useSelector((state) => selectTodoById(state, id));
  const { text, completed } = todo;
  const dispatch = useDispatch();

  const handleCompletedChanged = () => {
    dispatch(toggled(todo.id));
  }

  const onDelete = () => {
    dispatch(deleted(todo.id));
  }

  return (
    <div className={`todos-item ${completed && 'item-completed'}`}>
      <div className="content todos-content">
      <div 
        className="ui checkbox"
        onClick={handleCompletedChanged}>
        <input class="hidden" readonly="" tabindex="0" type="checkbox" value="" />
        <label>{text}</label>
      </div>  
      <i aria-hidden="true" class="close icon" onClick={onDelete}></i>
      </div>
    </div>
  );
}

export default ToDoItem;