import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveNewTodo } from '../todos/todosSlice';

function Header() {
  const [text, setText] = useState('');
  const [status, setStatus] = useState('idle');
  const dispatch = useDispatch();

  const handleChange = (e) => setText(e.target.value);

  const handleKeyDown = async (e) => {
    // If the user pressed the Enter key:
    const trimmedText = text.trim();

    if (e.which === 13 && trimmedText) {
      setStatus('loading');

      await dispatch(saveNewTodo(trimmedText));
      setText('');
      setStatus('idle');
    }
  }

  let isLoading = status === 'loading';
  let placeholder = isLoading ? '' : 'Add ToDo Item';
  let loader = isLoading ? 
    <div class="ui small active inline loader loader-hdr"></div> : null;

  return (
    <header className="header">
      <div className="ui big fluid input">
        <input 
          type="text" 
          placeholder={placeholder} 
          value={text}
          className="todos-input"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        {loader}
      </div>
    </header>
  );
}

export default Header;