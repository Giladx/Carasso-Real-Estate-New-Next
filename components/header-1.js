import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

const Header1 = (props) => {
  return (
    <>
      <div className="header-1-header-1">
        <header data-thq="thq-navbar" className="header-1-navbar-interactive">
          <div className="header-1-search">
            <img
              id="navsearch"
              alt={props.imageAlt}
              src={props.imageSrc}
              className="header-1-image"
            />
          </div>
          <div className="header-1-logo">
            <Link href="/">
              <a className="header-1-link">
                <img
                  id="logo"
                  alt={props.imageAlt1}
                  src={props.imageSrc1}
                  className="header-1-image1"
                />
              </a>
            </Link>
          </div>
          <div data-thq="thq-navbar-nav" className="header-1-desktop-menu">
            <nav className="header-1-links">
              <span>{props.text}</span>
              <span className="header-1-text1">{props.text1}</span>
              <span className="header-1-text2">{props.text2}</span>
              <span className="header-1-text3">{props.text3}</span>
              <span className="header-1-text4">{props.text4}</span>
            </nav>
            <div className="header-1-buttons">
              <button className="header-1-login button">{props.login}</button>
              <button className="button">{props.register}</button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="header-1-burger-menu">
            <img
              id="navmenu"
              alt={props.imageAlt2}
              src={props.imageSrc2}
              className="header-1-image2"
            />
            <svg viewBox="0 0 1024 1024" className="header-1-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="header-1-mobile-menu">
            <div className="header-1-nav">
              <div className="header-1-top">
                <div data-thq="thq-close-menu" className="header-1-close-menu">
                  <svg viewBox="0 0 1024 1024" className="header-1-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
                <img
                  alt={props.logoAlt}
                  src={props.logoSrc}
                  className="header-1-logo1"
                />
              </div>
              <nav className="header-1-links1">
                <Link href="/news">
                  <a className="header-1-link1">{props.text5}</a>
                </Link>
                <Link href="/about">
                  <a className="header-1-link2">{props.text6}</a>
                </Link>
                <span className="header-1-text5">{props.text7}</span>
                <Link href="/urban-renew">
                  <a className="header-1-link3">{props.text71}</a>
                </Link>
                <Link href="/news">
                  <a className="header-1-link4">{props.text8}</a>
                </Link>
                <span className="header-1-text6">{props.text9}</span>
              </nav>
              <div className="header-1-buttons1">
                <button className="header-1-login1 button">
                  {props.login1}
                </button>
                <button className="button">{props.register1}</button>
              </div>
            </div>
            <div className="header-1-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="header-1-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="header-1-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="header-1-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
          <div>
            <div className="header-1-container1">
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
</script>`}
              ></Script>
            </div>
          </div>
        </header>
      </div>
      <style jsx>
        {`
          .header-1-header-1 {
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
          .header-1-navbar-interactive {
            width: 90%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-threeunits);
            border-radius: 15px;
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .header-1-search {
            flex: 0 0 auto;
            width: 5%;
            height: 40px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .header-1-image {
            width: 24px;
            cursor: pointer;
            object-fit: cover;
          }
          .header-1-logo {
            flex: 0 0 auto;
            width: 90%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .header-1-link {
            display: contents;
          }
          .header-1-image1 {
            cursor: pointer;
            height: auto;
            align-self: center;
            text-decoration: none;
          }
          .header-1-desktop-menu {
            flex: 1;
            display: none;
            justify-content: space-between;
          }
          .header-1-links {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .header-1-text1 {
            margin-left: var(--dl-space-space-twounits);
          }
          .header-1-text2 {
            margin-left: var(--dl-space-space-twounits);
          }
          .header-1-text3 {
            margin-left: var(--dl-space-space-twounits);
          }
          .header-1-text4 {
            margin-left: var(--dl-space-space-twounits);
          }
          .header-1-buttons {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-1-login {
            border-width: 0px;
            margin-right: var(--dl-space-space-twounits);
          }
          .header-1-burger-menu {
            width: 5%;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .header-1-image2 {
            fill: var(--dl-color-carasso-plainwhite);
            width: auto;
            cursor: pointer;
            height: 10px;
            object-fit: cover;
          }
          .header-1-icon {
            fill: #d9d9d9;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: none;
          }
          .header-1-mobile-menu {
            top: 0px;
            right: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            padding: 32px;
            z-index: 999;
            position: absolute;
            transform: translateX(100%);
            transition: 0.5s;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-carasso-plainwhite);
          }
          .header-1-nav {
            width: 100%;
            display: flex;
            align-self: flex-end;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-1-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .header-1-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .header-1-icon02 {
            width: 24px;
            height: 24px;
          }
          .header-1-logo1 {
            fill: var(--dl-color-carasso-primaryblack);
            filter: invert(1);
            height: 2rem;
          }
          .header-1-links1 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-end;
            align-items: flex-end;
            flex-direction: column;
          }
          .header-1-link1 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .header-1-link2 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .header-1-text5 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .header-1-link3 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .header-1-link4 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .header-1-text6 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .header-1-buttons1 {
            display: flex;
            align-self: flex-end;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-1-login1 {
            margin-right: var(--dl-space-space-twounits);
          }
          .header-1-icon-group {
            align-self: flex-end;
          }
          .header-1-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .header-1-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .header-1-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .header-1-container1 {
            display: contents;
          }
          @media (max-width: 1920px) {
            .header-1-desktop-menu {
              display: none;
            }
            .header-1-burger-menu {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .header-1-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .header-1-burger-menu {
              align-items: center;
              justify-content: center;
            }
            .header-1-link1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .header-1-link2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .header-1-text5 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .header-1-link3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .header-1-link4 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .header-1-text6 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .header-1-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .header-1-mobile-menu {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

Header1.defaultProps = {
  imageAlt2: 'image',
  text3: 'Team',
  text9: 'עוד אחד',
  text1: 'Features',
  imageSrc1: '/clogo.svg',
  text8: 'עוד אחד',
  text5: 'בלוג\n',
  text2: 'Pricing',
  login: 'Login',
  text: 'About',
  register1: 'כפתור 1',
  imageSrc: 'c90025b4-cd9e-4b10-b60e-83848d5a8914',
  login1: 'כפתור 2\n',
  text7: 'צור קשר',
  imageAlt1: 'logo',
  logoSrc: '/clogo-no-fill.svg',
  text4: 'Blog',
  imageAlt: 'image',
  text71: 'התחדשות עירונית',
  register: 'Register',
  text6: 'אודות',
  imageSrc2: '212659cd-3875-4ccd-947b-abbd25476938',
  logoAlt: 'image',
}

Header1.propTypes = {
  imageAlt2: PropTypes.string,
  text3: PropTypes.string,
  text9: PropTypes.string,
  text1: PropTypes.string,
  imageSrc1: PropTypes.string,
  text8: PropTypes.string,
  text5: PropTypes.string,
  text2: PropTypes.string,
  login: PropTypes.string,
  text: PropTypes.string,
  register1: PropTypes.string,
  imageSrc: PropTypes.string,
  login1: PropTypes.string,
  text7: PropTypes.string,
  imageAlt1: PropTypes.string,
  logoSrc: PropTypes.string,
  text4: PropTypes.string,
  imageAlt: PropTypes.string,
  text71: PropTypes.string,
  register: PropTypes.string,
  text6: PropTypes.string,
  imageSrc2: PropTypes.string,
  logoAlt: PropTypes.string,
}

export default Header1
