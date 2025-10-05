import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Counter from "./routes/Counter";
import ToDoList from "./routes/ToDoList";
import Toggle from "./routes/Toggle";
import Search from "./routes/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Counter />} />
        <Route path='/todolist' element={<ToDoList />} />
        <Route path='/toggle' element={<Toggle />} />
        <Route path='/searchfilter' element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
