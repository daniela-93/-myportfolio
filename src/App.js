import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Photos from './components/Photos';

function App() {
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },

  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>
          <Photos> </Photos>
          <About></About>
        </div>
      </main>
    </div>
  );
}

export default App;