import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import projectsPageInitialPropsTqMxResource from '../../resources/projects-page-initial-props-tq_mx'
import projectsPageInitialPathsTqSdResource from '../../resources/projects-page-initial-paths-tq_sd'

const Projects11 = (props) => {
  return (
    <>
      <div className="projects11-container">
        <Head>
          <title>Projects1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Projects1 - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(ProjectsEntity) => (
            <>
              <div className="projects11-sidebarnavigation">
                <div className="projects11-container1">
                  <div className="projects11-sidebar">
                    <img
                      alt="Vector3842"
                      src={ProjectsEntity?.Extra_singel_media_1?.url}
                      className="projects11-vector"
                    />
                    <div className="projects11-sidebarlinks">
                      <span className="projects11-text">
                        <span>על המרכז</span>
                      </span>
                      <span className="projects11-text02">
                        <span>החנויות</span>
                      </span>
                      <span className="projects11-text04">
                        <span>הסביבה</span>
                      </span>
                      <span className="projects11-text06">
                        <span>יצירת קשר</span>
                      </span>
                    </div>
                  </div>
                  <div className="projects11-projectstatus">
                    <span className="projects11-text08">
                      <span>בבנייה</span>
                    </span>
                    <img
                      alt="Vector3842"
                      src="/external/vector3842-8s6f.svg"
                      className="projects11-vector1"
                    />
                  </div>
                </div>
              </div>
              <div className="projects11-header-1">
                <header
                  data-thq="thq-navbar"
                  className="projects11-navbar-interactive"
                >
                  <div className="projects11-search">
                    <img
                      id="navsearch"
                      alt="image"
                      src="c90025b4-cd9e-4b10-b60e-83848d5a8914"
                      className="projects11-image"
                    />
                  </div>
                  <div className="projects11-logo">
                    <Link href="/">
                      <a className="projects11-link">
                        <img
                          id="logo"
                          alt="logo"
                          src="/clogo.svg"
                          className="projects11-image1"
                        />
                      </a>
                    </Link>
                  </div>
                  <div
                    data-thq="thq-navbar-nav"
                    className="projects11-desktop-menu"
                  >
                    <nav className="projects11-links">
                      <span>About</span>
                      <span className="projects11-text11">Features</span>
                      <span className="projects11-text12">Pricing</span>
                      <span className="projects11-text13">Team</span>
                      <span className="projects11-text14">Blog</span>
                    </nav>
                    <div className="projects11-buttons">
                      <button className="projects11-login button">Login</button>
                      <button className="button">Register</button>
                    </div>
                  </div>
                  <div
                    data-thq="thq-burger-menu"
                    className="projects11-burger-menu"
                  >
                    <img
                      id="navmenu"
                      alt="image"
                      src="212659cd-3875-4ccd-947b-abbd25476938"
                      className="projects11-image2"
                    />
                    <svg viewBox="0 0 1024 1024" className="projects11-icon">
                      <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                  <div
                    data-thq="thq-mobile-menu"
                    className="projects11-mobile-menu"
                  >
                    <div className="projects11-nav">
                      <div className="projects11-top">
                        <div
                          data-thq="thq-close-menu"
                          className="projects11-close-menu"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="projects11-icon02"
                          >
                            <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                          </svg>
                        </div>
                        <img
                          alt="image"
                          src="/clogo-no-fill.svg"
                          className="projects11-logo1"
                        />
                      </div>
                      <nav className="projects11-links1">
                        <span className="projects11-text15">בלוג</span>
                        <span className="projects11-text16">אודות</span>
                        <span className="projects11-text17">צור קשר</span>
                        <span className="projects11-text18">עוד אחד</span>
                        <span className="projects11-text19">עוד אחד</span>
                      </nav>
                      <div className="projects11-buttons1">
                        <button className="projects11-login1 button">
                          כפתור 2
                        </button>
                        <button className="button">כפתור 1</button>
                      </div>
                    </div>
                    <div className="projects11-icon-group">
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="projects11-icon04"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="projects11-icon06"
                      >
                        <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 602.2582857142856 1024"
                        className="projects11-icon08"
                      >
                        <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                      </svg>
                    </div>
                  </div>
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
                </header>
              </div>
              <div className="projects11-hero">
                <img
                  alt="image"
                  src={ProjectsEntity?.Hero_image?.url}
                  className="projects11-image3"
                />
                <div className="projects11-container2">
                  <div className="projects11-breadcrumps">
                    <span className="projects11-text20">
                      <span>פארק VICA</span>
                    </span>
                    <div className="projects11-frame120"></div>
                    <span className="projects11-text22">
                      <span>משרדים והייטק</span>
                    </span>
                    <div className="projects11-frame119"></div>
                    <img
                      alt="House3842"
                      src="/external/house3842-27sk.svg"
                      className="projects11-house"
                    />
                  </div>
                </div>
                <div className="projects11-container3">
                  <animate-on-reveal
                    animation="none"
                    duration="300ms"
                    delay="0s"
                    direction="normal"
                    easing="ease"
                    iteration="1"
                  >
                    <div
                      data-thq-animate-on-reveal="true"
                      className="projects11-logo2"
                    >
                      <div className="projects11-centeredlogo">
                        <img
                          alt="Vector3842"
                          src={ProjectsEntity?.Main_logo?.url}
                          className="projects11-vector2"
                        />
                        <img
                          alt="Line473842"
                          src="/external/line473842-wpt.svg"
                          className="projects11-line47"
                        />
                        <span className="projects11-text24">
                          {ProjectsEntity?.City__c}
                        </span>
                      </div>
                    </div>
                  </animate-on-reveal>
                </div>
              </div>
              <div className="projects11-container4"></div>
            </>
          )}
          initialData={props.projectsEntity}
          persistDataDuringLoading={true}
          key={props?.projectsEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .projects11-container {
            width: 100%;
            height: auto;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .projects11-sidebarnavigation {
            top: 0px;
            right: 0px;
            height: auto;
            margin: auto;
            display: flex;
            position: absolute;
            align-self: stretch;
            flex-shrink: 0;
            flex-direction: column;
          }
          .projects11-container1 {
            gap: 16px;
            right: 0px;
            bottom: -700px;
            height: auto;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            justify-content: center;
          }
          .projects11-sidebar {
            gap: 28px;
            display: flex;
            padding: 30px;
            box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.05000000074505806);
            align-items: center;
            border-color: rgba(255, 255, 255, 0.800000011920929);
            border-style: solid;
            border-width: 1px;
            border-radius: 10px;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(255, 255, 255, 0.699999988079071);
          }
          .projects11-vector {
            width: 80px;
            height: 22px;
          }
          .projects11-sidebarlinks {
            gap: 29px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
          }
          .projects11-text {
            color: var(--dl-color-carasso-primaryblack);
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
          .projects11-text02 {
            color: var(--dl-color-carasso-primaryblack);
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
          .projects11-text04 {
            color: var(--dl-color-carasso-primaryblack);
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
          .projects11-text06 {
            color: var(--dl-color-carasso-primaryblack);
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
          .projects11-projectstatus {
            gap: 10px;
            display: flex;
            padding: 10px 30px;
            align-self: stretch;
            box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.05000000074505806);
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(255, 255, 255, 0.800000011920929);
            border-style: solid;
            border-width: 1px;
            border-radius: 8px;
            justify-content: center;
            background-color: rgba(255, 255, 255, 0.699999988079071);
          }
          .projects11-text08 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .projects11-vector1 {
            width: 13px;
            height: 12px;
          }
          .projects11-header-1 {
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
          .projects11-navbar-interactive {
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
          .projects11-search {
            flex: 0 0 auto;
            width: 5%;
            height: 40px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .projects11-image {
            width: 24px;
            cursor: pointer;
            filter: invert();
            object-fit: cover;
          }
          .projects11-logo {
            flex: 0 0 auto;
            width: 90%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .projects11-link {
            display: contents;
          }
          .projects11-image1 {
            cursor: pointer;
            filter: invert();
            height: auto;
            align-self: center;
            text-decoration: none;
          }
          .projects11-desktop-menu {
            flex: 1;
            display: none;
            justify-content: space-between;
          }
          .projects11-links {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .projects11-text11 {
            margin-left: var(--dl-space-space-twounits);
          }
          .projects11-text12 {
            margin-left: var(--dl-space-space-twounits);
          }
          .projects11-text13 {
            margin-left: var(--dl-space-space-twounits);
          }
          .projects11-text14 {
            margin-left: var(--dl-space-space-twounits);
          }
          .projects11-buttons {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .projects11-login {
            border-width: 0px;
            margin-right: var(--dl-space-space-twounits);
          }
          .projects11-burger-menu {
            width: 5%;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .projects11-image2 {
            fill: var(--dl-color-carasso-plainwhite);
            width: auto;
            cursor: pointer;
            filter: invert();
            height: 10px;
            object-fit: cover;
          }
          .projects11-icon {
            fill: #d9d9d9;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: none;
          }
          .projects11-mobile-menu {
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
            background-image: radial-gradient(
              circle at left,
              rgba(194, 229, 156, 0) 0%,
              rgba(255, 255, 255, 0) 43%,
              rgb(159, 172, 178) 53%,
              rgb(255, 255, 255) 71%
            );
          }
          .projects11-nav {
            width: 100%;
            display: flex;
            align-self: flex-end;
            align-items: flex-start;
            flex-direction: column;
          }
          .projects11-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .projects11-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .projects11-icon02 {
            width: 24px;
            height: 24px;
          }
          .projects11-logo1 {
            fill: var(--dl-color-carasso-primaryblack);
            filter: invert(1);
            height: 2rem;
          }
          .projects11-links1 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-end;
            align-items: flex-end;
            flex-direction: column;
          }
          .projects11-text15 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .projects11-text16 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .projects11-text17 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .projects11-text18 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .projects11-text19 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .projects11-buttons1 {
            display: flex;
            align-self: flex-end;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .projects11-login1 {
            margin-right: var(--dl-space-space-twounits);
          }
          .projects11-icon-group {
            align-self: flex-end;
          }
          .projects11-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .projects11-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .projects11-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .projects11-hero {
            gap: 50px;
            width: 100%;
            height: 100%;
            display: flex;
            padding: 20px 0;
            overflow: hidden;
            position: relative;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: space-between;
          }
          .projects11-image3 {
            top: 0;
            right: 0px;
            width: 100%;
            height: 1050px;
            z-index: -5;
            position: absolute;
            object-fit: contain;
          }
          .projects11-container2 {
            display: flex;
            padding: 0 90px 20px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .projects11-breadcrumps {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .projects11-text20 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .projects11-frame120 {
            width: 10px;
            height: 1px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: var(--dl-color-carasso-plainwhite);
          }
          .projects11-text22 {
            color: var(--dl-color-carasso-plainwhite);
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
          .projects11-frame119 {
            width: 10px;
            height: 1px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: var(--dl-color-carasso-plainwhite);
          }
          .projects11-house {
            width: 24px;
            height: 24px;
          }
          .projects11-container3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .projects11-logo2 {
            gap: 40px;
            height: 800px;
            display: flex;
            padding: 0 90px;
            position: relative;
            flex-grow: 1;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .projects11-centeredlogo {
            gap: 38px;
            display: flex;
            z-index: 1;
            align-items: stretch;
            flex-direction: column;
          }
          .projects11-vector2 {
            width: 325px;
            height: 89px;
          }
          .projects11-line47 {
            width: 88px;
            height: 1px;
          }
          .projects11-text24 {
            color: rgb(255, 255, 255);
            height: auto;
            font-size: 25px;
            font-style: DemiBold;
            text-align: center;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 400;
            line-height: 80%;
            font-stretch: normal;
            text-decoration: none;
          }
          .projects11-container4 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 400px;
            align-items: flex-start;
            flex-direction: column;
          }
          @media (max-width: 1920px) {
            .projects11-desktop-menu {
              display: none;
            }
            .projects11-burger-menu {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .projects11-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .projects11-burger-menu {
              align-items: center;
              justify-content: center;
            }
            .projects11-text15 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .projects11-text16 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .projects11-text17 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .projects11-text18 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .projects11-text19 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .projects11-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .projects11-mobile-menu {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

Projects11.defaultProps = {
  projectsEntity: [],
}

Projects11.propTypes = {
  projectsEntity: PropTypes.array,
}

export default Projects11

export async function getStaticProps(context) {
  try {
    const response = await projectsPageInitialPropsTqMxResource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        projectsEntity: response?.data?.[0],
        ...response?.meta,
      },
      revalidate: 30,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

export async function getStaticPaths() {
  try {
    const response = await projectsPageInitialPathsTqSdResource({})
    return {
      paths: (response?.data || []).map((item) => {
        return {
          params: {
            id: (item?.id).toString(),
          },
        }
      }),
      fallback: 'blocking',
    }
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}
