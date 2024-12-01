import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './layout/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='menu' element={<Menu />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
