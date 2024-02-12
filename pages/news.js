import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import FeaturedPost from '../components/featured-post'
import BlogMiniature from '../components/blog-miniature'

const News = (props) => {
  return (
    <>
      <div className="news-container">
        <Head>
          <title>News - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="News - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <div className="news-header-1">
          <header data-thq="thq-navbar" className="news-navbar-interactive">
            <div className="news-search">
              <img
                id="navsearch"
                alt="image"
                src="/csearch.svg"
                className="news-image"
              />
            </div>
            <div className="news-logo">
              <Link href="/">
                <a className="news-link">
                  <img
                    id="logo"
                    alt="logo"
                    src="/clogo.svg"
                    className="news-image1"
                  />
                </a>
              </Link>
            </div>
            <div data-thq="thq-navbar-nav" className="news-desktop-menu">
              <nav className="news-links">
                <span>About</span>
                <span className="news-text01">Features</span>
                <span className="news-text02">Pricing</span>
                <span className="news-text03">Team</span>
                <span className="news-text04">Blog</span>
              </nav>
              <div className="news-buttons">
                <button className="news-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div data-thq="thq-burger-menu" className="news-burger-menu">
              <img
                id="navmenu"
                alt="image"
                src="/cmenu.svg"
                className="news-image2"
              />
              <svg viewBox="0 0 1024 1024" className="news-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="news-mobile-menu">
              <div className="news-nav">
                <div className="news-top">
                  <div data-thq="thq-close-menu" className="news-close-menu">
                    <svg viewBox="0 0 1024 1024" className="news-icon02">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                  <img
                    alt="image"
                    src="/clogo-no-fill.svg"
                    className="news-logo1"
                  />
                </div>
                <nav className="news-links1">
                  <span className="news-text05">About</span>
                  <span className="news-text06">Features</span>
                  <span className="news-text07">Blog</span>
                  <span className="news-text08">Pricing</span>
                  <span className="news-text09">Team</span>
                </nav>
                <div className="news-buttons1">
                  <button className="news-login1 button">Login</button>
                  <button className="button">Register</button>
                </div>
              </div>
              <div className="news-icon-group">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="news-icon04"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="news-icon06"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="news-icon08"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
            <div>
              <div className="news-container2">
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
        <div className="news-bloglobby">
          <div className="news-blog-title">
            <span className="news-text10">
              <span className="news-text11">
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
          <FeaturedPost></FeaturedPost>
          <div className="news-posts-listing">
            <div className="news-blogcontainer">
              <div className="news-frame297">
                <div className="news-hover-blog">
                  <div className="news-frame281">
                    <div className="news-frame9">
                      <img
                        alt="image"
                        sizes="(min-width: 768px) 800px, 480px"
                        src="/blog/c416e0d7a51cd55e8fe5e745cd82e4b5-600w.webp"
                        srcSet="blog//c416e0d7a51cd55e8fe5e745cd82e4b5-600w.webp 800w, blog/c416e0d7a51cd55e8fe5e745cd82e4b5-mobile.webp 480w"
                        className="news-image3"
                      />
                    </div>
                    <div className="news-frame280">
                      <span className="news-text13">
                        <span>18 בינואר, 2023</span>
                      </span>
                      <span className="news-text15">
                        <span>עיצוב אדמתי לחלל הבית</span>
                      </span>
                      <span className="news-text17">
                        <span>
                          בשנים האחרונות משקיעה החברה את מיטב המשאבים בפיתוח,
                          תכנון והקמה של מגוון פרויקטים מתקדמים המשקפים בשנים.
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="news-hover-blog1">
                  <div className="news-frame91">
                    <img
                      alt="image"
                      sizes="(min-width: 768px) 800px, 480px"
                      src="/blog/c416e0d7a51cd55e8fe5e745cd82e4b5-600w.webp"
                      srcSet="blog//c416e0d7a51cd55e8fe5e745cd82e4b5-600w.webp 800w, blog/c416e0d7a51cd55e8fe5e745cd82e4b5-mobile.webp 480w"
                      className="news-image4"
                    />
                  </div>
                  <div className="news-frame2801">
                    <span className="news-text19">
                      <span>18 בינואר, 2023</span>
                    </span>
                    <span className="news-text21">
                      <span>איך נראת דירה לאנשים שאוהבים לארח</span>
                    </span>
                    <span className="news-text23">
                      <span>
                        בשנים האחרונות משקיעה החברה את מיטב המשאבים בפיתוח,
                        תכנון והקמה של מגוון פרויקטים מתקדמים המשקפים בשנים.
                      </span>
                    </span>
                  </div>
                </div>
                <BlogMiniature rootClassName="blog-miniature-root-class-name"></BlogMiniature>
                <BlogMiniature rootClassName="blog-miniature-root-class-name1"></BlogMiniature>
              </div>
              <div className="news-frame298">
                <div className="news-hover-blog2">
                  <div className="news-hover-blog3">
                    <div className="news-frame2811">
                      <img
                        alt="image"
                        src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                        className="news-image5"
                      />
                    </div>
                    <div className="news-frame2802">
                      <span className="news-text25">
                        <span>4 ביולי, 2023</span>
                      </span>
                      <span className="news-text27">
                        <span>
                          הפרויקט השני תחת המותג &quot;קרסו סאן&quot; יוצא לדרך:
                          נהרס הבניין ברחוב חדרה 10 בתל אביב
                        </span>
                      </span>
                      <span className="news-text29">
                        <span>
                          בשנים האחרונות משקיעה החברה את מיטב המשאבים בפיתוח,
                          תכנון והקמה של מגוון פרויקטים מתקדמים המשקפים בשנים.
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="news-hover-blog4">
                  <div className="news-frame282">
                    <div className="news-frame92">
                      <img
                        alt="image"
                        src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                        className="news-image6"
                      />
                    </div>
                    <div className="news-frame2803">
                      <span className="news-text31">
                        <span>18 בינואר, 2023</span>
                      </span>
                      <span className="news-text33">
                        <span>אורח חיים בחיבור לטבע</span>
                      </span>
                      <span className="news-text35">
                        <span>
                          בשנים האחרונות משקיעה החברה את מיטב המשאבים בפיתוח,
                          תכנון והקמה של מגוון פרויקטים מתקדמים המשקפים בשנים.
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <BlogMiniature rootClassName="blog-miniature-root-class-name2"></BlogMiniature>
                <BlogMiniature rootClassName="blog-miniature-root-class-name4"></BlogMiniature>
              </div>
              <div className="news-frame299">
                <div className="news-hover-blog5">
                  <div className="news-frame283">
                    <div className="news-frame2812">
                      <img
                        alt="image"
                        src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                        className="news-image7"
                      />
                    </div>
                    <div className="news-frame2804">
                      <span className="news-text37">
                        <span>18 בינואר, 2023</span>
                      </span>
                      <span className="news-text39">
                        <span>איך נראת דירה לאנשים שאוהבים לארח</span>
                      </span>
                      <span className="news-text41">
                        <span>
                          בשנים האחרונות משקיעה החברה את מיטב המשאבים בפיתוח,
                          תכנון והקמה של מגוון פרויקטים מתקדמים המשקפים בשנים.
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="news-hover-blog6">
                  <div className="news-frame284">
                    <div className="news-frame93">
                      <img
                        alt="image"
                        src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                        className="news-image8"
                      />
                    </div>
                    <div className="news-frame2805">
                      <span className="news-text43">
                        <span>18 בינואר, 2023</span>
                      </span>
                      <span className="news-text45">
                        <span>אורח חיים בחיבור לטבע</span>
                      </span>
                      <span className="news-text47">
                        <span>
                          בשנים האחרונות משקיעה החברה את מיטב המשאבים בפיתוח,
                          תכנון והקמה של מגוון פרויקטים מתקדמים המשקפים בשנים.
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <BlogMiniature rootClassName="blog-miniature-root-class-name3"></BlogMiniature>
                <BlogMiniature rootClassName="blog-miniature-root-class-name5"></BlogMiniature>
              </div>
            </div>
            <div className="news-sidebar">
              <div className="news-frame294">
                <span className="news-text49">
                  <span>
                    <span>לחיפוש או</span>
                    <br></br>
                    <span>סינון לפי קטגוריות</span>
                  </span>
                </span>
                <div className="news-searchbar">
                  <div className="news-textandsearch">
                    <span className="news-text54">
                      <span>חיפוש</span>
                    </span>
                    <img
                      alt="Search4859"
                      src="/external/search4859-9t56.svg"
                      className="news-search1"
                    />
                  </div>
                </div>
              </div>
              <div className="news-frame293">
                <div className="news-frame287">
                  <span className="news-text56">
                    <span>הכל</span>
                  </span>
                </div>
                <div className="news-frame288">
                  <span className="news-text58">
                    <span>קטגוריה 1</span>
                  </span>
                </div>
                <div className="news-frame289">
                  <span className="news-text60">
                    <span>קטגוריה 2</span>
                  </span>
                </div>
                <div className="news-frame290">
                  <span className="news-text62">
                    <span>קטגוריה 3</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="news-container3">
            <div className="news-contactclose">
              <span className="news-text64">
                <span>לעוד כתבות</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .news-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .news-header-1 {
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
          .news-navbar-interactive {
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
          .news-search {
            flex: 0 0 auto;
            width: 5%;
            height: 40px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .news-image {
            width: 24px;
            cursor: pointer;
            object-fit: cover;
          }
          .news-logo {
            flex: 0 0 auto;
            width: 90%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .news-link {
            display: contents;
          }
          .news-image1 {
            cursor: pointer;
            height: auto;
            align-self: center;
            text-decoration: none;
          }
          .news-desktop-menu {
            flex: 1;
            display: none;
            justify-content: space-between;
          }
          .news-links {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .news-text01 {
            margin-left: var(--dl-space-space-twounits);
          }
          .news-text02 {
            margin-left: var(--dl-space-space-twounits);
          }
          .news-text03 {
            margin-left: var(--dl-space-space-twounits);
          }
          .news-text04 {
            margin-left: var(--dl-space-space-twounits);
          }
          .news-buttons {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .news-login {
            border-width: 0px;
            margin-right: var(--dl-space-space-twounits);
          }
          .news-burger-menu {
            width: 5%;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .news-image2 {
            fill: var(--dl-color-carasso-plainwhite);
            width: auto;
            cursor: pointer;
            height: 10px;
            object-fit: cover;
          }
          .news-icon {
            fill: #d9d9d9;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: none;
          }
          .news-mobile-menu {
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
          .news-nav {
            width: 100%;
            display: flex;
            align-self: flex-end;
            align-items: flex-start;
            flex-direction: column;
          }
          .news-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .news-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .news-icon02 {
            width: 24px;
            height: 24px;
          }
          .news-logo1 {
            fill: var(--dl-color-carasso-primaryblack);
            filter: invert(1);
            height: 2rem;
          }
          .news-links1 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-end;
            align-items: flex-end;
            flex-direction: column;
          }
          .news-text05 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .news-text06 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .news-text07 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .news-text08 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .news-text09 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .news-buttons1 {
            display: flex;
            align-self: flex-end;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .news-login1 {
            margin-right: var(--dl-space-space-twounits);
          }
          .news-icon-group {
            align-self: flex-end;
          }
          .news-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .news-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .news-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .news-container2 {
            display: contents;
          }
          .news-bloglobby {
            gap: 80px;
            width: 100%;
            height: auto;
            display: flex;
            padding: 170px 0 70px;
            overflow: hidden;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(217, 217, 217, 0);
          }
          .news-blog-title {
            width: 100%;
            display: flex;
            padding: 0 90px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .news-text10 {
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
          .news-text11 {
            font-weight: 300;
          }
          .news-posts-listing {
            gap: 20px;
            width: 100%;
            display: flex;
            padding: 0 90px;
            z-index: 2;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .news-blogcontainer {
            gap: 48px;
            width: 80%;
            display: grid;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .news-frame297 {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .news-hover-blog {
            gap: 24px;
            width: 516px;
            display: none;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .news-frame281 {
            gap: 24px;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .news-frame9 {
            gap: 10px;
            display: flex;
            padding: 10px;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.07000000029802322);
            align-items: flex-start;
            border-radius: 20px;
            justify-content: flex-end;
          }
          .news-image3 {
            width: 100%;
            object-fit: cover;
          }
          .news-frame280 {
            gap: 20px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .news-text13 {
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
          .news-text15 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 120.00000476837158%;
            font-stretch: normal;
            text-decoration: none;
          }
          .news-text17 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .news-hover-blog1 {
            gap: 24px;
            width: 516px;
            display: none;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .news-frame91 {
            gap: 10px;
            display: flex;
            padding: 30px;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.07000000029802322);
            align-items: flex-end;
            border-radius: 20px;
          }
          .news-image4 {
            width: 100%;
            object-fit: cover;
          }
          .news-frame2801 {
            gap: 20px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .news-text19 {
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
          .news-text21 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 120.00000476837158%;
            font-stretch: normal;
            text-decoration: none;
          }
          .news-text23 {
            color: var(--dl-color-carasso-darkergray);
            width: 453px;
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
          .news-frame298 {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .news-hover-blog2 {
            gap: 10px;
            display: none;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .news-hover-blog3 {
            gap: 24px;
            height: 507px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .news-frame2811 {
            gap: 10px;
            display: flex;
            padding: 30px;
            overflow: hidden;
            align-self: stretch;
            box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.07000000029802322);
            align-items: flex-end;
            flex-shrink: 0;
            border-radius: 20px;
          }
          .news-image5 {
            width: 100%;
            object-fit: cover;
          }
          .news-frame2802 {
            gap: 20px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .news-text25 {
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
          .news-text27 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 120.00000476837158%;
            font-stretch: normal;
            text-decoration: none;
          }
          .news-text29 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .news-hover-blog4 {
            gap: 24px;
            display: none;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .news-frame282 {
            gap: 24px;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .news-frame92 {
            gap: 10px;
            display: flex;
            padding: 10px;
            overflow: hidden;
            align-self: stretch;
            box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.07000000029802322);
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 20px;
            justify-content: flex-end;
          }
          .news-image6 {
            width: 100%;
            object-fit: cover;
          }
          .news-frame2803 {
            gap: 20px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .news-text31 {
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
          .news-text33 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 129.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .news-text35 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .news-frame299 {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .news-hover-blog5 {
            gap: 24px;
            width: 516px;
            display: none;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .news-frame283 {
            gap: 24px;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .news-frame2812 {
            gap: 10px;
            display: flex;
            padding: 10px;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.07000000029802322);
            align-items: flex-start;
            border-radius: 20px;
            justify-content: flex-end;
          }
          .news-image7 {
            width: 100%;
            object-fit: cover;
          }
          .news-frame2804 {
            gap: 20px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .news-text37 {
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
          .news-text39 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 120.00000476837158%;
            font-stretch: normal;
            text-decoration: none;
          }
          .news-text41 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .news-hover-blog6 {
            gap: 24px;
            width: 516px;
            display: none;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .news-frame284 {
            gap: 24px;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .news-frame93 {
            gap: 10px;
            display: flex;
            padding: 10px;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.07000000029802322);
            align-items: flex-start;
            border-radius: 20px;
            justify-content: flex-end;
          }
          .news-image8 {
            width: 100%;
            object-fit: cover;
          }
          .news-frame2805 {
            gap: 20px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .news-text43 {
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
          .news-text45 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 129.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .news-text47 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .news-sidebar {
            gap: 15px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .news-frame294 {
            gap: 40px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .news-text49 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 24px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .news-searchbar {
            gap: 10px;
            display: flex;
            padding: 12px;
            align-self: stretch;
            align-items: flex-end;
            border-color: rgba(42, 42, 42, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 10px;
            flex-direction: column;
            justify-content: center;
          }
          .news-textandsearch {
            gap: 12px;
            display: flex;
            align-items: center;
          }
          .news-text54 {
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
          .news-search1 {
            width: 20px;
            height: 20px;
          }
          .news-frame293 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .news-frame287 {
            gap: 10px;
            display: flex;
            padding: 24px 10px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(42, 42, 42, 1);
            border-style: solid;
            border-width: 0 0 1px;
            justify-content: flex-end;
          }
          .news-text56 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .news-frame288 {
            gap: 10px;
            display: flex;
            padding: 24px 10px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(187, 188, 191, 1);
            border-style: solid;
            border-width: 0 0 1px;
            justify-content: flex-end;
          }
          .news-text58 {
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
          .news-frame289 {
            gap: 10px;
            display: flex;
            padding: 24px 10px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(187, 188, 191, 1);
            border-style: solid;
            border-width: 0 0 1px;
            justify-content: flex-end;
          }
          .news-text60 {
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
          .news-frame290 {
            gap: 10px;
            display: flex;
            padding: 24px 10px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(187, 188, 191, 1);
            border-style: solid;
            border-width: 0 0 1px;
            justify-content: flex-end;
          }
          .news-text62 {
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
          .news-container3 {
            display: flex;
            padding: 0 90px;
            z-index: 3;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .news-contactclose {
            gap: 8px;
            display: flex;
            padding: 13px 16px;
            align-items: center;
            border-radius: 7px;
            background-color: var(--dl-color-carasso-primaryblack);
          }
          .news-text64 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 18px;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          @media (max-width: 1920px) {
            .news-desktop-menu {
              display: none;
            }
            .news-burger-menu {
              display: flex;
            }
          }
          @media (max-width: 1200px) {
            .news-blogcontainer {
              width: 1080px;
            }
          }
          @media (max-width: 991px) {
            .news-sidebar {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .news-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .news-burger-menu {
              align-items: center;
              justify-content: center;
            }
            .news-text05 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .news-text06 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .news-text07 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .news-text08 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .news-text09 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .news-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .news-mobile-menu {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

export default News
