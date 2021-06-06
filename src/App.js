import Footer from 'components/shared/Footer';
import Header from 'components/shared/Header';
import Todo from 'components/todo/Todo';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Todo></Todo>

      <Footer></Footer>
    </div>
  );
}

export default App;
