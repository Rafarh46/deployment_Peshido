import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from 'next/router'
import Image from 'next/image';
function Header({headerClass=null}) {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);
  const router = useRouter()
  const [scrollTop, setScrollTop] = useState(0);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  }
  const changeImage = useCallback((themeMode = 'dark')=> {

    const icon = document.querySelector('#btnSwitch img');
  
  
    if (themeMode === "dark") {
  
        icon.src = 'images/icon/sun.svg';
        var images = document.querySelectorAll('img.dark');
  
        for (var i = 0; i < images.length; i++) {
            var oldSrc = images[i].src;
            oldSrc = oldSrc.replace("-dark.", ".");
            var oldIndex = oldSrc.lastIndexOf(".");
            var baseName = oldSrc.slice(0, oldIndex);
            var extension = oldSrc.slice(oldIndex);
            var newSrc = baseName + "-dark" + extension;
            images[i].src = newSrc;
        }
    } else {
        icon.src = 'images/icon/moon.svg';
        var images = document.querySelectorAll('img.dark');
  
        for (var i = 0; i < images.length; i++) {
            var oldSrc = images[i].src;
            var newSrc = oldSrc.replace("-dark.", ".");
            images[i].src = newSrc;
        }
    }
  
  },[])

const updateThemeColor = useCallback((themeMode = 'light') => {

  const colorSwitcher = document.getElementById('btnSwitch');

  document.documentElement.setAttribute('data-bs-theme', themeMode);
  localStorage.setItem('theme', themeMode)

  if (themeMode === 'dark') {
    colorSwitcher.classList.add('dark-switcher');

  } else {
    colorSwitcher.classList.remove('dark-switcher');
  }

  changeImage(themeMode);

}, [changeImage]);

const toggleTheme = () => {


    const theme = localStorage.getItem('theme');

    if (theme && theme === 'dark') {

        updateThemeColor('light');

    } else {
        updateThemeColor('dark');

    }
 
  };
// =================== light and dark start ================== //

function switchThemeByUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const theme = urlParams.get('theme');

  if (theme) {
    localStorage.setItem("theme", theme);
  }

}

// =================== light and dark end ================== //

useEffect(() => {
  
  switchThemeByUrl();
    const theme = localStorage.getItem('theme');
    if (!theme) {
      updateThemeColor('dark'); // Establecer tema oscuro como predeterminado
    } else {
      updateThemeColor(theme);
    }

  
}, [router.query.theme, updateThemeColor]);

  // ........header Sticky..................
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    router.events.on('routeChangeStart', removeActive);

    return () => {
      window.removeEventListener('scroll', isSticky);
      router.events.off('routeChangeStart', removeActive);
    };
  });
  useEffect(()=>{
    setScrollTop(window.scrollY)
  }, [scrollTop])

  const isSticky = (e) => {
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;
    scrollTop >= 250 ? header.classList.add('header-fixed', 'fadeInUp') : header.classList.remove('header-fixed', 'fadeInUp');
  };

  function closeAllMenus() {
    let elements = document.querySelectorAll(".menu-item-has-children.open");
    elements.forEach((item) => {
      item.classList.remove('open')
      item.querySelector('.submenu').style.display = 'none'
    })
  }

  // ...........main menu...............
  const toggleMenu = () => {
    setMenu(!menu);
    closeAllMenus()

  }

  //............submenu...............
  function removeActive() {
  }

  function toggleActive(event) {
    event.preventDefault()
    const mediaQuery = window.matchMedia('(max-width: 991px)');

    if (mediaQuery.matches) {
      // submenu open
      event.currentTarget.parentElement.classList.toggle('open')
      const submenu = event.currentTarget.nextElementSibling;
      if (!submenu.style.display || submenu.style.display === 'none') {
        submenu.style.display = "block"
      } else {
        submenu.style.display = "none"
      }
    }
  }


  // ..............modal....................
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const substr = (str, n) => {
    return str.length > n ? str.substr(0, n - 1) : str;
  }

  return (
    <>
    {/* <!-- ===============>> light&dark switch start here <<================= --> */}
          
    <div className="lightdark-switch" onClick={toggleTheme}>
      <span
        className="switch-btn"
        id="btnSwitch"
      >
        <Image width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
          src="images/icon/moon.svg"
          alt="light-dark-switchbtn"
          className="swtich-icon"
          
        />
      </span>
    </div>
          
          {/* <!-- ===============>> light&dark switch start here <<================= --> */}
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
                  <button onClick={() => scrollToSection("hero")}>Home</button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("about")}>About Us</button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("features")}>Tokenomics</button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("roadmap")}>Roadmap</button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("footer")}>Contact Us</button>
                </li>
              </ul>
            </div>
            {/* <!-- toggle icons --> */}
            <div className={menu?"header-bar d-lg-none header-bar--style1 active": "header-bar d-lg-none header-bar--style1" } onClick={()=>toggleMenu()}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
        </div>
      </div>
    </header>
    </>
  );
}

export default Header;