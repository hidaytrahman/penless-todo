import Footer from "components/shared/Footer";
import Header from "components/shared/Header";
import Todo from "components/todo/Todo";
import "./App.css";
import "./reset.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Todo />
      <Footer />
    </div>
  );
}

export default App;
