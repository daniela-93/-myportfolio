import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer' 

function App() {
  const [categories] = useState([
    
        { name: 'Portfolio', description: 'Portraits of people in my life' },
         { name: 'Screenshots', description: ''},

      ]);
    

      const [currentCategory, setCurrentCategory] = useState(categories[0]);

      const [contactSelected, setContactSelected] = useState(false);
    
      return (
        <div>
          <Nav
            categories={categories}
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}
            contactSelected={contactSelected}
            setContactSelected={setContactSelected}
          ></Nav>
          <main>
            {!contactSelected ? (
              <>
                <Portfolio currentCategory={currentCategory}></Portfolio>
                <About></About>
              </>
            ) : (
                <ContactForm></ContactForm>
              )}
          </main>
          <Footer></Footer>
        </div>
      );
    }
    
    export default App;
    