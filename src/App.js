import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from "react";
import Navbar from "./routes/Navbar";

const Counter = lazy(() => import("./routes/Counter"));
const ToDoList = lazy(() => import("./routes/ToDoList"));
const Toggle = lazy(() => import("./routes/Toggle"));
const Search = lazy(() => import("./routes/Search"));
const ScrollToTop = lazy(() => import("./routes/ScrollToTop"));
const ValidationForm = lazy(() => import("./routes/Login"));
const Stopwatch = lazy(() => import("./routes/Stopwatch"));
const QuizApp = lazy(() => import("./routes/QuizApp"));
const Home = lazy(() => import("./routes/Home"));
const ProductFilter = lazy(() => import("./routes/ProductFilter"));
const BookmarkManager = lazy(() => import("./routes/Bookmark"));
const MemeGenerator = lazy(() => import("./routes/MemeGenerator"));
const ImageUpload = lazy(() => import("./routes/ImageUpload"));


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<div style={{ textAlign: "center", marginTop: 40 }}>Loading...</div>}>
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
          <Route path='/bookmark' element={<BookmarkManager />} />
          <Route path='/memegenerator' element={<MemeGenerator />} />
          <Route path='/image-upload' element={<ImageUpload />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;




