
function RemainingToDos({ count }) {
  const suffix = count === 1 ? '' : 's';

  return (
    <div className="todo-count">
      {count} item{suffix} left
    </div>
  );
}

export default RemainingToDos;