import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './layout/Layout';
import Home from './pages/Home';
import Tienda from './pages/Tienda';
import StoreCategory from './pages/StoreCategory';
import AboutUs from './pages/AboutUs';
import ContactPage from './pages/ContactPage';
import Faqs from './pages/Faqs';
import Politics from './pages/Politics';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/tienda' element={<Tienda />} />
          <Route path='/tienda/:category' element={<StoreCategory />} />
          <Route path='/quienes-somos' element={<AboutUs />} />
          <Route path='/politicas' element={<Politics />} />
          <Route path='/contacto' element={<ContactPage />} />
          <Route path='/faqs' element={<Faqs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
