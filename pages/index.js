import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Projectcard1 from '../components/projectcard1'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <div className="home-header-1">
          <header data-thq="thq-navbar" className="home-navbar-interactive">
            <div className="home-search">
              <img
                id="navsearch"
                alt="image"
                src="/csearch.svg"
                className="home-image"
              />
            </div>
            <div className="home-logo">
              <Link href="/">
                <a className="home-link">
                  <img
                    id="logo"
                    alt="logo"
                    src="/clogo.svg"
                    className="home-image1"
                  />
                </a>
              </Link>
            </div>
            <div data-thq="thq-navbar-nav" className="home-desktop-menu">
              <nav className="home-links">
                <span>About</span>
                <span className="home-text001">Features</span>
                <span className="home-text002">Pricing</span>
                <span className="home-text003">Team</span>
                <span className="home-text004">Blog</span>
              </nav>
              <div className="home-buttons">
                <button className="home-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <img
                id="navmenu"
                alt="image"
                src="/cmenu.svg"
                className="home-image2"
              />
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div className="home-nav">
                <div className="home-top">
                  <div data-thq="thq-close-menu" className="home-close-menu">
                    <svg viewBox="0 0 1024 1024" className="home-icon02">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                  <img
                    alt="image"
                    src="/clogo-no-fill.svg"
                    className="home-logo1"
                  />
                </div>
                <nav className="home-links1">
                  <Link href="/posts">
                    <a className="home-link1">בלוג</a>
                  </Link>
                  <span className="home-text005">Features</span>
                  <span className="home-text006">Blog</span>
                  <span className="home-text007">Pricing</span>
                  <span className="home-text008">Team</span>
                </nav>
                <div className="home-buttons1">
                  <button className="home-login1 button">Login</button>
                  <button className="button">Register</button>
                </div>
              </div>
              <div className="home-icon-group">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon04"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon06"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon08"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
            <div>
              <div className="home-container02">
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
        <div className="home-background">
          <img
            alt="image"
            src="/carasso-fbf_00001-1500w.jpg"
            className="home-image3"
          />
        </div>
        <section className="home-projects">
          <div className="home-projectsrightblock">
            <button className="home-carassobutton">
              <img
                alt="Arrow7Stroke3882"
                src="/external/arrow7stroke3882-sj2n1.svg"
                className="home-arrow7-stroke"
              />
              <span className="home-text009">
                <span>פרויקטים למגורים</span>
              </span>
            </button>
            <div className="home-projectsheadlineandtabs">
              <span className="home-text011">
                <span>
                  <span>
                    <span>
                      פרויקטים
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>נבחרים</span>
              </span>
              <div className="home-projectstabs">
                <div className="home-frame70">
                  <span className="home-text020">
                    <span>משרדים ותעסוקה</span>
                  </span>
                </div>
                <div className="home-frame69">
                  <span className="home-text022">
                    <span>מרכזים מסחריים</span>
                  </span>
                </div>
                <div className="home-frame">
                  <span className="home-text024">
                    <span>מגורים</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-selected-projects">
            <div id="slider" className="home-left-column draggable">
              <div>
                <div className="home-container04">
                  <Script
                    html={`<script>
touchScroll('.draggable');

function touchScroll (\$bind = '') {
  const slider = document.querySelector(\$bind);
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    cancelMomentumTracking();
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
    beginMomentumTracking();
  });

  slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    var prevScrollLeft = slider.scrollLeft;
    slider.scrollLeft = scrollLeft - walk;
    velX = slider.scrollLeft - prevScrollLeft;
  });
  
  slider.addEventListener('wheel', (e) => {
    cancelMomentumTracking();
  });  

  // Detect animation
  var velX = 0;
  var momentumID;

  function beginMomentumTracking(){
    cancelMomentumTracking();
    momentumID = requestAnimationFrame(momentumLoop);
  }
  function cancelMomentumTracking(){
    cancelAnimationFrame(momentumID);
  }
  function momentumLoop(){
    slider.scrollLeft += velX;
    velX *= 0.95; 
    if (Math.abs(velX) > 0.5){
      momentumID = requestAnimationFrame(momentumLoop);
    }
  }
}
//scroll
//  var item = document.getElementById("slider");
//  window.addEventListener("wheel", (evt) => {
    // evt.preventDefault();
//    item.scrollLeft -= evt.deltaY * 12;
//  });
</script>
`}
                  ></Script>
                </div>
              </div>
              <Projectcard1></Projectcard1>
              <Projectcard1 rootClassName="projectcard1-root-class-name"></Projectcard1>
              <Projectcard1></Projectcard1>
              <Projectcard1></Projectcard1>
              <Projectcard1></Projectcard1>
              <Projectcard1></Projectcard1>
              <Projectcard1></Projectcard1>
              <Projectcard1></Projectcard1>
              <Projectcard1></Projectcard1>
              <Projectcard1></Projectcard1>
              <Projectcard1></Projectcard1>
              <Projectcard1></Projectcard1>
              <Projectcard1></Projectcard1>
              <Projectcard1></Projectcard1>
              <Projectcard1></Projectcard1>
            </div>
            <div className="home-right-column">
              <div className="home-projectsrightblock1">
                <div className="home-projectsheadlineandtabs1">
                  <span className="home-text026">
                    <span>פרויקטים נבחרים</span>
                    <br></br>
                  </span>
                  <div className="home-projectstabs1">
                    <span className="home-text029">
                      <span>מגורים</span>
                    </span>
                    <img
                      alt="Vector543708"
                      src="/external/vector543708-5chc1.svg"
                      className="home-vector54"
                    />
                    <span className="home-text031">
                      <span>מרכזים מסחריים</span>
                    </span>
                    <img
                      alt="Vector553708"
                      src="/external/vector553708-3m2r1.svg"
                      className="home-vector55"
                    />
                    <span className="home-text033">משרדים ותעסוקה</span>
                  </div>
                </div>
                <div className="home-container05">
                  <button type="button" className="home-buttontextarrow">
                    <img
                      alt="Arrow7Stroke3708"
                      src="/external/arrow7stroke3708-fasf1.svg"
                      className="home-arrow7-stroke1"
                    />
                    <span className="home-text034">לפרויקטים נוספים</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="home-arrow-container">
            <div className="home-arrows">
              <button
                id="btnl"
                type="button"
                className="home-button-left button"
              >
                <img
                  alt="arrowforward3708"
                  src="/external/arrowforward3708-k3sa.svg"
                  loading="lazy"
                  className="home-arrowforward"
                />
              </button>
              <button
                id="btnr"
                type="button"
                className="home-button-right button"
              >
                <img
                  alt="arrowbackward3708"
                  src="/external/arrowbackward3708-8d3e1.svg"
                  loading="lazy"
                  className="home-arrowbackward"
                />
              </button>
              <div>
                <div className="home-container07">
                  <Script
                    html={`<script>
  // Bottom Arrows Navigation
  document
    .getElementById("btnr")
    .addEventListener("click", function pullRight() {
      const cont1 = document.getElementById("slider");
      cont1.scrollLeft += 407 * 2;
      console.log(cont1.scroll);
    });

  document
    .getElementById("btnl")
    .addEventListener("click", function pushLeft() {
      const cont2 = document.getElementById("slider");
      cont2.scrollLeft -= 407 * 2;
      console.log(cont2.scroll);
    });
</script>
`}
                  ></Script>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="home-success-story">
          <div className="home-container08">
            <div className="home-leftcoloumn">
              <div className="home-successcopycontent">
                <div className="home-successnumbercontent">
                  <div className="home-bignumberscontent">
                    <span className="home-text035">
                      <span className="home-text036">
                        <span>90 שנים</span>
                        <br></br>
                        <span></span>
                      </span>
                      <span>של פעילות במספרים</span>
                    </span>
                    <div className="home-bignumbers">
                      <div className="home-numberrowcontainer">
                        <div className="home-bignumberblock">
                          <div className="home-numbertext">
                            <img
                              alt="Vector5472"
                              src="/external/vector5472-civk.svg"
                              className="home-vector"
                            />
                            <span className="home-text041">
                              <span>4,462</span>
                            </span>
                          </div>
                          <div className="home-bignumbertitleandicon">
                            <img
                              alt="UsersThree5472"
                              src="/external/usersthree5472-lqi6.svg"
                              className="home-users-three"
                            />
                            <span className="home-text043">
                              <span>בעלי דירות שותפים</span>
                            </span>
                          </div>
                        </div>
                        <div className="home-bignumberblock1">
                          <div className="home-numbertext1">
                            <img
                              alt="Vector5472"
                              src="/external/vector5472-le6b.svg"
                              className="home-vector1"
                            />
                            <span className="home-text045">
                              <span>54</span>
                            </span>
                          </div>
                          <div className="home-bignumbertitleandicon1">
                            <img
                              alt="buildingsicon5472"
                              src="/external/buildingsicon5472-xnx4.svg"
                              className="home-buildingsicon"
                            />
                            <span className="home-text047">
                              <span>פרויקטים למגורים</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="home-numberrowcontainer1">
                        <div className="home-bignumberblock2">
                          <button className="home-carassobutton1">
                            <div className="home-frame123">
                              <img
                                alt="Arrow7Stroke5472"
                                src="/external/arrow7stroke5472-k5fk.svg"
                                className="home-arrow7-stroke2"
                              />
                              <span className="home-text049">
                                <span>סיפורי הצלחה</span>
                              </span>
                            </div>
                          </button>
                        </div>
                        <div className="home-bignumberblock3">
                          <div className="home-numbertext2">
                            <img
                              alt="Vector5472"
                              src="/external/vector5472-wrob.svg"
                              className="home-vector2"
                            />
                            <span className="home-text051">
                              <span>11,110</span>
                            </span>
                          </div>
                          <div className="home-bignumbertitleandicon2">
                            <img
                              alt="ArrowSquareOut5472"
                              src="/external/arrowsquareout5472-jjvr.svg"
                              className="home-arrow-square-out"
                            />
                            <span className="home-text053">
                              <span>דירות לשיווק</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-rightcoloumn">
              <img
                alt="successstoryimage5472"
                src="/external/successstoryimage5472-ibwj.svg"
                className="home-successstoryimage"
              />
            </div>
          </div>
        </div>
        <div className="home-urban-renewal">
          <div className="home-container09">
            <div className="home-leftcoloumn1"></div>
            <div className="home-rightcoloumn1">
              <div className="home-frame1261158162">
                <span className="home-text055">
                  <span className="home-text056">
                    <span>השותפים שלך</span>
                    <br></br>
                    <span></span>
                  </span>
                  <span>להתחדשות עירונית</span>
                </span>
                <span className="home-text061">
                  <span>
                    אנחנו מחלוצי ההתחדשות העירונית בארץ, עם מעל ל-12 שנה של
                    ניסיון בתחום. אנחנו פעילים בהתחדשות שכונות ופרויקטים רחבי
                    היקף של פינוי בינוי והקמת פרויקטי בוטיק מתוקף תמ״א 38/2
                    ומובילים במדדים היוקרתיים Dun’s 100 של חברת דן אנד ברדסטריט,
                    BDI CODE ומדד ההתחדשות העירונית של מדלן.
                  </span>
                </span>
                <button className="home-carassobutton2">
                  <div className="home-frame1231">
                    <img
                      alt="Arrow7Stroke5472"
                      src="/external/arrow7stroke5472-dn3f.svg"
                      className="home-arrow7-stroke3"
                    />
                    <span className="home-text063">
                      <span>התחדשות עירונית</span>
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="home-container10">
          <div className="home-leftcoloumn2">
            <div className="home-links2">
              <div className="home-linksrow2">
                <span className="home-text065">
                  <span>פנו אלינו</span>
                </span>
                <div className="home-links3">
                  <div className="home-frame133">
                    <span className="home-text067">
                      <span>+972 050 123 1234</span>
                    </span>
                    <span className="home-text069">
                      <span>ריב״ל 24, תל אביב-יפו</span>
                    </span>
                    <span className="home-text071">
                      <span>info@carasso-nadlan.com</span>
                    </span>
                  </div>
                  <div className="home-frame1261158158">
                    <img
                      alt="LinkedinLogo5472"
                      src="/external/linkedinlogo5472-wmth.svg"
                      className="home-linkedin-logo"
                    />
                    <img
                      alt="InstagramLogo5472"
                      src="/external/instagramlogo5472-0y4k.svg"
                      className="home-instagram-logo"
                    />
                    <img
                      alt="FacebookLogo5472"
                      src="/external/facebooklogo5472-il2.svg"
                      className="home-facebook-logo"
                    />
                  </div>
                </div>
              </div>
              <div className="home-linksrow21">
                <span className="home-text073">
                  <span>פרויקטים</span>
                </span>
                <div className="home-links4">
                  <span className="home-text075">
                    <span>פרויקטים למגורים</span>
                  </span>
                  <span className="home-text077">
                    <span>סיפורי הצלחה</span>
                  </span>
                  <span className="home-text079">
                    <span>מרכזי קניות</span>
                  </span>
                  <span className="home-text081">
                    <span>משרדים והייטק</span>
                  </span>
                </div>
              </div>
              <div className="home-linksrow1">
                <span className="home-text083">
                  <span>על החברה</span>
                </span>
                <div className="home-links5">
                  <span className="home-text085">
                    <span>דף הבית</span>
                  </span>
                  <span className="home-text087">
                    <span>הסיפור שלנו</span>
                  </span>
                  <span className="home-text089">
                    <span>התחדשות עירונית</span>
                  </span>
                  <span className="home-text091">
                    <span>חדשות ועידכונים</span>
                  </span>
                  <span className="home-text093">
                    <span>יצירת קשר</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="home-info">
              <div className="home-termslinks">
                <span className="home-text095">
                  <span>הצהרת נגישות</span>
                </span>
                <span className="home-text097">
                  <span>איסוף נתונים</span>
                </span>
                <span className="home-text099">
                  <span>מדיניות פרטיות</span>
                </span>
                <span className="home-text101">
                  <span>אחריות תאגידית</span>
                </span>
                <div className="home-frame56">
                  <span className="home-text103">
                    <span>2023 קרסו</span>
                  </span>
                  <img
                    alt="Copyright5472"
                    src="/external/copyright5472-j32.svg"
                    className="home-copyright"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="home-rightcoloumn2">
            <img
              alt="Vector5472"
              src="/external/vector5472-3ap.svg"
              className="home-vector3"
            />
            <img
              alt="Carassologo5472"
              src="/external/carassologo5472-4son.svg"
              className="home-carassologo"
            />
            <div className="home-moveo-design-credit">
              <div className="home-moveologo">
                <span className="home-text105">
                  <span>Designed by</span>
                </span>
                <img
                  alt="Vector5472"
                  src="/external/vector5472-3cu.svg"
                  className="home-vector4"
                />
                <img
                  alt="Vector5472"
                  src="/external/vector5472-py5p.svg"
                  className="home-vector5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-header-1 {
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
          .home-navbar-interactive {
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
          .home-search {
            flex: 0 0 auto;
            width: 5%;
            height: 40px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-image {
            width: 24px;
            cursor: pointer;
            object-fit: cover;
          }
          .home-logo {
            flex: 0 0 auto;
            width: 90%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-link {
            display: contents;
          }
          .home-image1 {
            cursor: pointer;
            height: auto;
            align-self: center;
            text-decoration: none;
          }
          .home-desktop-menu {
            flex: 1;
            display: none;
            justify-content: space-between;
          }
          .home-links {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-text001 {
            margin-left: var(--dl-space-space-twounits);
          }
          .home-text002 {
            margin-left: var(--dl-space-space-twounits);
          }
          .home-text003 {
            margin-left: var(--dl-space-space-twounits);
          }
          .home-text004 {
            margin-left: var(--dl-space-space-twounits);
          }
          .home-buttons {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-login {
            border-width: 0px;
            margin-right: var(--dl-space-space-twounits);
          }
          .home-burger-menu {
            width: 5%;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .home-image2 {
            fill: var(--dl-color-carasso-plainwhite);
            width: auto;
            cursor: pointer;
            height: 10px;
            object-fit: cover;
          }
          .home-icon {
            fill: #d9d9d9;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: none;
          }
          .home-mobile-menu {
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
          .home-nav {
            width: 100%;
            display: flex;
            align-self: flex-end;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            width: 24px;
            height: 24px;
          }
          .home-logo1 {
            fill: var(--dl-color-carasso-primaryblack);
            filter: invert(1);
            height: 2rem;
          }
          .home-links1 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-end;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-link1 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-text005 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text006 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text007 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text008 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-buttons1 {
            display: flex;
            align-self: flex-end;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-login1 {
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon-group {
            align-self: flex-end;
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-container02 {
            display: contents;
          }
          .home-background {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .home-image3 {
            width: 100%;
            object-fit: cover;
          }
          .home-projects {
            width: 100%;
            height: auto;
            display: flex;
            padding: 80px 0;
            overflow: hidden;
            overflow-y: hidden;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-carasso-backgroundcolor);
          }
          .home-projectsrightblock {
            gap: 50px;
            width: 100%;
            height: auto;
            display: none;
            padding: 20px 0;
            flex-grow: 1;
            align-items: flex-end;
            justify-content: flex-end;
          }
          .home-carassobutton {
            gap: 12px;
            display: flex;
            align-items: flex-start;
          }
          .home-arrow7-stroke {
            width: 8px;
            height: 7px;
          }
          .home-text009 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: DemiBold;
            text-align: right;
            font-weight: 400;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-projectsheadlineandtabs {
            gap: 35px;
            width: 568px;
            display: flex;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: flex-end;
          }
          .home-text011 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 42px;
            font-style: Light;
            text-align: right;
            font-weight: 300;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-projectstabs {
            gap: 30px;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .home-frame70 {
            gap: 10px;
            display: flex;
            padding: 0 0 10px;
            align-items: flex-start;
            border-color: rgba(187, 188, 191, 1);
            border-style: solid;
            border-width: 0 0 1px;
            justify-content: flex-end;
          }
          .home-text020 {
            color: var(--dl-color-carasso-graytextcolor);
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-weight: 300;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-frame69 {
            gap: 10px;
            display: flex;
            padding: 0 0 10px;
            align-items: flex-start;
            border-color: rgba(187, 188, 191, 1);
            border-style: solid;
            border-width: 0 0 1px;
            justify-content: flex-end;
          }
          .home-text022 {
            color: var(--dl-color-carasso-graytextcolor);
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-weight: 300;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-frame {
            gap: 10px;
            display: flex;
            padding: 0 0 10px;
            align-items: flex-start;
            border-color: rgba(42, 42, 42, 1);
            border-style: solid;
            border-width: 0 0 1px;
            justify-content: flex-end;
          }
          .home-text024 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: DemiBold;
            text-align: right;
            font-weight: 400;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-selected-projects {
            gap: 0;
            display: flex;
            padding: 0 90px 0 0;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .home-left-column {
            gap: 20px;
          }
          .home-container04 {
            display: contents;
          }
          .home-right-column {
            gap: 10px;
            display: flex;
            padding: 0 0 0 90px;
            align-items: flex-start;
          }
          .home-projectsrightblock1 {
            gap: 160px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-projectsheadlineandtabs1 {
            gap: 95px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-text026 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 50px;
            text-align: right;
            font-weight: 300;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-projectstabs1 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-text029 {
            color: rgba(187, 189, 191, 1);
            cursor: pointer;
            height: auto;
            font-size: 18px;
            font-style: DemiBold;
            text-align: right;
            transition: 0.3s;
            font-weight: 400;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text029:hover {
            color: var(--dl-color-carasso-primaryblack);
          }
          .home-text029:active {
            color: var(--dl-color-carasso-primaryblack);
          }
          .home-vector54 {
            width: 177px;
            height: 1px;
            align-self: stretch;
          }
          .home-text031 {
            color: rgba(187, 189, 191, 1);
            cursor: pointer;
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            transition: 0.3s;
            font-weight: 300;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text031:hover {
            color: var(--dl-color-carasso-primaryblack);
          }
          .home-text031:active {
            color: var(--dl-color-carasso-primaryblack);
          }
          .home-vector55 {
            width: 177px;
            height: 1px;
            align-self: stretch;
          }
          .home-text033 {
            color: rgb(187, 189, 191);
            cursor: pointer;
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            transition: 0.3s;
            font-weight: 300;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text033:hover {
            color: var(--dl-color-carasso-primaryblack);
          }
          .home-text033:active {
            color: var(--dl-color-carasso-primaryblack);
          }
          .home-container05 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-buttontextarrow {
            gap: 8px;
            cursor: pointer;
            display: flex;
            align-items: center;
            border-color: rgba(187, 187, 187, 1);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .home-arrow7-stroke1 {
            width: 8px;
            height: 7px;
          }
          .home-text034 {
            color: var(--dl-color-carasso-primaryblack);
            cursor: pointer;
            height: auto;
            font-size: 18px;
            font-style: DemiBold;
            text-align: right;
            font-weight: 400;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-arrow-container {
            gap: 10px;
            display: flex;
            padding: 20px 0 20px 90px;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-arrows {
            gap: 9px;
            display: flex;
            align-items: flex-start;
          }
          .home-button-left {
            display: flex;
            border-width: 0px;
            flex-direction: row;
          }
          .home-arrowforward {
            width: 39px;
            height: 27px;
          }
          .home-button-right {
            display: flex;
            border-width: 0px;
            flex-direction: row;
          }
          .home-arrowbackward {
            width: 39px;
            height: 27px;
          }
          .home-container07 {
            display: contents;
          }
          .home-success-story {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(236, 236, 236, 1);
          }
          .home-container08 {
            gap: 32px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .home-leftcoloumn {
            display: flex;
            padding: 0 70px 20px 90px;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            justify-content: flex-end;
          }
          .home-successcopycontent {
            gap: 10px;
            width: 560px;
            display: flex;
            padding: 10px;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .home-successnumbercontent {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
          }
          .home-bignumberscontent {
            gap: 80px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-text035 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 50px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text036 {
            font-weight: 300;
          }
          .home-bignumbers {
            gap: 70px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-numberrowcontainer {
            gap: 70px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-bignumberblock {
            gap: 30px;
            width: 235px;
            display: flex;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .home-numbertext {
            gap: 20px;
            display: flex;
            align-items: flex-end;
          }
          .home-vector {
            width: 15px;
            height: 15px;
          }
          .home-text041 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 80px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-bignumbertitleandicon {
            gap: 37px;
            display: flex;
            padding: 9px 0 0;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(115, 119, 123, 1);
            border-style: solid;
            border-width: 0.5px 0 0;
            justify-content: space-between;
          }
          .home-users-three {
            width: 24px;
            height: 24px;
          }
          .home-text043 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: Regular;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-bignumberblock1 {
            gap: 30px;
            width: 235px;
            display: flex;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .home-numbertext1 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
          }
          .home-vector1 {
            width: 15px;
            height: 15px;
          }
          .home-text045 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 80px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-bignumbertitleandicon1 {
            gap: 37px;
            display: flex;
            padding: 9px 0 0;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(115, 119, 123, 1);
            border-style: solid;
            border-width: 0.5px 0 0;
            justify-content: space-between;
          }
          .home-buildingsicon {
            width: 24px;
            height: 24px;
          }
          .home-text047 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: Regular;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-numberrowcontainer1 {
            gap: 60px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-bignumberblock2 {
            gap: 30px;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-end;
          }
          .home-carassobutton1 {
            gap: 12px;
            display: flex;
            padding: 0 0 12px;
            align-items: flex-start;
            border-color: rgba(42, 42, 42, 1);
            border-style: solid;
            border-width: 0 0 1px;
          }
          .home-frame123 {
            gap: 12px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .home-arrow7-stroke2 {
            width: 8px;
            height: 7px;
          }
          .home-text049 {
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
          .home-bignumberblock3 {
            gap: 30px;
            width: 240px;
            display: flex;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .home-numbertext2 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
          }
          .home-vector2 {
            width: 15px;
            height: 15px;
          }
          .home-text051 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 80px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-bignumbertitleandicon2 {
            gap: 37px;
            display: flex;
            padding: 9px 0 0;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(115, 119, 123, 1);
            border-style: solid;
            border-width: 0.5px 0 0;
            justify-content: space-between;
          }
          .home-arrow-square-out {
            width: 24px;
            height: 24px;
          }
          .home-text053 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: Regular;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-rightcoloumn {
            gap: 10px;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
          }
          .home-successstoryimage {
            width: 735px;
            height: 735px;
          }
          .home-urban-renewal {
            width: 100%;
            height: auto;
            display: flex;
            padding: 60px 0;
            overflow: hidden;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-carasso-backgroundcolor);
          }
          .home-container09 {
            gap: 2px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .home-leftcoloumn1 {
            gap: 20px;
            width: 823px;
            height: 762px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 0 20px 20px 0;
            background-size: auto;
            justify-content: flex-end;
            background-image: url('/left-coloumn-900w.webp');
            background-repeat: no-repeat;
          }
          .home-rightcoloumn1 {
            gap: 10px;
            display: flex;
            padding: 60px 120px 60px 90px;
            align-items: center;
          }
          .home-frame1261158162 {
            gap: 70px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-text055 {
            color: var(--dl-color-carasso-primaryblack);
            width: 407px;
            height: auto;
            font-size: 50px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text056 {
            font-weight: 300;
          }
          .home-text061 {
            color: var(--dl-color-carasso-primaryblack);
            width: 407px;
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
          .home-carassobutton2 {
            gap: 12px;
            display: flex;
            padding: 0 0 12px;
            align-items: flex-start;
            border-color: rgba(42, 42, 42, 1);
            border-style: solid;
            border-width: 0 0 1px;
          }
          .home-frame1231 {
            gap: 12px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .home-arrow7-stroke3 {
            width: 8px;
            height: 7px;
          }
          .home-text063 {
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
          .home-container10 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .home-leftcoloumn2 {
            gap: 80px;
            height: 458px;
            display: flex;
            padding: 80px 0 80px 90px;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .home-links2 {
            gap: 100px;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .home-linksrow2 {
            gap: 40px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-text065 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-links3 {
            gap: 24px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-frame133 {
            gap: 24px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
          }
          .home-text067 {
            color: var(--dl-color-carasso-darkergray);
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
          .home-text069 {
            color: var(--dl-color-carasso-darkergray);
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
          .home-text071 {
            color: var(--dl-color-carasso-darkergray);
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
          .home-frame1261158158 {
            gap: 16px;
            display: flex;
            align-items: flex-start;
          }
          .home-linkedin-logo {
            width: 24px;
            height: 24px;
          }
          .home-instagram-logo {
            width: 24px;
            height: 24px;
          }
          .home-facebook-logo {
            width: 24px;
            height: 24px;
          }
          .home-linksrow21 {
            gap: 40px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-text073 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-links4 {
            gap: 24px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-text075 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text077 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text079 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text081 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-linksrow1 {
            gap: 40px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-text083 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-links5 {
            gap: 24px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-text085 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text087 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text089 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text091 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text093 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-info {
            gap: 24px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-termslinks {
            gap: 30px;
            display: flex;
            align-items: center;
          }
          .home-text095 {
            color: rgba(153, 153, 153, 1);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text097 {
            color: rgba(153, 153, 153, 1);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text099 {
            color: rgba(153, 153, 153, 1);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text101 {
            color: rgba(153, 153, 153, 1);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-frame56 {
            gap: 5px;
            display: flex;
            align-items: center;
          }
          .home-text103 {
            color: rgba(153, 153, 153, 1);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-copyright {
            width: 16px;
            height: 16px;
          }
          .home-rightcoloumn2 {
            gap: 90px;
            height: 458px;
            display: flex;
            padding: 80px 90px 80px 220px;
            position: relative;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-vector3 {
            top: 210px;
            left: 45.037109375px;
            width: 559px;
            height: 417px;
            position: absolute;
          }
          .home-carassologo {
            width: 141px;
            height: 99px;
            z-index: 1;
          }
          .home-moveo-design-credit {
            gap: 12px;
            display: flex;
            z-index: 2;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
            justify-content: flex-end;
          }
          .home-moveologo {
            gap: 5.6781768798828125px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-text105 {
            color: var(--dl-color-carasso-graytextcolor);
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-vector4 {
            width: 22px;
            height: 11px;
          }
          .home-vector5 {
            width: 45px;
            height: 8px;
          }
          @media (max-width: 1920px) {
            .home-desktop-menu {
              display: none;
            }
            .home-burger-menu {
              display: flex;
            }
          }
          @media (max-width: 1440px) {
            .home-projectsrightblock {
              display: none;
            }
          }
          @media (max-width: 1200px) {
            .home-projectsrightblock {
              display: none;
            }
            .home-left-column {
              gap: 0;
              overflow-x: scroll;
            }
          }
          @media (max-width: 991px) {
            .home-projects {
              padding-right: 40px;
            }
            .home-projectsrightblock {
              display: flex;
              align-items: flex-end;
            }
            .home-carassobutton {
              border-color: var(--dl-color-carasso-graytextcolor);
              border-width: 1px;
              border-top-width: 0px;
              border-left-width: 0px;
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-arrow7-stroke {
              align-self: center;
            }
            .home-projectsheadlineandtabs {
              width: auto;
            }
            .home-text011 {
              font-style: normal;
              font-weight: 400;
            }
            .home-selected-projects {
              padding-right: 0px;
            }
            .home-left-column {
              gap: 0;
            }
            .home-right-column {
              display: none;
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
            }
          }
          @media (max-width: 767px) {
            .home-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-burger-menu {
              align-items: center;
              justify-content: center;
            }
            .home-link1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text005 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text006 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text007 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text008 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-projects {
              padding-right: 40px;
            }
            .home-carassobutton {
              display: none;
            }
            .home-left-column {
              gap: 0;
            }
            .home-arrow-container {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .home-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-projects {
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 20px;
              padding-bottom: 0px;
            }
            .home-projectsrightblock {
              padding-top: 40px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .home-projectsheadlineandtabs {
              padding-bottom: 30px;
            }
            .home-selected-projects {
              padding-right: 0px;
            }
            .home-arrow-container {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
