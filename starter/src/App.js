import "./App.css";
import Shelf from "./components/shelf/Shelf";
import Search from "./components/search/Search";
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<Shelf />} />
        <Route path="/search" element={<Search />} />
     </Routes>
     </BrowserRouter>
   );
}

export default App;
