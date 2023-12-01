//import dependencies
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//import data
import products from './data/products.js';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import components and pages
import Nav from './components/Nav.js';
import HomePage from './pages/HomePage.js';
import GalleryPage from './pages/GalleryPage.js';
import OrderPage from './pages/OrderPage.js';
import StaffPage from './pages/StaffPage.js';
import DiscLogPage from './pages/DiscLogPage.js';
import CreatePage from './pages/CreatePage.js';
import EditPage from './pages/EditPage.js';
import TopicsPage from './pages/TopicsPage.js';

//import styles 
import './App.css';

function App() {

  const [discStat, setDiscStat] = useState([])

  return (
    <div className="App">
      <BrowserRouter>

      <header>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1> Daniel Arevalo</h1>
      </header>

      <Nav/>

      <main>
        <section>
          <Routes>
            <Route path='/' element={<HomePage />} />
            {/* <Route path='/contact' element={<Contact />} /> */}
            <Route path='/gallery' element={<GalleryPage />} />
            <Route path='/order' element={<OrderPage items={products} />} />
            <Route path='/staff' element={<StaffPage />} />
            <Route path='/log' element={<DiscLogPage setDiscStat={setDiscStat} />} />
            <Route path='/create' element={<CreatePage />} />
            <Route path='/update' element={<EditPage discStattoEdit={discStat} />} />
            <Route path='/topics' element={<TopicsPage />} />
          </Routes>
        </section>
        
      </main>

 <footer>
    <p>
        &copy; 2023 Daniel Arevalo
    </p>
</footer> 

      </BrowserRouter>
    </div>
  );
}

export default App;
