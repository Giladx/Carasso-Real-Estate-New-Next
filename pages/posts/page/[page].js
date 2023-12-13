import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import postsPageInitialPaths1acf5Resource from '../../../resources/posts-page-initial-paths-1acf5'
import postsPageInitialProps84dbeResource from '../../../resources/posts-page-initial-props-84dbe'

const Posts11 = (props) => {
  return (
    <>
      <div className="posts11-container">
        <Head>
          <title>Posts1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Posts1 - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <div className="posts11-header-1">
          <header data-thq="thq-navbar" className="posts11-navbar-interactive">
            <div className="posts11-search">
              <img
                id="navsearch"
                alt="image"
                src="/csearch.svg"
                className="posts11-image"
              />
            </div>
            <div className="posts11-logo">
              <Link href="/">
                <a className="posts11-link">
                  <img
                    id="logo"
                    alt="logo"
                    src="/clogo.svg"
                    className="posts11-image1"
                  />
                </a>
              </Link>
            </div>
            <div data-thq="thq-navbar-nav" className="posts11-desktop-menu">
              <nav className="posts11-links">
                <span>About</span>
                <span className="posts11-text01">Features</span>
                <span className="posts11-text02">Pricing</span>
                <span className="posts11-text03">Team</span>
                <span className="posts11-text04">Blog</span>
              </nav>
              <div className="posts11-buttons">
                <button className="posts11-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div data-thq="thq-burger-menu" className="posts11-burger-menu">
              <img
                id="navmenu"
                alt="image"
                src="/cmenu.svg"
                className="posts11-image2"
              />
              <svg viewBox="0 0 1024 1024" className="posts11-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="posts11-mobile-menu">
              <div className="posts11-nav">
                <div className="posts11-top">
                  <div data-thq="thq-close-menu" className="posts11-close-menu">
                    <svg viewBox="0 0 1024 1024" className="posts11-icon02">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                  <img
                    alt="image"
                    src="/clogo-no-fill.svg"
                    className="posts11-logo1"
                  />
                </div>
                <nav className="posts11-links1">
                  <Link href="/posts">
                    <a className="posts11-link1">בלוג</a>
                  </Link>
                  <span className="posts11-text05">Features</span>
                  <span className="posts11-text06">Blog</span>
                  <span className="posts11-text07">Pricing</span>
                  <span className="posts11-text08">Team</span>
                </nav>
                <div className="posts11-buttons1">
                  <button className="posts11-login1 button">Login</button>
                  <button className="button">Register</button>
                </div>
              </div>
              <div className="posts11-icon-group">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="posts11-icon04"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="posts11-icon06"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="posts11-icon08"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
            <div>
              <div className="posts11-container2">
                <Script
                  html={`<style>
header.inverted {
  background-color: #fff;
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
            content.style.filter = 'invert(0)';
        } else {
            content.style.filter = 'invert(0)';
        }
    });
});

window.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
      var content = document.getElementById('navmenu');
      if (window.pageYOffset >= content.offsetTop + 60) {
          content.style.filter = 'invert(0)';
      } else {
          content.style.filter = 'invert(0)';
      }
  });
});

window.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
      var content = document.getElementById('logo');
      if (window.pageYOffset >= content.offsetTop + 60) {
          content.style.filter = 'invert(0)';
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
        <div className="posts11-blog-title">
          <span className="posts11-text09">
            <span className="posts11-text10">
              כל מה שמעניין,
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>במקום אחד</span>
          </span>
        </div>
        <div>
          <div className="posts11-container4">
            <DataProvider
              renderSuccess={(params) => (
                <>
                  <Repeater
                    items={params}
                    renderItem={(PostsEntities) => (
                      <>
                        <div className="posts11-blog-miniture">
                          <div className="posts11-hover-blog">
                            <div className="posts11-frame9">
                              <img
                                alt="image"
                                src={PostsEntities?.Media?.url}
                                className="posts11-image3"
                              />
                            </div>
                            <div className="posts11-frame280">
                              <span className="posts11-date">
                                {PostsEntities?.createdAt}
                              </span>
                              <span className="posts11-post-title">
                                {PostsEntities?.Title}
                              </span>
                              <span className="posts11-post-excerpt">
                                {PostsEntities?.Content}
                              </span>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  />
                </>
              )}
              initialData={props.postsEntities}
              persistDataDuringLoading={true}
              key={props?.pagination?.page}
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .posts11-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .posts11-header-1 {
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
          .posts11-navbar-interactive {
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
          .posts11-search {
            flex: 0 0 auto;
            width: 5%;
            height: 40px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .posts11-image {
            width: 24px;
            cursor: pointer;
            filter: invert(1);
            object-fit: cover;
          }
          .posts11-logo {
            flex: 0 0 auto;
            width: 90%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .posts11-link {
            display: contents;
          }
          .posts11-image1 {
            cursor: pointer;
            filter: invert(1);
            height: auto;
            align-self: center;
            text-decoration: none;
          }
          .posts11-desktop-menu {
            flex: 1;
            display: none;
            justify-content: space-between;
          }
          .posts11-links {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .posts11-text01 {
            margin-left: var(--dl-space-space-twounits);
          }
          .posts11-text02 {
            margin-left: var(--dl-space-space-twounits);
          }
          .posts11-text03 {
            margin-left: var(--dl-space-space-twounits);
          }
          .posts11-text04 {
            margin-left: var(--dl-space-space-twounits);
          }
          .posts11-buttons {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .posts11-login {
            border-width: 0px;
            margin-right: var(--dl-space-space-twounits);
          }
          .posts11-burger-menu {
            width: 5%;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .posts11-image2 {
            fill: var(--dl-color-carasso-plainwhite);
            width: auto;
            cursor: pointer;
            filter: invert(1);
            height: 10px;
            object-fit: cover;
          }
          .posts11-icon {
            fill: #d9d9d9;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: none;
          }
          .posts11-mobile-menu {
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
            background-color: #fff;
          }
          .posts11-nav {
            width: 100%;
            display: flex;
            align-self: flex-end;
            align-items: flex-start;
            flex-direction: column;
          }
          .posts11-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .posts11-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .posts11-icon02 {
            width: 24px;
            height: 24px;
          }
          .posts11-logo1 {
            fill: var(--dl-color-carasso-primaryblack);
            filter: invert(1);
            height: 2rem;
          }
          .posts11-links1 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-end;
            align-items: flex-end;
            flex-direction: column;
          }
          .posts11-link1 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .posts11-text05 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .posts11-text06 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .posts11-text07 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .posts11-text08 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .posts11-buttons1 {
            display: flex;
            align-self: flex-end;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .posts11-login1 {
            margin-right: var(--dl-space-space-twounits);
          }
          .posts11-icon-group {
            align-self: flex-end;
          }
          .posts11-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .posts11-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .posts11-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .posts11-container2 {
            display: contents;
          }
          .posts11-blog-title {
            width: 100%;
            display: flex;
            padding: 0 90px;
            align-self: stretch;
            margin-top: 170px;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .posts11-text09 {
            color: var(--dl-color-carasso-primaryblack);
            width: 937px;
            height: auto;
            font-size: 64px;
            font-style: Light;
            text-align: center;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts11-text10 {
            font-weight: 300;
          }
          .posts11-container4 {
            width: 100%;
            margin: 0 auto;
            display: grid;
            padding: var(--dl-space-space-unit);
            max-width: auto;
            grid-template-columns: repeat(2, 1fr);
          }
          .posts11-blog-miniture {
            gap: 20px;
            width: auto;
            height: auto;
            display: flex;
            z-index: 2;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: row;
            justify-content: flex-end;
          }
          .posts11-hover-blog {
            gap: 24px;
            width: auto;
            height: auto;
            display: flex;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .posts11-frame9 {
            gap: 10px;
            width: auto;
            display: flex;
            padding: 30px;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.07000000029802322);
            align-items: flex-end;
            border-radius: 20px;
          }
          .posts11-image3 {
            width: 100%;
            height: auto;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .posts11-frame280 {
            gap: 20px;
            width: 100%;
            display: flex;
            max-width: auto;
            align-self: flex-end;
            line-break: auto;
            padding-left: 30px;
            padding-right: 30px;
            flex-direction: column;
          }
          .posts11-date {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts11-post-title {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 1rem;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts11-post-excerpt {
            color: var(--dl-color-carasso-darkergray);
            width: 453px;
            height: auto;
            font-size: 18px;
            align-self: flex-end;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          @media (max-width: 1920px) {
            .posts11-desktop-menu {
              display: none;
            }
            .posts11-burger-menu {
              display: flex;
            }
          }
          @media (max-width: 1440px) {
            .posts11-blog-miniture {
              width: 100%;
            }
            .posts11-hover-blog {
              width: 100%;
            }
            .posts11-frame9 {
              width: 100%;
            }
            .posts11-frame280 {
              max-width: auto;
            }
            .posts11-date {
              width: 100%;
            }
            .posts11-post-title {
              width: 100%;
            }
            .posts11-post-excerpt {
              width: 100%;
            }
          }
          @media (max-width: 1200px) {
            .posts11-image3 {
              border-radius: var(--dl-radius-radius-radius20);
            }
          }
          @media (max-width: 991px) {
            .posts11-image3 {
              border-radius: var(--dl-radius-radius-radius20);
            }
            .posts11-post-excerpt {
              color: var(--dl-color-carasso-darkergray);
              font-size: 18px;
              font-family: Ploni ML v2 AAA;
              font-weight: 300;
              line-height: 140%;
              text-decoration: none;
            }
          }
          @media (max-width: 767px) {
            .posts11-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .posts11-burger-menu {
              align-items: center;
              justify-content: center;
            }
            .posts11-link1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .posts11-text05 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .posts11-text06 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .posts11-text07 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .posts11-text08 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .posts11-blog-title {
              margin-top: 120px;
              padding-left: 60px;
              padding-right: 60px;
            }
            .posts11-container4 {
              grid-template-columns: repeat(1, 1fr);
            }
          }
          @media (max-width: 479px) {
            .posts11-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .posts11-mobile-menu {
              padding: 16px;
            }
            .posts11-blog-title {
              padding-left: 0px;
              padding-right: 0px;
            }
            .posts11-frame9 {
              padding-top: 0px;
              padding-left: 0px;
              border-radius: var(--dl-radius-radius-radius20);
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .posts11-frame280 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .posts11-date {
              color: var(--dl-color-carasso-darkergray);
              font-size: 18px;
              font-family: Ploni ML v2 AAA;
              font-weight: 300;
              line-height: 140%;
              text-decoration: none;
            }
            .posts11-post-title {
              color: var(--dl-color-carasso-primaryblack);
              font-size: 24px;
              font-family: Ploni ML v2 AAA;
              font-weight: 500;
              line-height: 120%;
              text-decoration: none;
            }
          }
        `}
      </style>
    </>
  )
}

Posts11.defaultProps = {
  postsEntities: [],
}

Posts11.propTypes = {
  postsEntities: PropTypes.array,
}

export default Posts11

export async function getStaticPaths() {
  try {
    const response = await postsPageInitialPaths1acf5Resource({})
    const totalCount = response?.meta?.pagination?.total
    const pagesCount = Math.ceil(totalCount / 10)
    return {
      paths: Array.from(
        {
          length: pagesCount,
        },
        (_, i) => ({
          params: {
            page: (i + 1).toString(),
          },
        })
      ),
      fallback: 'blocking',
    }
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}

export async function getStaticProps(context) {
  try {
    const response = await postsPageInitialProps84dbeResource({
      ...context?.params,
      start: (context.params.page - 1) * 100,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        postsEntities: response,
        ...response?.meta,
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
