
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import SideBar from './layout/MainLayout';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Products from './pages/Products';
import Analysis from './pages/Analysis';
import Settings from './pages/Settings';
import ContextApi from './context/ContextApi';

function App() {
  return (
    <>
      <BrowserRouter>
        <ContextApi>
          <Navbar />
          <Routes>

            <Route path='/' exact element={<SideBar content={<Home />} />} />
            <Route path='/products' exact element={<SideBar content={<Products />} />} />
            <Route path='/analysis' exact element={<SideBar content={<Analysis />} />} />
            <Route path='/settings' exact element={<SideBar content={<Settings />} />} />

          </Routes>
        </ContextApi>


      </BrowserRouter>
    </>

  );
}

export default App;
