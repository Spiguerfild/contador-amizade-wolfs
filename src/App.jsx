import { useState } from 'react';

import './App.css';
import { NavbarTop } from './components/NavbarTop';
import { Contador } from './components/Contador';

function App() {
  return (
    <div className="h-screen">
      <NavbarTop />
      <Contador />
    </div>
  );
}

export default App;
