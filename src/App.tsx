import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { UseImperativeHandle } from './pages/UseImperativeHandle/UseImperativeHandle';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/useimperativehandle' element={<UseImperativeHandle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
