import './App.css';
import PageListProduct from './layout/product/PageDetailProduct';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import InfoProduct from './layout/product/InfoProduct';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/productos" element={<PageListProduct/>}/>
          <Route path="/home" element={<h2>Prueba</h2>}/>
          <Route path="/productos/:product_id" element={<InfoProduct/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
