import React, { useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import {
  DataProvider,
  Repeater,
  DateTimePrimitive,
} from '@teleporthq/react-components'

import postsResource from '../resources/posts'
import newsResource from '../resources/news'
import posts1Resource from '../resources/posts1'
import posts2Resource from '../resources/posts2'
import posts3Resource from '../resources/posts3'
import posts4Resource from '../resources/posts4'
import posts5Resource from '../resources/posts5'
import posts6Resource from '../resources/posts6'
import brandsResource from '../resources/brands'

const News = (props) => {
  useEffect(() => import('@lottiefiles/lottie-player'), [])
  return (
    <>
      <div className="news-container">
        <Head>
          <title>News - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="News - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/bd438ef8-05f7-4c29-9c01-eea7ae17edea/54924954-5c3a-4ae6-9277-e76b2fdbc592?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <div className="news-header-1">
          <header data-thq="thq-navbar" className="news-navbar-interactive">
            <div className="news-search">
              <img
                id="navsearch"
                alt="image"
                src="c90025b4-cd9e-4b10-b60e-83848d5a8914"
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
                    className="news-image01"
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
                src="212659cd-3875-4ccd-947b-abbd25476938"
                className="news-image02"
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
                  <span className="news-text05">בלוג</span>
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
              <div className="news-container02">
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
          <div className="news-featured-post">
            <DataProvider
              renderSuccess={(context_idt18f) => (
                <>
                  <img
                    alt="Vector4859"
                    src="/external/blog_shape.svg"
                    className="news-vector"
                  />
                  <div className="news-leftcoloumn">
                    <img
                      alt="image"
                      src={context_idt18f?.Media?.url}
                      className="news-image03"
                    />
                  </div>
                  <div className="news-rightcoloumn">
                    <div className="news-frame296">
                      <span className="news-text13">הכתבה החמה</span>
                      <span className="news-text14">
                        {context_idt18f?.Title}
                      </span>
                      <span className="news-text15">
                        {context_idt18f?.Content}
                      </span>
                      <button className="news-carassobutton">
                        <div className="news-frame123">
                          <img
                            alt="Arrow7Stroke4859"
                            src="/external/arrow7stroke4859-994m.svg"
                            className="news-arrow7-stroke"
                          />
                          <span className="news-text16">
                            <span>לקריאת הכתבה</span>
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </>
              )}
              renderLoading={() => (
                <>
                  <div className="news-load">
                    <div className="news-div">
                      <lottie-player
                        src="https://lottie.host/c1e3a30b-9c83-46be-a838-a249c8aa863c/vZZAyBVfeU.json"
                        loop="true"
                        speed="1"
                        autoplay="true"
                        background="transparent"
                      ></lottie-player>
                    </div>
                  </div>
                </>
              )}
              initialData={props.contextIdt18fProp}
              persistDataDuringLoading={true}
            />
          </div>
          <div className="news-posts-listing">
            <div className="news-blogcontainer">
              <DataProvider
                renderSuccess={(params) => (
                  <>
                    <div>
                      <Repeater
                        items={params}
                        renderItem={(context_vnod9d) => (
                          <>
                            <div className="news-post-minitura">
                              <div className="news-frame9">
                                <img
                                  alt="image"
                                  src={context_vnod9d?.Featured_image?.url}
                                  className="news-image04"
                                />
                              </div>
                              <div className="news-frame280">
                                <span className="news-date-time">
                                  <DateTimePrimitive
                                    format="MMMM D, YYYY"
                                    date={context_vnod9d?.createdAt}
                                  ></DateTimePrimitive>
                                </span>
                                <span className="news-text18">
                                  {context_vnod9d?.Title}
                                  {[0]?.Title}
                                </span>
                                <span className="news-text19">
                                  {context_vnod9d?.Content}
                                  {[0]?.Content}
                                </span>
                              </div>
                            </div>
                          </>
                        )}
                      />
                    </div>
                  </>
                )}
                renderLoading={() => (
                  <>
                    <div className="news-load1">
                      <div className="news-div1">
                        <lottie-player
                          src="https://lottie.host/c1e3a30b-9c83-46be-a838-a249c8aa863c/vZZAyBVfeU.json"
                          loop="true"
                          speed=".5"
                          autoplay="true"
                          background="transparent"
                        ></lottie-player>
                      </div>
                    </div>
                    <div className="news-load2">
                      <div className="news-div2">
                        <lottie-player
                          src="https://lottie.host/c1e3a30b-9c83-46be-a838-a249c8aa863c/vZZAyBVfeU.json"
                          loop="true"
                          speed=".5"
                          autoplay="true"
                          background="transparent"
                        ></lottie-player>
                      </div>
                    </div>
                  </>
                )}
                initialData={props.contextVnod9dProp}
                persistDataDuringLoading={true}
              />
              <div className="news-frame297">
                <div className="news-hover-blog">
                  <div className="news-frame281">
                    <div className="news-frame901">
                      <img
                        alt="image"
                        src="/blog/c416e0d7a51cd55e8fe5e745cd82e4b5-600w.jpeg"
                        className="news-image05"
                      />
                    </div>
                    <div className="news-frame28001">
                      <span className="news-text20">
                        <span>18 בינואר, 2023</span>
                      </span>
                      <span className="news-text22">
                        <span>עיצוב אדמתי לחלל הבית</span>
                      </span>
                      <span className="news-text24">
                        <span>
                          בשנים האחרונות משקיעה החברה את מיטב המשאבים בפיתוח,
                          תכנון והקמה של מגוון פרויקטים מתקדמים המשקפים בשנים.
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="news-hover-blog01">
                  <div className="news-frame902">
                    <img
                      alt="image"
                      src="/blog/c416e0d7a51cd55e8fe5e745cd82e4b5-600w.jpeg"
                      className="news-image06"
                    />
                  </div>
                  <div className="news-frame28002">
                    <span className="news-text26">
                      <span>18 בינואר, 2023</span>
                    </span>
                    <span className="news-text28">
                      <span>איך נראת דירה לאנשים שאוהבים לארח</span>
                    </span>
                    <span className="news-text30">
                      <span>
                        בשנים האחרונות משקיעה החברה את מיטב המשאבים בפיתוח,
                        תכנון והקמה של מגוון פרויקטים מתקדמים המשקפים בשנים.
                      </span>
                    </span>
                  </div>
                </div>
                <div className="news-container04">
                  <div className="news-hover-blog02">
                    <DataProvider
                      renderSuccess={(context_dqtt59) => (
                        <>
                          <div className="news-frame903">
                            <img
                              alt="image"
                              src={context_dqtt59?.Media?.url}
                              className="news-image07"
                            />
                          </div>
                          <div className="news-frame28003">
                            <span className="news-date-time1">
                              <DateTimePrimitive
                                format="DD/MM/YYYY"
                                date="Mon Feb 26 2024 13:08:55 GMT+0200 (Israel Standard Time)"
                              ></DateTimePrimitive>
                            </span>
                            <span className="news-text32">
                              {context_dqtt59?.Title}
                            </span>
                            <span className="news-text33">
                              {context_dqtt59?.Content}
                            </span>
                          </div>
                        </>
                      )}
                      initialData={props.contextDqtt59Prop}
                      persistDataDuringLoading={true}
                    />
                  </div>
                </div>
                <div className="news-container05">
                  <div className="news-hover-blog03">
                    <DataProvider
                      renderSuccess={(context_rw8fu) => (
                        <>
                          <div className="news-frame904">
                            <img
                              alt="image"
                              src={context_rw8fu?.Media?.url}
                              className="news-image08"
                            />
                          </div>
                          <div className="news-frame28004">
                            <span className="news-date-time2">
                              <DateTimePrimitive
                                format="DD/MM/YYYY"
                                date="Mon Feb 26 2024 13:08:55 GMT+0200 (Israel Standard Time)"
                              ></DateTimePrimitive>
                            </span>
                            <span className="news-text34">
                              {context_rw8fu?.Title}
                            </span>
                            <span className="news-text35">
                              {context_rw8fu?.Content}
                            </span>
                          </div>
                        </>
                      )}
                      initialData={props.contextRw8fuProp}
                      persistDataDuringLoading={true}
                    />
                  </div>
                </div>
              </div>
              <div className="news-frame298">
                <div className="news-hover-blog04">
                  <div className="news-hover-blog05">
                    <div className="news-frame2811">
                      <img
                        alt="image"
                        src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                        className="news-image09"
                      />
                    </div>
                    <div className="news-frame28005">
                      <span className="news-text36">
                        <span>4 ביולי, 2023</span>
                      </span>
                      <span className="news-text38">
                        <span>
                          הפרויקט השני תחת המותג &quot;קרסו סאן&quot; יוצא לדרך:
                          נהרס הבניין ברחוב חדרה 10 בתל אביב
                        </span>
                      </span>
                      <span className="news-text40">
                        <span>
                          בשנים האחרונות משקיעה החברה את מיטב המשאבים בפיתוח,
                          תכנון והקמה של מגוון פרויקטים מתקדמים המשקפים בשנים.
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="news-hover-blog06">
                  <div className="news-frame282">
                    <div className="news-frame905">
                      <img
                        alt="image"
                        src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                        className="news-image10"
                      />
                    </div>
                    <div className="news-frame28006">
                      <span className="news-text42">
                        <span>18 בינואר, 2023</span>
                      </span>
                      <span className="news-text44">
                        <span>אורח חיים בחיבור לטבע</span>
                      </span>
                      <span className="news-text46">
                        <span>
                          בשנים האחרונות משקיעה החברה את מיטב המשאבים בפיתוח,
                          תכנון והקמה של מגוון פרויקטים מתקדמים המשקפים בשנים.
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="news-container06">
                  <div className="news-hover-blog07">
                    <DataProvider
                      renderSuccess={(context_155wp) => (
                        <>
                          <div className="news-frame906">
                            <img
                              alt="image"
                              src={context_155wp?.Media?.url}
                              className="news-image11"
                            />
                          </div>
                          <div className="news-frame28007">
                            <span className="news-date-time3">
                              <DateTimePrimitive
                                format="DD/MM/YYYY"
                                date="Mon Feb 26 2024 13:08:55 GMT+0200 (Israel Standard Time)"
                              ></DateTimePrimitive>
                            </span>
                            <span className="news-text48">
                              {context_155wp?.Title}
                            </span>
                            <span className="news-text49">
                              {context_155wp?.Content}
                            </span>
                          </div>
                        </>
                      )}
                      initialData={props.context155wpProp}
                      persistDataDuringLoading={true}
                    />
                  </div>
                </div>
                <div className="news-container07">
                  <div className="news-hover-blog08">
                    <DataProvider
                      renderSuccess={(context_6kdp8m) => (
                        <>
                          <div className="news-frame907">
                            <img
                              alt="image"
                              src={context_6kdp8m?.Media?.url}
                              className="news-image12"
                            />
                          </div>
                          <div className="news-frame28008">
                            <span className="news-date-time4">
                              <DateTimePrimitive
                                format="DD/MM/YYYY"
                                date="Mon Feb 26 2024 13:08:55 GMT+0200 (Israel Standard Time)"
                              ></DateTimePrimitive>
                            </span>
                            <span className="news-text50">
                              {context_6kdp8m?.Title}
                            </span>
                            <span className="news-text51">
                              {context_6kdp8m?.Content}
                            </span>
                          </div>
                        </>
                      )}
                      initialData={props.context6kdp8mProp}
                      persistDataDuringLoading={true}
                    />
                  </div>
                </div>
              </div>
              <div className="news-frame299">
                <div className="news-hover-blog09">
                  <div className="news-frame283">
                    <div className="news-frame2812">
                      <img
                        alt="image"
                        src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                        className="news-image13"
                      />
                    </div>
                    <div className="news-frame28009">
                      <span className="news-text52">
                        <span>18 בינואר, 2023</span>
                      </span>
                      <span className="news-text54">
                        <span>איך נראת דירה לאנשים שאוהבים לארח</span>
                      </span>
                      <span className="news-text56">
                        <span>
                          בשנים האחרונות משקיעה החברה את מיטב המשאבים בפיתוח,
                          תכנון והקמה של מגוון פרויקטים מתקדמים המשקפים בשנים.
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="news-hover-blog10">
                  <div className="news-frame284">
                    <div className="news-frame908">
                      <img
                        alt="image"
                        src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                        className="news-image14"
                      />
                    </div>
                    <div className="news-frame28010">
                      <span className="news-text58">
                        <span>18 בינואר, 2023</span>
                      </span>
                      <span className="news-text60">
                        <span>אורח חיים בחיבור לטבע</span>
                      </span>
                      <span className="news-text62">
                        <span>
                          בשנים האחרונות משקיעה החברה את מיטב המשאבים בפיתוח,
                          תכנון והקמה של מגוון פרויקטים מתקדמים המשקפים בשנים.
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="news-container08">
                  <div className="news-hover-blog11">
                    <DataProvider
                      renderSuccess={(context_zmw2jd) => (
                        <>
                          <div className="news-frame909">
                            <img
                              alt="image"
                              src={context_zmw2jd?.Media?.url}
                              className="news-image15"
                            />
                          </div>
                          <div className="news-frame28011">
                            <span className="news-date-time5">
                              <DateTimePrimitive
                                format="DD/MM/YYYY"
                                date="Mon Feb 26 2024 13:08:55 GMT+0200 (Israel Standard Time)"
                              ></DateTimePrimitive>
                            </span>
                            <span className="news-text64">
                              {context_zmw2jd?.Title}
                            </span>
                            <span className="news-text65">
                              {context_zmw2jd?.Content}
                            </span>
                          </div>
                        </>
                      )}
                      initialData={props.contextZmw2jdProp}
                      persistDataDuringLoading={true}
                    />
                  </div>
                </div>
                <div className="news-container09">
                  <div className="news-hover-blog12">
                    <DataProvider
                      renderSuccess={(context_scido) => (
                        <>
                          <div className="news-frame910">
                            <img
                              alt="image"
                              src={context_scido?.Media?.url}
                              className="news-image16"
                            />
                          </div>
                          <div className="news-frame28012">
                            <span className="news-date-time6">
                              <DateTimePrimitive
                                format="DD/MM/YYYY"
                                date="Mon Feb 26 2024 13:08:55 GMT+0200 (Israel Standard Time)"
                              ></DateTimePrimitive>
                            </span>
                            <span className="news-text66">
                              {context_scido?.Title}
                            </span>
                            <span className="news-text67">
                              {context_scido?.Content}
                            </span>
                          </div>
                        </>
                      )}
                      initialData={props.contextScidoProp}
                      persistDataDuringLoading={true}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="news-sidebar">
              <div className="news-frame294">
                <span className="news-text68">
                  <span>
                    <span>לחיפוש או</span>
                    <br></br>
                    <span>סינון לפי קטגוריות</span>
                  </span>
                </span>
                <div className="news-searchbar">
                  <div className="news-textandsearch">
                    <span className="news-text73">
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
                  <span className="news-text75">
                    <span>הכל</span>
                  </span>
                </div>
                <div className="news-frame288">
                  <span className="news-text77">
                    <span>קטגוריה 1</span>
                  </span>
                </div>
                <div className="news-frame289">
                  <span className="news-text79">
                    <span>קטגוריה 2</span>
                  </span>
                </div>
                <div className="news-frame290">
                  <span className="news-text81">
                    <span>קטגוריה 3</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="news-container10">
            <div className="news-contactclose">
              <span className="news-text83">
                <span>לעוד כתבות</span>
              </span>
            </div>
          </div>
        </div>
        <DataProvider
          renderSuccess={(context_ddk7ys) => (
            <>
              <span>{context_ddk7ys?.Brand_name}</span>
            </>
          )}
          initialData={props.contextDdk7ysProp}
          persistDataDuringLoading={true}
        />
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
            filter: invert();
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
          .news-image01 {
            cursor: pointer;
            filter: invert();
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
          .news-image02 {
            width: auto;
            cursor: pointer;
            filter: invert();
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
            text-decoration: none;
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
          .news-container02 {
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
          .news-featured-post {
            width: 100%;
            display: flex;
            padding: 10px 90px;
            z-index: 1;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            flex-direction: row;
          }
          .news-vector {
            top: -240px;
            left: 1066px;
            width: 564px;
            height: 633px;
            position: absolute;
          }
          .news-leftcoloumn {
            gap: 20px;
            display: flex;
            z-index: 1;
            flex-grow: 1;
            align-items: flex-start;
            border-radius: 20px;
          }
          .news-image03 {
            width: 100%;
            cursor: pointer;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .news-rightcoloumn {
            gap: 10px;
            height: var(--dl-size-size-xxlarge);
            display: flex;
            z-index: 2;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
            justify-content: space-between;
          }
          .news-frame296 {
            gap: 40px;
            height: auto;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .news-text13 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 16px;
            font-style: Bold;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 700;
            line-height: 140%;
            font-stretch: normal;
            text-decoration: none;
          }
          .news-text14 {
            color: var(--dl-color-carasso-primaryblack);
            width: 541px;
            height: auto;
            font-size: 42px;
            font-style: Regular;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 400;
            line-height: 120%;
            font-stretch: normal;
            text-decoration: none;
          }
          .news-text15 {
            color: rgb(0, 0, 0);
            width: 438px;
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 300;
            line-height: 140%;
            font-stretch: normal;
            text-decoration: none;
          }
          .news-carassobutton {
            gap: 12px;
            display: flex;
            align-items: flex-start;
          }
          .news-frame123 {
            gap: 12px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            text-decoration: none;
          }
          .news-arrow7-stroke {
            width: 8px;
            height: 7px;
          }
          .news-text16 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .news-load {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .news-div {
            width: 300px;
            height: 300px;
          }
          .news-posts-listing {
            gap: 20px;
            width: 100%;
            height: auto;
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
            width: 100%;
            align-self: center;
            align-items: flex-start;
          }
          .news-post-minitura {
            flex: 0 0 auto;
            width: 100%;
            cursor: pointer;
            height: auto;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius20);
            flex-direction: column;
            text-decoration: none;
          }
          .news-frame9 {
            gap: 10px;
            width: auto;
            display: flex;
            padding: 30px;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            margin-bottom: 30px;
          }
          .news-image04 {
            width: 100%;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .news-frame280 {
            gap: 20px;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            padding-left: 30px;
            padding-right: 30px;
            flex-direction: column;
            padding-bottom: 30px;
          }
          .news-date-time {
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
          .news-text18 {
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
          .news-text19 {
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
          .news-load1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .news-div1 {
            width: 300px;
            height: 300px;
          }
          .news-load2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .news-div2 {
            width: 300px;
            height: 300px;
          }
          .news-frame297 {
            gap: 48px;
            display: none;
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
          .news-frame901 {
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
          .news-image05 {
            width: 100%;
            object-fit: cover;
          }
          .news-frame28001 {
            gap: 20px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .news-text20 {
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
          .news-text22 {
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
          .news-text24 {
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
          .news-hover-blog01 {
            gap: 24px;
            width: 516px;
            display: none;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .news-frame902 {
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
          .news-image06 {
            width: 100%;
            object-fit: cover;
          }
          .news-frame28002 {
            gap: 20px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .news-text26 {
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
          .news-text28 {
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
          .news-text30 {
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
          .news-container04 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .news-hover-blog02 {
            gap: 24px;
            width: 100%;
            height: auto;
            display: flex;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .news-frame903 {
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
          .news-image07 {
            width: 100%;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .news-frame28003 {
            gap: 20px;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            padding-left: 30px;
            padding-right: 30px;
            flex-direction: column;
          }
          .news-date-time1 {
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
          .news-text32 {
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
          .news-text33 {
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
          .news-container05 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .news-hover-blog03 {
            gap: 24px;
            width: 100%;
            height: auto;
            display: flex;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .news-frame904 {
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
          .news-image08 {
            width: 100%;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .news-frame28004 {
            gap: 20px;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            padding-left: 30px;
            padding-right: 30px;
            flex-direction: column;
          }
          .news-date-time2 {
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
          .news-text34 {
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
          .news-text35 {
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
            display: none;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .news-hover-blog04 {
            gap: 10px;
            display: none;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .news-hover-blog05 {
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
          .news-image09 {
            width: 100%;
            object-fit: cover;
          }
          .news-frame28005 {
            gap: 20px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .news-text36 {
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
          .news-text38 {
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
          .news-text40 {
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
          .news-hover-blog06 {
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
          .news-frame905 {
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
          .news-image10 {
            width: 100%;
            object-fit: cover;
          }
          .news-frame28006 {
            gap: 20px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .news-text42 {
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
          .news-text44 {
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
          .news-text46 {
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
          .news-container06 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .news-hover-blog07 {
            gap: 24px;
            width: 100%;
            height: auto;
            display: flex;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .news-frame906 {
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
          .news-image11 {
            width: 100%;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .news-frame28007 {
            gap: 20px;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            padding-left: 30px;
            padding-right: 30px;
            flex-direction: column;
          }
          .news-date-time3 {
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
          .news-text48 {
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
          .news-text49 {
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
          .news-container07 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .news-hover-blog08 {
            gap: 24px;
            width: 100%;
            height: auto;
            display: flex;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .news-frame907 {
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
          .news-image12 {
            width: 100%;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .news-frame28008 {
            gap: 20px;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            padding-left: 30px;
            padding-right: 30px;
            flex-direction: column;
          }
          .news-date-time4 {
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
          .news-text50 {
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
          .news-text51 {
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
          .news-frame299 {
            gap: 48px;
            display: none;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .news-hover-blog09 {
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
          .news-image13 {
            width: 100%;
            object-fit: cover;
          }
          .news-frame28009 {
            gap: 20px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .news-text52 {
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
          .news-text54 {
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
          .news-text56 {
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
          .news-hover-blog10 {
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
          .news-frame908 {
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
          .news-image14 {
            width: 100%;
            object-fit: cover;
          }
          .news-frame28010 {
            gap: 20px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .news-text58 {
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
          .news-text60 {
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
          .news-text62 {
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
          .news-container08 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .news-hover-blog11 {
            gap: 24px;
            width: 100%;
            height: auto;
            display: flex;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .news-frame909 {
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
          .news-image15 {
            width: 100%;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .news-frame28011 {
            gap: 20px;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            padding-left: 30px;
            padding-right: 30px;
            flex-direction: column;
          }
          .news-date-time5 {
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
          .news-text64 {
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
          .news-text65 {
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
          .news-container09 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .news-hover-blog12 {
            gap: 24px;
            width: 100%;
            height: auto;
            display: flex;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .news-frame910 {
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
          .news-image16 {
            width: 100%;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .news-frame28012 {
            gap: 20px;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            padding-left: 30px;
            padding-right: 30px;
            flex-direction: column;
          }
          .news-date-time6 {
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
          .news-text66 {
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
          .news-text67 {
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
          .news-text68 {
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
          .news-text73 {
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
          .news-text75 {
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
          .news-text77 {
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
          .news-text79 {
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
          .news-text81 {
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
          .news-container10 {
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
          .news-text83 {
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
            .news-image04 {
              border-radius: var(--dl-radius-radius-radius20);
            }
            .news-image07 {
              border-radius: var(--dl-radius-radius-radius20);
            }
            .news-image08 {
              border-radius: var(--dl-radius-radius-radius20);
            }
            .news-image11 {
              border-radius: var(--dl-radius-radius-radius20);
            }
            .news-image12 {
              border-radius: var(--dl-radius-radius-radius20);
            }
            .news-image15 {
              border-radius: var(--dl-radius-radius-radius20);
            }
            .news-image16 {
              border-radius: var(--dl-radius-radius-radius20);
            }
          }
          @media (max-width: 991px) {
            .news-image04 {
              border-radius: var(--dl-radius-radius-radius4);
            }
            .news-text19 {
              color: var(--dl-color-carasso-darkergray);
              font-size: 18px;
              font-family: Ploni ML v2 AAA;
              font-weight: 300;
              line-height: 140%;
              text-decoration: none;
            }
            .news-image07 {
              border-radius: var(--dl-radius-radius-radius4);
            }
            .news-text33 {
              color: var(--dl-color-carasso-darkergray);
              font-size: 18px;
              font-family: Ploni ML v2 AAA;
              font-weight: 300;
              line-height: 140%;
              text-decoration: none;
            }
            .news-image08 {
              border-radius: var(--dl-radius-radius-radius4);
            }
            .news-text35 {
              color: var(--dl-color-carasso-darkergray);
              font-size: 18px;
              font-family: Ploni ML v2 AAA;
              font-weight: 300;
              line-height: 140%;
              text-decoration: none;
            }
            .news-image11 {
              border-radius: var(--dl-radius-radius-radius4);
            }
            .news-text49 {
              color: var(--dl-color-carasso-darkergray);
              font-size: 18px;
              font-family: Ploni ML v2 AAA;
              font-weight: 300;
              line-height: 140%;
              text-decoration: none;
            }
            .news-image12 {
              border-radius: var(--dl-radius-radius-radius4);
            }
            .news-text51 {
              color: var(--dl-color-carasso-darkergray);
              font-size: 18px;
              font-family: Ploni ML v2 AAA;
              font-weight: 300;
              line-height: 140%;
              text-decoration: none;
            }
            .news-image15 {
              border-radius: var(--dl-radius-radius-radius4);
            }
            .news-text65 {
              color: var(--dl-color-carasso-darkergray);
              font-size: 18px;
              font-family: Ploni ML v2 AAA;
              font-weight: 300;
              line-height: 140%;
              text-decoration: none;
            }
            .news-image16 {
              border-radius: var(--dl-radius-radius-radius4);
            }
            .news-text67 {
              color: var(--dl-color-carasso-darkergray);
              font-size: 18px;
              font-family: Ploni ML v2 AAA;
              font-weight: 300;
              line-height: 140%;
              text-decoration: none;
            }
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
            .news-frame9 {
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .news-image04 {
              height: auto;
            }
            .news-frame280 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .news-date-time {
              color: var(--dl-color-carasso-darkergray);
              font-size: 18px;
              font-family: Ploni ML v2 AAA;
              font-weight: 300;
              line-height: 140%;
              text-decoration: none;
            }
            .news-text18 {
              color: var(--dl-color-carasso-primaryblack);
              font-size: 24px;
              font-family: Ploni ML v2 AAA;
              font-weight: 500;
              line-height: 120%;
              text-decoration: none;
            }
            .news-frame903 {
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .news-image07 {
              height: auto;
            }
            .news-frame28003 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .news-date-time1 {
              color: var(--dl-color-carasso-darkergray);
              font-size: 18px;
              font-family: Ploni ML v2 AAA;
              font-weight: 300;
              line-height: 140%;
              text-decoration: none;
            }
            .news-text32 {
              color: var(--dl-color-carasso-primaryblack);
              font-size: 24px;
              font-family: Ploni ML v2 AAA;
              font-weight: 500;
              line-height: 120%;
              text-decoration: none;
            }
            .news-frame904 {
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .news-image08 {
              height: auto;
            }
            .news-frame28004 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .news-date-time2 {
              color: var(--dl-color-carasso-darkergray);
              font-size: 18px;
              font-family: Ploni ML v2 AAA;
              font-weight: 300;
              line-height: 140%;
              text-decoration: none;
            }
            .news-text34 {
              color: var(--dl-color-carasso-primaryblack);
              font-size: 24px;
              font-family: Ploni ML v2 AAA;
              font-weight: 500;
              line-height: 120%;
              text-decoration: none;
            }
            .news-frame906 {
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .news-image11 {
              height: auto;
            }
            .news-frame28007 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .news-date-time3 {
              color: var(--dl-color-carasso-darkergray);
              font-size: 18px;
              font-family: Ploni ML v2 AAA;
              font-weight: 300;
              line-height: 140%;
              text-decoration: none;
            }
            .news-text48 {
              color: var(--dl-color-carasso-primaryblack);
              font-size: 24px;
              font-family: Ploni ML v2 AAA;
              font-weight: 500;
              line-height: 120%;
              text-decoration: none;
            }
            .news-frame907 {
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .news-image12 {
              height: auto;
            }
            .news-frame28008 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .news-date-time4 {
              color: var(--dl-color-carasso-darkergray);
              font-size: 18px;
              font-family: Ploni ML v2 AAA;
              font-weight: 300;
              line-height: 140%;
              text-decoration: none;
            }
            .news-text50 {
              color: var(--dl-color-carasso-primaryblack);
              font-size: 24px;
              font-family: Ploni ML v2 AAA;
              font-weight: 500;
              line-height: 120%;
              text-decoration: none;
            }
            .news-frame909 {
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .news-image15 {
              height: auto;
            }
            .news-frame28011 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .news-date-time5 {
              color: var(--dl-color-carasso-darkergray);
              font-size: 18px;
              font-family: Ploni ML v2 AAA;
              font-weight: 300;
              line-height: 140%;
              text-decoration: none;
            }
            .news-text64 {
              color: var(--dl-color-carasso-primaryblack);
              font-size: 24px;
              font-family: Ploni ML v2 AAA;
              font-weight: 500;
              line-height: 120%;
              text-decoration: none;
            }
            .news-frame910 {
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .news-image16 {
              height: auto;
            }
            .news-frame28012 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .news-date-time6 {
              color: var(--dl-color-carasso-darkergray);
              font-size: 18px;
              font-family: Ploni ML v2 AAA;
              font-weight: 300;
              line-height: 140%;
              text-decoration: none;
            }
            .news-text66 {
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

export default News

export async function getStaticProps(context) {
  try {
    const contextDdk7ysProp = await brandsResource({
      ...context?.params,
    })
    if (!contextDdk7ysProp?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    const contextScidoProp = await posts6Resource({
      ...context?.params,
    })
    if (!contextScidoProp?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    const contextZmw2jdProp = await posts5Resource({
      ...context?.params,
    })
    if (!contextZmw2jdProp?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    const context6kdp8mProp = await posts4Resource({
      ...context?.params,
    })
    if (!context6kdp8mProp?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    const context155wpProp = await posts3Resource({
      ...context?.params,
    })
    if (!context155wpProp?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    const contextRw8fuProp = await posts2Resource({
      ...context?.params,
    })
    if (!contextRw8fuProp?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    const contextDqtt59Prop = await posts1Resource({
      ...context?.params,
    })
    if (!contextDqtt59Prop?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    const contextVnod9dProp = await newsResource({
      ...context?.params,
    })
    if (!contextVnod9dProp) {
      return {
        notFound: true,
      }
    }
    const contextIdt18fProp = await postsResource({
      ...context?.params,
    })
    if (!contextIdt18fProp?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        contextDdk7ysProp: contextDdk7ysProp?.data?.[0],
        contextScidoProp: contextScidoProp?.data?.[0],
        contextZmw2jdProp: contextZmw2jdProp?.data?.[0],
        context6kdp8mProp: context6kdp8mProp?.data?.[0],
        context155wpProp: context155wpProp?.data?.[0],
        contextRw8fuProp: contextRw8fuProp?.data?.[0],
        contextDqtt59Prop: contextDqtt59Prop?.data?.[0],
        contextVnod9dProp: contextVnod9dProp,
        contextIdt18fProp: contextIdt18fProp?.data?.[0],
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
