import React from "react";


const Nav = (props) => {
  const { setCurrentTab, tabs } = props;
  return (
    
    <header className="flex-row px-1 py-1">
            
      <h1 className="px-2">Daniela Acuna</h1>
      <nav>
        <ul className="flex-row justify-center">
          {tabs.map((tab) => (
            <li className="mx-2" key={tab}>
              <a
                href={"#" + tab.toLowerCase()}
                onClick={() => {
                  setCurrentTab(tab);
                }}
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;