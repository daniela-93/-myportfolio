import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  const [categories] = useState([
    
        { name: 'Portfolio', description: 'Portraits of people in my life' },
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
        <Contact></Contact>

        <Portfolio currentCategory={currentCategory}></Portfolio>

          <About></About>
        </div>
      </main>
    </div>
  );
}

export default App;