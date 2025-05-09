import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { UseImperativeHandle } from './pages/UseImperativeHandle/UseImperativeHandle';
import { UseSyncExternalStore } from './pages/UseSyncExternalStore/UseSyncExternalStore';
import UseQueryParams from './pages/UseQueryParams/UseQueryParams';

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
        <Route path='/usequeryparams' element={<UseQueryParams />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
