import Footer from '../../features/footer/Footer';
import Header from '../../features/header/Header';
import ToDoList from '../../features/todos/ToDoList';
import './styles.css';

function App() {
  return (
    <div className="container">
      <div className="todos">
        <Header />
        <ToDoList />
        <Footer />
      </div>
    </div>
  );
}

export default App;