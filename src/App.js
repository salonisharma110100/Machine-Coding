import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Counter from "./routes/Counter";
import ToDoList from "./routes/ToDoList";
import Toggle from "./routes/Toggle";
import Search from "./routes/Search";
import ScrollToTop from './routes/ScrollToTop';
import ValidationForm from './routes/Login';
import Stopwatch from './routes/Stopwatch';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Counter />} />
        <Route path='/todolist' element={<ToDoList />} />
        <Route path='/toggle' element={<Toggle />} />
        <Route path='/searchfilter' element={<Search />} />
        <Route path='/scrolltotop' element={<ScrollToTop />} />
        <Route path='/login' element={<ValidationForm />} />
        <Route path='/stopwatch' element={<Stopwatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
