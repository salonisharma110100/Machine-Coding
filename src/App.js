import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Counter from "./routes/Counter";
import ToDoList from "./routes/ToDoList";
import Toggle from "./routes/Toggle";
import Search from "./routes/Search";
import ScrollToTop from './routes/ScrollToTop';
import ValidationForm from './routes/Login';
import Stopwatch from './routes/Stopwatch';
import QuizApp from './routes/QuizApp';
import Home from './routes/Home';
import ProductFilter from './routes/ProductFilter';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path='/todolist' element={<ToDoList />} />
        <Route path='/toggle' element={<Toggle />} />
        <Route path='/searchfilter' element={<Search />} />
        <Route path='/scrolltotop' element={<ScrollToTop />} />
        <Route path='/login' element={<ValidationForm />} />
        <Route path='/stopwatch' element={<Stopwatch />} />
        <Route path='/quiz' element={<QuizApp />} />
        <Route path='/productfilter' element={<ProductFilter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
