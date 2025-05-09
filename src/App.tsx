import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { UseImperativeHandle } from './pages/UseImperativeHandle/UseImperativeHandle';
import { UseSyncExternalStore } from './pages/UseSyncExternalStore/UseSyncExternalStore';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/useimperativehandle' element={<UseImperativeHandle />} />
        <Route
          path='/usesyncexternalstore'
          element={<UseSyncExternalStore />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
