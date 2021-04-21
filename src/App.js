import React, { useState } from "react";
import "./index.css";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import ContactForm from './components/ContactForm'
import Portfolio from "./components/Portfolio";
import Footer from './components/Footer'
import Resume from "./components/Resume";

function App() {
  const tabs = ["ABOUT", "PROJECTS", "CONTACT", "RESUME", ];
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  const renderTab = () => {
    switch (currentTab) {
      case "ABOUT":
        return <About />;
      case "PROJECTS":
        return <Portfolio/>
      case "CONTACT":
        return <ContactForm/>;
       case "RESUME":
         return <Resume/>
     

      default:
        return <About />;
    }
  };
  return (
    <>
      <Nav tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <main>{
      renderTab()}
      </main>
      <Footer/>
    </>
  );
}
export default App;
