import { useSelector, useDispatch } from 'react-redux';
import { completedCleared, allCompleted, selectTodos } from '../todos/todosSlice';
import { statusFilterChanged } from '../filters/filtersSlice'
import StatusFilter from './StatusFilter';
import RemainingToDos from "./RemainingToDos";

function Footer() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.filters);

  const todosRemaining = useSelector((state) => {
    const uncompletedTodos = selectTodos(state).filter(
      (todo) => !todo.completed
    );

    return uncompletedTodos.length;
  });

  const onMarkCompletedClicked = () => dispatch(allCompleted());
  const onClearCompletedClicked = () => dispatch(completedCleared());
  const onStatusChange = (status) => dispatch(statusFilterChanged(status));

  return (
    <div className="footer">
      <div class="footer-row">
        <RemainingToDos count={todosRemaining} />
      </div>
      <div class="footer-row">     
        <div class="footer-actions">
          <button className="ui button" onClick={onMarkCompletedClicked}>
            Mark All Completed
          </button>
          <button className="ui button" onClick={onClearCompletedClicked}>Clear Completed</button>
        </div>
      </div>
      <div className="footer-row">
        <StatusFilter value={status} onChange={onStatusChange} />
      </div>
    </div>
  );
}

export default Footer;