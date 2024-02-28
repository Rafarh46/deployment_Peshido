import React from 'react';



function Header() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <button onClick={() => scrollToSection('Header')}>Home</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('About')}>About Us</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('Features')}>Tokenomics</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('Roadmap')}>Roadmap</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('Contact Us')}>Footer</button>
          </li>
          <div id="Header">Home</div>
          <div id="About">About Us</div>
          <div id="Features">Tokenomics</div>
          <div id="Roadmap">Roadmap</div>
          <div id="Contact Us">Footer</div>
        </ul>
      </nav>
    </header>
  );
  

}

export default Header;

