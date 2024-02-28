import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";

function Header({ headerClass = null }) {
  const [menu, setMenu] = useState(false);
  const router = useRouter();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className={`header-section ${headerClass ? headerClass : "bg-color-3"}`}>
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo">
              <Link href="/">
                <img className="dark" src="/images/logo/logo.png" alt="logo" />
              </Link>
            </div>
            <div className="menu-area">
              <ul id="menu" className="menu menu--style1">
                <li>
                  <button onClick={() => scrollToSection("home")}>Home</button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("about")}>About Us</button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("tokenomics")}>Tokenomics</button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("roadmap")}>Roadmap</button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("contact")}>Contact Us</button>
                </li>
              </ul>
            </div>
            <div className="header-bar d-lg-none header-bar--style1" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
