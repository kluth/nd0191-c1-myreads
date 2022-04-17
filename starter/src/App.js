import "./App.css";
import Shelf from "./components/shelf/Shelf";
import Search from "./components/search/Search";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState } from "react";

function App() {
   const [books, setBooks] = useState([]);

  return (
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<Shelf books={books} setBooks={setBooks} />} />
        <Route path="/search" element={<Search books={books} setBooks={setBooks} />} />
     </Routes>
     </BrowserRouter>
   );
}

export default App;
