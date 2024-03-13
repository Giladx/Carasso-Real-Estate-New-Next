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
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/bd438ef8-05f7-4c29-9c01-eea7ae17edea/54924954-5c3a-4ae6-9277-e76b2fdbc592?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <div className="home-header-1">
          <header data-thq="thq-navbar" className="home-navbar-interactive">
            <div className="home-search">
              <img
                id="navsearch"
                alt="image"
                src="/csearch-200h.webp"
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
                src="/cmenu-200h.webp"
                className="home-image2"
              />
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div className="home-leftcoloumn">
                <video
                  src="https://ik.imagekit.io/tosee/carassocompressed_Rzu68mstAH.mp4?updatedAt=1709743496164"
                  loop="true"
                  muted="true"
                  poster="/left-coloumn1-1400w.png"
                  preload="auto"
                  autoPlay="true"
                  playsInline="true"
                  className="home-video"
                ></video>
              </div>
              <div className="home-rightcoloumn">
                <img
                  alt="Vector3836"
                  src="/external/vector3836-9dpd.svg"
                  className="home-vector"
                />
                <div className="home-navigationbarmenuopen">
                  <img
                    alt="Search3836"
                    src="/external/search3836-iwar.svg"
                    className="home-search1"
                  />
                  <img
                    alt="logo3836"
                    src="/external/logo3836-62nj.svg"
                    className="home-logo1"
                  />
                  <div className="home-nav">
                    <div data-thq="thq-close-menu" className="home-close-menu">
                      <img
                        alt="hamburger3836"
                        src="/external/hamburger3836-cafm.svg"
                        className="home-hamburger"
                      />
                    </div>
                  </div>
                </div>
                <div className="home-navcontent">
                  <div className="home-navlinks">
                    <div className="home-frame139">
                      <img
                        alt="Arrow113836"
                        src="/external/arrow113836-s3r.svg"
                        className="home-arrow11"
                      />
                      <span className="home-text005">
                        <span>דף הבית</span>
                      </span>
                    </div>
                    <div className="home-frame138">
                      <span className="home-text007">
                        <span>הסיפור שלנו</span>
                      </span>
                    </div>
                    <div className="home-frame137">
                      <img
                        alt="Vector4783"
                        src="/external/vector4783-cfjx.svg"
                        className="home-vector1"
                      />
                      <span className="home-text009">
                        <span>פרויקטים</span>
                      </span>
                    </div>
                    <div className="home-frame140">
                      <span className="home-text011">
                        <span>התחדשות עירונית</span>
                      </span>
                    </div>
                    <div className="home-frame141">
                      <span className="home-text013">
                        <span>חדשות ועידכונים</span>
                      </span>
                    </div>
                    <div className="home-frame142">
                      <img
                        alt="Vector5058"
                        src="/external/vector5058-kcx.svg"
                        className="home-vector2"
                      />
                      <span className="home-text015">
                        <span>יצירת קשר</span>
                      </span>
                    </div>
                  </div>
                  <div className="home-bottomdetails">
                    <div className="home-personalareacontainer">
                      <div className="home-personalarea">
                        <span className="home-text017">
                          <span>אזור אישי</span>
                        </span>
                        <img
                          alt="UserCircle3836"
                          src="/external/usercircle3836-orxy.svg"
                          className="home-user-circle"
                        />
                      </div>
                    </div>
                    <div className="home-contactdetails">
                      <div className="home-frame123">
                        <img
                          alt="InstagramLogo3836"
                          src="/external/instagramlogo3836-7zpr.svg"
                          className="home-instagram-logo"
                        />
                        <img
                          alt="LinkedinLogo3836"
                          src="/external/linkedinlogo3836-7hi.svg"
                          className="home-linkedin-logo"
                        />
                        <img
                          alt="FacebookLogo3836"
                          src="/external/facebooklogo3836-6cf9.svg"
                          className="home-facebook-logo"
                        />
                      </div>
                      <div className="home-frame133">
                        <span className="home-text019">
                          <span>+972 050 123 1234</span>
                        </span>
                        <span className="home-text021">
                          <span>ריב״ל 24, תל אביב-יפו</span>
                        </span>
                        <span className="home-text023">
                          <span>info@carasso-nadlan.com</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
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
          <video
            src="https://ik.imagekit.io/tosee/carassocompressed_Rzu68mstAH.mp4?updatedAt=1709743496164"
            loop="true"
            muted="true"
            poster="/carasso-fbf_00001-1500w.jpg"
            preload="auto"
            autoPlay="true"
            playsInline="true"
            className="home-video1"
          ></video>
        </div>
        <section className="home-projects">
          <div className="home-projectsrightblock">
            <button className="home-carassobutton">
              <img
                alt="Arrow7Stroke3882"
                src="/external/arrow7stroke3882-sj2n1.svg"
                className="home-arrow7-stroke"
              />
              <span className="home-text025">
                <span>פרויקטים למגורים</span>
              </span>
            </button>
            <div className="home-projectsheadlineandtabs">
              <span className="home-text027">
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
                  <span className="home-text036">
                    <span>משרדים ותעסוקה</span>
                  </span>
                </div>
                <div className="home-frame69">
                  <span className="home-text038">
                    <span>מרכזים מסחריים</span>
                  </span>
                </div>
                <div className="home-frame">
                  <span className="home-text040">
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
              <Projectcard1
                imageSrc="/elipse-image.png"
                rootClassName="projectcard1-root-class-name"
              ></Projectcard1>
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
                  <span className="home-text042">
                    <span>פרויקטים נבחרים</span>
                    <br></br>
                  </span>
                  <div className="home-projectstabs1">
                    <span className="home-text045">
                      <span>מגורים</span>
                    </span>
                    <img
                      alt="Vector543708"
                      src="/external/vector543708-5chc1.svg"
                      className="home-vector54"
                    />
                    <span className="home-text047">
                      <span>מרכזים מסחריים</span>
                    </span>
                    <img
                      alt="Vector553708"
                      src="/external/vector553708-3m2r1.svg"
                      className="home-vector55"
                    />
                    <span className="home-text049">משרדים ותעסוקה</span>
                  </div>
                </div>
                <div className="home-container05">
                  <button type="button" className="home-buttontextarrow">
                    <img
                      alt="Arrow7Stroke3708"
                      src="/external/arrow7stroke3708-fasf1.svg"
                      className="home-arrow7-stroke1"
                    />
                    <span className="home-text050">לפרויקטים נוספים</span>
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
            <div className="home-leftcoloumn1">
              <div className="home-successcopycontent">
                <div className="home-successnumbercontent">
                  <div className="home-bignumberscontent">
                    <span className="home-text051">
                      <span className="home-text052">
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
                              className="home-vector3"
                            />
                            <span className="home-text057">
                              <span>4,462</span>
                            </span>
                          </div>
                          <div className="home-bignumbertitleandicon">
                            <img
                              alt="UsersThree5472"
                              src="/external/usersthree5472-lqi6.svg"
                              className="home-users-three"
                            />
                            <span className="home-text059">
                              <span>בעלי דירות שותפים</span>
                            </span>
                          </div>
                        </div>
                        <div className="home-bignumberblock1">
                          <div className="home-numbertext1">
                            <img
                              alt="Vector5472"
                              src="/external/vector5472-le6b.svg"
                              className="home-vector4"
                            />
                            <span className="home-text061">
                              <span>54</span>
                            </span>
                          </div>
                          <div className="home-bignumbertitleandicon1">
                            <img
                              alt="buildingsicon5472"
                              src="/external/buildingsicon5472-xnx4.svg"
                              className="home-buildingsicon"
                            />
                            <span className="home-text063">
                              <span>פרויקטים למגורים</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="home-numberrowcontainer1">
                        <div className="home-bignumberblock2">
                          <button className="home-carassobutton1">
                            <div className="home-frame1231">
                              <img
                                alt="Arrow7Stroke5472"
                                src="/external/arrow7stroke5472-k5fk.svg"
                                className="home-arrow7-stroke2"
                              />
                              <span className="home-text065">
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
                              className="home-vector5"
                            />
                            <span className="home-text067">
                              <span>11,110</span>
                            </span>
                          </div>
                          <div className="home-bignumbertitleandicon2">
                            <img
                              alt="ArrowSquareOut5472"
                              src="/external/arrowsquareout5472-jjvr.svg"
                              className="home-arrow-square-out"
                            />
                            <span className="home-text069">
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
            <div className="home-rightcoloumn1">
              <div className="home-container09">
                <div className="home-square"></div>
                <div className="home-circle"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-urban-renewal">
          <div className="home-container10">
            <div className="home-leftcoloumn2"></div>
            <div className="home-rightcoloumn2">
              <div className="home-frame1261158162">
                <span className="home-text071">
                  <span className="home-text072">
                    <span>השותפים שלך</span>
                    <br></br>
                    <span></span>
                  </span>
                  <span>להתחדשות עירונית</span>
                </span>
                <span className="home-text077">
                  <span>
                    אנחנו מחלוצי ההתחדשות העירונית בארץ, עם מעל ל-12 שנה של
                    ניסיון בתחום. אנחנו פעילים בהתחדשות שכונות ופרויקטים רחבי
                    היקף של פינוי בינוי והקמת פרויקטי בוטיק מתוקף תמ״א 38/2
                    ומובילים במדדים היוקרתיים Dun’s 100 של חברת דן אנד ברדסטריט,
                    BDI CODE ומדד ההתחדשות העירונית של מדלן.
                  </span>
                </span>
                <button className="home-carassobutton2">
                  <div className="home-frame1232">
                    <img
                      alt="Arrow7Stroke5472"
                      src="/external/arrow7stroke5472-dn3f.svg"
                      className="home-arrow7-stroke3"
                    />
                    <span className="home-text079">
                      <span>התחדשות עירונית</span>
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="home-container11">
          <div className="home-leftcoloumn3">
            <div className="home-links1">
              <div className="home-linksrow2">
                <span className="home-text081">
                  <span>פנו אלינו</span>
                </span>
                <div className="home-links2">
                  <div className="home-frame1331">
                    <span className="home-text083">
                      <span>+972 050 123 1234</span>
                    </span>
                    <span className="home-text085">
                      <span>ריב״ל 24, תל אביב-יפו</span>
                    </span>
                    <span className="home-text087">
                      <span>info@carasso-nadlan.com</span>
                    </span>
                  </div>
                  <div className="home-frame1261158158">
                    <img
                      alt="LinkedinLogo5472"
                      src="/external/linkedinlogo5472-wmth.svg"
                      className="home-linkedin-logo1"
                    />
                    <img
                      alt="InstagramLogo5472"
                      src="/external/instagramlogo5472-0y4k.svg"
                      className="home-instagram-logo1"
                    />
                    <img
                      alt="FacebookLogo5472"
                      src="/external/facebooklogo5472-il2.svg"
                      className="home-facebook-logo1"
                    />
                  </div>
                </div>
              </div>
              <div className="home-linksrow21">
                <span className="home-text089">
                  <span>פרויקטים</span>
                </span>
                <div className="home-links3">
                  <span className="home-text091">
                    <span>פרויקטים למגורים</span>
                  </span>
                  <span className="home-text093">
                    <span>סיפורי הצלחה</span>
                  </span>
                  <span className="home-text095">
                    <span>מרכזי קניות</span>
                  </span>
                  <span className="home-text097">
                    <span>משרדים והייטק</span>
                  </span>
                </div>
              </div>
              <div className="home-linksrow1">
                <span className="home-text099">
                  <span>על החברה</span>
                </span>
                <div className="home-links4">
                  <span className="home-text101">
                    <span>דף הבית</span>
                  </span>
                  <span className="home-text103">
                    <span>הסיפור שלנו</span>
                  </span>
                  <span className="home-text105">
                    <span>התחדשות עירונית</span>
                  </span>
                  <span className="home-text107">
                    <span>חדשות ועידכונים</span>
                  </span>
                  <span className="home-text109">
                    <span>יצירת קשר</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="home-info">
              <div className="home-termslinks">
                <span className="home-text111">
                  <span>הצהרת נגישות</span>
                </span>
                <span className="home-text113">
                  <span>איסוף נתונים</span>
                </span>
                <span className="home-text115">
                  <span>מדיניות פרטיות</span>
                </span>
                <span className="home-text117">
                  <span>אחריות תאגידית</span>
                </span>
                <div className="home-frame56">
                  <span className="home-text119">
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
          <div className="home-rightcoloumn3">
            <img
              alt="Vector5472"
              src="/external/vector5472-3ap.svg"
              className="home-vector6"
            />
            <img
              alt="Carassologo5472"
              src="/external/carassologo5472-4son.svg"
              className="home-carassologo"
            />
            <div className="home-moveo-design-credit">
              <div className="home-moveologo">
                <span className="home-text121">
                  <span>Designed by</span>
                </span>
                <img
                  alt="Vector5472"
                  src="/external/vector5472-3cu.svg"
                  className="home-vector7"
                />
                <img
                  alt="Vector5472"
                  src="/external/vector5472-py5p.svg"
                  className="home-vector8"
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
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            z-index: 999;
            position: absolute;
            transform: translateX(100%);
            transition: 0.5s;
            padding-right: var(--dl-space-space-sixunits);
            flex-direction: row;
            justify-content: space-between;
            background-color: var(--dl-color-carasso-plainwhite);
          }
          .home-leftcoloumn {
            gap: 10px;
            height: auto;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
          }
          .home-video {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-rightcoloumn {
            gap: 60px;
            height: 100%;
            display: flex;
            padding: 20px 0 40px 50px;
            align-self: flex-end;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .home-vector {
            right: -30px;
            width: 529px;
            bottom: 0px;
            height: 595px;
            position: absolute;
          }
          .home-navigationbarmenuopen {
            gap: 120px;
            display: flex;
            padding: 20px 0;
            z-index: 1;
            align-self: flex-end;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(187, 188, 191, 1);
            border-style: solid;
            border-width: 0 0 1px;
          }
          .home-search1 {
            width: 36px;
            cursor: pointer;
            height: 36px;
          }
          .home-logo1 {
            width: 80px;
            height: 40px;
          }
          .home-nav {
            width: 100%;
            display: flex;
            align-self: flex-end;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-hamburger {
            width: 36px;
            cursor: pointer;
            height: 36px;
          }
          .home-navcontent {
            gap: 80px;
            display: flex;
            z-index: 2;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-navlinks {
            gap: 32px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-frame139 {
            gap: 16px;
            color: var(--dl-color-carasso-graytextcolor);
            cursor: pointer;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .home-frame139:hover {
            color: var(--dl-color-carasso-primaryblack);
          }
          .home-arrow11 {
            width: 20px;
          }
          .home-text005 {
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
          .home-frame138 {
            gap: 16px;
            color: var(--dl-color-carasso-graytextcolor);
            cursor: pointer;
            display: flex;
            align-self: stretch;
            transition: 0.3s;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .home-frame138:hover {
            color: var(--dl-color-carasso-primaryblack);
          }
          .home-text007 {
            height: auto;
            font-size: 32px;
            font-style: Light;
            text-align: right;
            transition: 0.3s;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }

          .home-frame137 {
            gap: 16px;
            cursor: pointer;
            display: flex;
            align-self: stretch;
            transition: 0.3s;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .home-frame137:hover {
            color: var(--dl-color-carasso-primaryblack);
          }
          .home-vector1 {
            width: 10px;
            transition: 0.3s;
          }
          .home-vector1:hover {
            color: var(--dl-color-carasso-primaryblack);
          }
          .home-text009 {
            color: var(--dl-color-carasso-graytextcolor);
            height: auto;
            font-size: 32px;
            font-style: Light;
            text-align: right;
            transition: 0.3s;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text009:hover {
            color: var(--dl-color-carasso-primaryblack);
          }
          .home-frame140 {
            gap: 16px;
            cursor: pointer;
            display: flex;
            align-self: stretch;
            transition: 0.3s;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .home-frame140:hover {
            color: var(--dl-color-carasso-primaryblack);
          }
          .home-text011 {
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
          .home-text011:hover {
            color: var(--dl-color-carasso-primaryblack);
          }
          .home-frame141 {
            gap: 16px;
            cursor: pointer;
            display: flex;
            align-self: stretch;
            transition: 0.3s;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .home-frame141:hover {
            color: var(--dl-color-carasso-primaryblack);
          }
          .home-text013 {
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
          .home-text013:hover {
            color: var(--dl-color-carasso-primaryblack);
          }
          .home-frame142 {
            gap: 16px;
            color: var(--dl-color-carasso-graytextcolor);
            cursor: pointer;
            display: flex;
            align-self: stretch;
            transition: 0.3s;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .home-frame142:hover {
            color: var(--dl-color-carasso-primaryblack);
          }
          .home-vector2 {
            width: 10px;
          }
          .home-text015 {
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
          .home-bottomdetails {
            gap: 25px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-personalareacontainer {
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
          .home-personalarea {
            gap: 6px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .home-text017 {
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
          .home-user-circle {
            width: 18px;
            height: 18px;
          }
          .home-contactdetails {
            gap: 176px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .home-frame123 {
            gap: 8px;
            height: 76px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .home-instagram-logo {
            width: 20px;
            height: 20px;
          }
          .home-linkedin-logo {
            width: 20px;
            height: 20px;
          }
          .home-facebook-logo {
            width: 20px;
            height: 20px;
          }
          .home-frame133 {
            gap: 18px;
            height: 76px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .home-text019 {
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
          .home-text021 {
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
          .home-text023 {
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
            display: none;
            object-fit: cover;
          }
          .home-video1 {
            width: 100%;
            height: auto;
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
          .home-text025 {
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
          .home-text027 {
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
          .home-text036 {
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
          .home-text038 {
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
          .home-text040 {
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
          .home-text042 {
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
          .home-text045 {
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
          .home-text045:hover {
            color: var(--dl-color-carasso-primaryblack);
          }
          .home-text045:active {
            color: var(--dl-color-carasso-primaryblack);
          }
          .home-vector54 {
            width: 177px;
            height: 1px;
            align-self: stretch;
          }
          .home-text047 {
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
          .home-text047:hover {
            color: var(--dl-color-carasso-primaryblack);
          }
          .home-text047:active {
            color: var(--dl-color-carasso-primaryblack);
          }
          .home-vector55 {
            width: 177px;
            height: 1px;
            align-self: stretch;
          }
          .home-text049 {
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
          .home-text049:hover {
            color: var(--dl-color-carasso-primaryblack);
          }
          .home-text049:active {
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
          .home-text050 {
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
            overflow: visible;
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
          .home-leftcoloumn1 {
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
          .home-text051 {
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
          .home-text052 {
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
          .home-vector3 {
            width: 15px;
            height: 15px;
          }
          .home-text057 {
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
          .home-text059 {
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
          .home-vector4 {
            width: 15px;
            height: 15px;
          }
          .home-text061 {
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
          .home-text063 {
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
          .home-frame1231 {
            gap: 12px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .home-arrow7-stroke2 {
            width: 8px;
            height: 7px;
          }
          .home-text065 {
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
          .home-vector5 {
            width: 15px;
            height: 15px;
          }
          .home-text067 {
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
          .home-text069 {
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
          .home-rightcoloumn1 {
            gap: 10px;
            height: 735px;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
          }
          .home-container09 {
            flex: 0 0 auto;
            width: 735px;
            height: 735px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            mask-composite: subtract;
            background-size: cover;
          }
          .home-square {
            top: -100px;
            flex: 0 0 auto;
            left: 50px;
            width: 538px;
            height: 538px;
            display: flex;
            z-index: 2;
            overflow: hidden;
            position: absolute;
            transform: rotate(30deg);
            align-items: flex-start;
            border-color: var(--dl-color-carasso-blue);
            border-width: 2px;
            border-radius: 16.8px;
            flex-direction: column;
            background-size: cover;
          }
          .home-circle {
            top: 85px;
            flex: 0 0 auto;
            width: 701px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 701px;
            display: flex;
            overflow: revert;
            position: absolute;
            align-items: flex-start;
            border-color: var(--dl-color-carasso-blue);
            border-style: solid;
            border-width: 2px;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-clip: padding-box;
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
          .home-container10 {
            gap: 2px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .home-leftcoloumn2 {
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
          .home-rightcoloumn2 {
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
          .home-text071 {
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
          .home-text072 {
            font-weight: 300;
          }
          .home-text077 {
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
          .home-frame1232 {
            gap: 12px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .home-arrow7-stroke3 {
            width: 8px;
            height: 7px;
          }
          .home-text079 {
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
          .home-container11 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .home-leftcoloumn3 {
            gap: 80px;
            height: 458px;
            display: flex;
            padding: 80px 0 80px 90px;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .home-links1 {
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
          .home-text081 {
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
          .home-links2 {
            gap: 24px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-frame1331 {
            gap: 24px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
          }
          .home-text083 {
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
          .home-text085 {
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
          .home-text087 {
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
          .home-linkedin-logo1 {
            width: 24px;
            height: 24px;
          }
          .home-instagram-logo1 {
            width: 24px;
            height: 24px;
          }
          .home-facebook-logo1 {
            width: 24px;
            height: 24px;
          }
          .home-linksrow21 {
            gap: 40px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-text089 {
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
          .home-text095 {
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
          .home-text097 {
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
          .home-text099 {
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
          .home-text101 {
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
          .home-text103 {
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
          .home-text105 {
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
          .home-text107 {
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
          .home-text109 {
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
          .home-text111 {
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
          .home-text113 {
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
          .home-text115 {
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
          .home-text117 {
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
          .home-text119 {
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
          .home-rightcoloumn3 {
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
          .home-vector6 {
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
          .home-text121 {
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
          .home-vector7 {
            width: 22px;
            height: 11px;
          }
          .home-vector8 {
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
            .home-text027 {
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
