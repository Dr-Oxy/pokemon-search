import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/HeaderWrap/Header';
import Search from './Pages/SearchWrap/Search';
import Gallery from './Pages/GalleryWrap/Gallery';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Gallery />} />
          <Route exact path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
