import React from 'react';

import { AboutUs, Categories,  Footer, Header, Sale ,Follow  } from './container';
import { Navbarr , Navbar2 } from './components';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div>
    <Navbarr />
    <Navbar2 />
    <Header />
    <Categories/>
    <Sale/>
    <Follow/>
    <Footer/>
    
    
  </div>
);

export default App;
