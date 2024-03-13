import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

const Header21 = (props) => {
  return (
    <>
      <div className={`header-21-header-1 ${props.rootClassName} `}>
        <header data-thq="thq-navbar" className="header-21-navbar-interactive">
          <div className="header-21-search">
            <img
              id="navsearch"
              alt={props.imageAlt}
              src={props.imageSrc}
              className="header-21-image"
            />
          </div>
          <div className="header-21-logo">
            <Link href="/">
              <a className="header-21-link">
                <img
                  id="logo"
                  alt={props.imageAlt1}
                  src={props.imageSrc1}
                  className="header-21-image1"
                />
              </a>
            </Link>
          </div>
          <div data-thq="thq-navbar-nav" className="header-21-desktop-menu">
            <nav className="header-21-links">
              <span>{props.text}</span>
              <span className="header-21-text01">{props.text1}</span>
              <span className="header-21-text02">{props.text2}</span>
              <span className="header-21-text03">{props.text3}</span>
              <span className="header-21-text04">{props.text4}</span>
            </nav>
            <div className="header-21-buttons">
              <button className="header-21-login button">{props.login}</button>
              <button className="button">{props.register}</button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="header-21-burger-menu">
            <img
              id="navmenu"
              alt={props.imageAlt2}
              src={props.imageSrc2}
              className="header-21-image2"
            />
            <svg viewBox="0 0 1024 1024" className="header-21-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="header-21-mobile-menu">
            <div className="header-21-megamenudefault">
              <div className="header-21-container">
                <div className="header-21-leftcoloumn"></div>
                <div className="header-21-rightcoloumn">
                  <img
                    alt="VectorI6012"
                    src="/external/VectorI6012-vqsd1.svg"
                    className="header-21-vector"
                  />
                  <div className="header-21-navigationbarmenuopen">
                    <img
                      alt="SearchI6012"
                      src="/external/searchi6012-bgsk.svg"
                      className="header-21-search1"
                    />
                    <img
                      alt="logoI6012"
                      src="/external/logoi6012-r0di.svg"
                      className="header-21-logo1"
                    />
                    <img
                      alt="hamburgerI6012"
                      src="/external/hamburgerI6012-lv271.svg"
                      className="header-21-hamburger"
                    />
                  </div>
                  <div className="header-21-navcontent">
                    <div className="header-21-navlinks">
                      <div className="header-21-frame139">
                        <img
                          alt="Arrow11I6012"
                          src="/external/arrow11i6012-70po.svg"
                          className="header-21-arrow11"
                        />
                        <span className="header-21-text05">
                          <span>דף הבית</span>
                        </span>
                      </div>
                      <div className="header-21-frame138">
                        <span className="header-21-text07">
                          <span>הסיפור שלנו</span>
                        </span>
                      </div>
                      <div className="header-21-frame137">
                        <img
                          alt="VectorI6012"
                          src="/external/VectorI6012-wp6f1.svg"
                          className="header-21-vector1"
                        />
                        <span className="header-21-text09">
                          <span>פרויקטים</span>
                        </span>
                      </div>
                      <div className="header-21-frame140">
                        <span className="header-21-text11">
                          <span>התחדשות עירונית</span>
                        </span>
                      </div>
                      <div className="header-21-frame141">
                        <span className="header-21-text13">
                          <span>חדשות ועידכונים</span>
                        </span>
                      </div>
                      <div className="header-21-frame142">
                        <span className="header-21-text15">
                          <span>יצירת קשר</span>
                        </span>
                      </div>
                    </div>
                    <div className="header-21-bottomdetails">
                      <div className="header-21-personalareacontainer">
                        <div className="header-21-personalarea">
                          <span className="header-21-text17">
                            <span>אזור אישי</span>
                          </span>
                          <img
                            alt="UserCircleI6012"
                            src="/external/UserCircleI6012-pj7h1.svg"
                            className="header-21-user-circle"
                          />
                        </div>
                      </div>
                      <div className="header-21-contactdetails">
                        <div className="header-21-frame123">
                          <img
                            alt="InstagramLogoI6012"
                            src="/external/InstagramLogoI6012-6781.svg"
                            className="header-21-instagram-logo"
                          />
                          <img
                            alt="LinkedinLogoI6012"
                            src="/external/LinkedinLogoI6012-f7lb1.svg"
                            className="header-21-linkedin-logo"
                          />
                          <img
                            alt="FacebookLogoI6012"
                            src="/external/facebooklogoi6012-668.svg"
                            className="header-21-facebook-logo"
                          />
                        </div>
                        <div className="header-21-frame133">
                          <span className="header-21-text19">
                            <span>+972 050 123 1234</span>
                          </span>
                          <span className="header-21-text21">
                            <span>ריב״ל 24, תל אביב-יפו</span>
                          </span>
                          <span className="header-21-text23">
                            <span>info@carasso-nadlan.com</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="header-21-container2">
              <Script
                html={`<style>
header.inverted {
  background-color: rgba(255,255,255,0.8);
  box-shadow: 0 3px 5px 0.3px rgba(0, 0, 0, 0.1);
}
header.inverted a {
  color: #0e436b;
}
</style>
<!--
<script>
var className = "inverted";
var scrollTrigger = 60;

window.onscroll = function() {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(className);
  } else {
    document.getElementsByTagName("header")[0].classList.remove(className);
  }
};

// Nav Elements
window.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var content = document.getElementById('navsearch');
        if (window.pageYOffset >= content.offsetTop + 60) {
            content.style.filter = 'invert(1)';
        } else {
            content.style.filter = 'invert(0)';
        }
    });
});

window.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
      var content = document.getElementById('navmenu');
      if (window.pageYOffset >= content.offsetTop + 60) {
          content.style.filter = 'invert(1)';
      } else {
          content.style.filter = 'invert(0)';
      }
  });
});

window.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
      var content = document.getElementById('logo');
      if (window.pageYOffset >= content.offsetTop + 60) {
          content.style.filter = 'invert(1)';
      } else {
          content.style.filter = 'invert(0)';
      }
  });
});
</script>
-->`}
              ></Script>
            </div>
          </div>
        </header>
      </div>
      <style jsx>
        {`
          .header-21-header-1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            z-index: 999;
            position: fixed;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .header-21-navbar-interactive {
            width: 90%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-threeunits);
            border-radius: 15px;
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
            background-color: var(--dl-color-carasso-plainwhite);
          }
          .header-21-search {
            flex: 0 0 auto;
            width: 5%;
            height: 40px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .header-21-image {
            width: 24px;
            cursor: pointer;
            filter: invert();
            object-fit: cover;
          }
          .header-21-logo {
            flex: 0 0 auto;
            width: 90%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .header-21-link {
            display: contents;
          }
          .header-21-image1 {
            cursor: pointer;
            filter: invert();
            height: auto;
            align-self: center;
            text-decoration: none;
          }
          .header-21-desktop-menu {
            flex: 1;
            display: none;
            justify-content: space-between;
          }
          .header-21-links {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .header-21-text01 {
            margin-left: var(--dl-space-space-twounits);
          }
          .header-21-text02 {
            margin-left: var(--dl-space-space-twounits);
          }
          .header-21-text03 {
            margin-left: var(--dl-space-space-twounits);
          }
          .header-21-text04 {
            margin-left: var(--dl-space-space-twounits);
          }
          .header-21-buttons {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-21-login {
            border-width: 0px;
            margin-right: var(--dl-space-space-twounits);
          }
          .header-21-burger-menu {
            width: 5%;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .header-21-image2 {
            fill: var(--dl-color-carasso-plainwhite);
            width: auto;
            cursor: pointer;
            filter: invert();
            height: 10px;
            object-fit: cover;
          }
          .header-21-icon {
            fill: #d9d9d9;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: none;
          }
          .header-21-mobile-menu {
            top: 0px;
            right: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            padding: 32px;
            z-index: 999;
            position: absolute;
            transform: translateX(100%);
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            transition: 0.5s;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-carasso-plainwhite);
          }
          .header-21-megamenudefault {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: var(--dl-color-carasso-plainwhite);
          }
          .header-21-container {
            display: flex;
            padding: 0 90px 0 0;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            justify-content: flex-end;
          }
          .header-21-leftcoloumn {
            gap: 10px;
            display: flex;
            padding: 10px;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
          }
          .header-21-rightcoloumn {
            gap: 60px;
            height: 750px;
            display: flex;
            padding: 20px 0 40px 50px;
            position: relative;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .header-21-vector {
            top: 363px;
            left: 180px;
            width: 529px;
            height: 595px;
            position: absolute;
          }
          .header-21-navigationbarmenuopen {
            gap: 120px;
            display: flex;
            padding: 20px 0;
            z-index: 1;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(187, 188, 191, 1);
            border-style: solid;
            border-width: 0 0 1px;
          }
          .header-21-search1 {
            width: 36px;
            height: 36px;
          }
          .header-21-logo1 {
            width: 80px;
            height: 40px;
          }
          .header-21-hamburger {
            width: 36px;
            height: 36px;
          }
          .header-21-navcontent {
            gap: 80px;
            display: flex;
            z-index: 2;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
            justify-content: space-between;
          }
          .header-21-navlinks {
            gap: 32px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .header-21-frame139 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .header-21-arrow11 {
            width: 20px;
            height: 1px;
          }
          .header-21-text05 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 32px;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-21-frame138 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .header-21-text07 {
            color: var(--dl-color-carasso-graytextcolor);
            height: auto;
            font-size: 32px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-21-frame137 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .header-21-vector1 {
            width: 10px;
            height: 5px;
          }
          .header-21-text09 {
            color: var(--dl-color-carasso-graytextcolor);
            height: auto;
            font-size: 32px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-21-frame140 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .header-21-text11 {
            color: var(--dl-color-carasso-graytextcolor);
            height: auto;
            font-size: 32px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-21-frame141 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .header-21-text13 {
            color: var(--dl-color-carasso-graytextcolor);
            height: auto;
            font-size: 32px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-21-frame142 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .header-21-text15 {
            color: var(--dl-color-carasso-graytextcolor);
            height: auto;
            font-size: 32px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-21-bottomdetails {
            gap: 25px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .header-21-personalareacontainer {
            gap: 16px;
            display: flex;
            padding: 0 0 16px;
            align-self: stretch;
            align-items: flex-end;
            border-color: rgba(187, 188, 191, 1);
            border-style: solid;
            border-width: 0 0 0.699999988079071px;
            flex-direction: column;
          }
          .header-21-personalarea {
            gap: 6px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .header-21-text17 {
            color: var(--dl-color-carasso-graytextcolor);
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-21-user-circle {
            width: 18px;
            height: 18px;
          }
          .header-21-contactdetails {
            gap: 176px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .header-21-frame123 {
            gap: 8px;
            height: 76px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .header-21-instagram-logo {
            width: 20px;
            height: 20px;
          }
          .header-21-linkedin-logo {
            width: 20px;
            height: 20px;
          }
          .header-21-facebook-logo {
            width: 20px;
            height: 20px;
          }
          .header-21-frame133 {
            gap: 18px;
            height: 76px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .header-21-text19 {
            color: var(--dl-color-carasso-graytextcolor);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-21-text21 {
            color: var(--dl-color-carasso-graytextcolor);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-21-text23 {
            color: var(--dl-color-carasso-graytextcolor);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-21-container2 {
            display: contents;
          }
          @media (max-width: 1920px) {
            .header-21-desktop-menu {
              display: none;
            }
            .header-21-burger-menu {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .header-21-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .header-21-burger-menu {
              align-items: center;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .header-21-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .header-21-mobile-menu {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

Header21.defaultProps = {
  text7: 'צור קשר',
  text1: 'Features',
  text6: 'אודות',
  imageAlt: 'image',
  imageSrc: 'c90025b4-cd9e-4b10-b60e-83848d5a8914',
  text5: 'בלוג\n',
  text: 'About',
  imageAlt1: 'logo',
  text4: 'Blog',
  login1: 'כפתור 2\n',
  register1: 'כפתור 1',
  text2: 'Pricing',
  text8: 'עוד אחד',
  imageAlt2: 'image',
  logoSrc: '1c1eacf4-c56b-4d26-9fed-589c10fcdb40',
  login: 'Login',
  rootClassName: '',
  imageSrc1: '/clogo.svg',
  text9: 'עוד אחד',
  register: 'Register',
  text3: 'Team',
  imageSrc2: '212659cd-3875-4ccd-947b-abbd25476938',
  logoAlt: 'image',
}

Header21.propTypes = {
  text7: PropTypes.string,
  text1: PropTypes.string,
  text6: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  text5: PropTypes.string,
  text: PropTypes.string,
  imageAlt1: PropTypes.string,
  text4: PropTypes.string,
  login1: PropTypes.string,
  register1: PropTypes.string,
  text2: PropTypes.string,
  text8: PropTypes.string,
  imageAlt2: PropTypes.string,
  logoSrc: PropTypes.string,
  login: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc1: PropTypes.string,
  text9: PropTypes.string,
  register: PropTypes.string,
  text3: PropTypes.string,
  imageSrc2: PropTypes.string,
  logoAlt: PropTypes.string,
}

export default Header21
