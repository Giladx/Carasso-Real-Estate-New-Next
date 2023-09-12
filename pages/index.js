import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Projectcard from '../components/projectcard'

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
        <section className="home-projects">
          <div className="home-container1">
            <div id="slider" className="draggable">
              <div className="home-div">
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
  var item = document.getElementById("slider");
  window.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    item.scrollLeft -= evt.deltaY * 12;
  });
// Bottom Arrows Navigation
function pullRight() {
  window.scrollBy(420, 0);
}

function pushLeft() {
  window.scrollBy(-420, 0);
}
</script>
`}
                ></Script>
              </div>
              <Projectcard></Projectcard>
              <Projectcard></Projectcard>
              <Projectcard></Projectcard>
              <Projectcard></Projectcard>
              <Projectcard></Projectcard>
              <Projectcard></Projectcard>
              <Projectcard></Projectcard>
              <Projectcard></Projectcard>
              <Projectcard></Projectcard>
              <Projectcard></Projectcard>
              <Projectcard></Projectcard>
              <Projectcard></Projectcard>
              <Projectcard></Projectcard>
              <Projectcard></Projectcard>
              <Projectcard></Projectcard>
            </div>
            <div className="home-rightcoloumn">
              <div className="home-projectsrightblock">
                <div className="home-projectsheadlineandtabs">
                  <span className="home-text">
                    <span>פרויקטים נבחרים</span>
                    <br></br>
                  </span>
                  <div className="home-projectstabs">
                    <a
                      href="https://#1"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-text03"
                    >
                      <span>מגורים</span>
                    </a>
                    <img
                      alt="Vector543708"
                      src="/external/vector543708-5chc.svg"
                      className="home-vector54"
                    />
                    <a
                      href="https://#2"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-text05"
                    >
                      <span>מרכזים מסחריים</span>
                    </a>
                    <img
                      alt="Vector553708"
                      src="/external/vector553708-3m2r.svg"
                      className="home-vector55"
                    />
                    <a
                      href="https://#3"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-text07"
                    >
                      <span>משרדים ותעסוקה</span>
                    </a>
                  </div>
                </div>
                <button className="home-carassobutton">
                  <button className="home-buttontextarrow">
                    <img
                      alt="Arrow7Stroke3708"
                      src="/external/arrow7stroke3708-fasf.svg"
                      className="home-arrow7stroke"
                    />
                    <span className="home-text09">לפרויקטים נוספים</span>
                  </button>
                  <button className="home-buttongrayline"></button>
                </button>
              </div>
            </div>
          </div>
          <div className="home-arrow-container">
            <div className="home-arrows">
              <img
                alt="arrowforward3708"
                src="/external/arrowforward3708-k3sa.svg"
                onclick="pushLeft()"
                className="home-arrowforward"
              />
              <img
                alt="arrowbackward3708"
                src="/external/arrowbackward3708-8d3e.svg"
                onclick="pullRight()"
                className="home-arrowbackward"
              />
            </div>
          </div>
        </section>
        <div className="home-success-story">
          <div className="home-container2">
            <div className="home-leftcoloumn1">
              <div className="home-successcopycontent">
                <div className="home-successnumbercontent">
                  <div className="home-bignumberscontent">
                    <span className="home-text10">
                      <span className="home-text11">
                        <span>ניסיון מצטבר</span>
                        <br></br>
                        <span></span>
                      </span>
                      <span>לאורך שנות פעילותנו</span>
                    </span>
                    <div className="home-bignumbers">
                      <div className="home-numberrowcontainer">
                        <div className="home-bignumberblock">
                          <div className="home-bignumbertitleandicon">
                            <img
                              alt="UsersThree3606"
                              src="/external/usersthree3606-hgb.svg"
                              className="home-users-three"
                            />
                            <span className="home-text16">
                              <span>בעלי דירות שותפים</span>
                            </span>
                          </div>
                          <div className="home-numbertext">
                            <img
                              alt="Vector3606"
                              src="/external/vector3606-jflg.svg"
                              className="home-vector"
                            />
                            <span className="home-text18">
                              <span>4,462</span>
                            </span>
                          </div>
                        </div>
                        <div className="home-bignumberblock1">
                          <div className="home-bignumbertitleandicon1">
                            <img
                              alt="buildingsicon3606"
                              src="/external/buildingsicon3606-kkd1.svg"
                              className="home-buildingsicon"
                            />
                            <span className="home-text20">
                              <span>פרויקטים למגורים</span>
                            </span>
                          </div>
                          <div className="home-numbertext1">
                            <img
                              alt="Vector3606"
                              src="/external/vector3606-a79p.svg"
                              className="home-vector1"
                            />
                            <span className="home-text22">
                              <span>54</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="home-numberrowcontainer1">
                        <div className="home-bignumberblock2">
                          <button className="home-carassobutton1">
                            <button className="home-buttontextarrow1">
                              <img
                                alt="Arrow7Stroke3606"
                                src="/external/arrow7stroke3606-7p48.svg"
                                className="home-arrow7stroke1"
                              />
                              <span className="home-text24">
                                <span>סיפורי הצלחה</span>
                              </span>
                            </button>
                            <button className="home-buttongrayline1"></button>
                          </button>
                        </div>
                        <div className="home-bignumberblock3">
                          <div className="home-bignumbertitleandicon2">
                            <img
                              alt="ArrowSquareOut3606"
                              src="/external/arrowsquareout3606-ryvz8.svg"
                              className="home-arrow-square-out"
                            />
                            <span className="home-text26">
                              <span>דירות לשיווק</span>
                            </span>
                          </div>
                          <div className="home-numbertext2">
                            <img
                              alt="Vector3606"
                              src="/external/vector3606-icrh.svg"
                              className="home-vector2"
                            />
                            <span className="home-text28">1 1,110</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    alt="biglinedecorativeline3606"
                    src="/external/biglinedecorativeline3606-gft8.svg"
                    className="home-biglinedecorativeline"
                  />
                </div>
              </div>
            </div>
            <div className="home-rightcoloumn1">
              <img
                alt="successstoryimage3606"
                src="/external/successstoryimage3606-aqc9.svg"
                className="home-successstoryimage"
              />
            </div>
          </div>
        </div>
        <div className="home-urban-renewal">
          <div className="home-container3">
            <div className="home-leftcoloumn2">
              <img
                alt="circle3606"
                src="/external/circle3606-ha99.svg"
                className="home-circle"
              />
              <img
                alt="manontherightonhover3606"
                src="/external/manontherightonhover3606-807n.svg"
                className="home-manontherightonhover"
              />
            </div>
            <div className="home-rightcoloumn2">
              <div className="home-urbanrenewalcontentborder">
                <div className="home-urbanrenewalcontent">
                  <div className="home-urbanrenewalheadingsummary">
                    <span className="home-text29">
                      <span>
                        <span>השותפים שלך</span>
                        <br></br>
                        <span></span>
                      </span>
                      <span>להתחדשות עירונית</span>
                    </span>
                    <span className="home-text35">
                      <span>
                        קרסו היא מהחברות המובילות בהתחדשות עירונית (פינוי בינוי,
                        תמ&quot;א 38) ומשתתפת במדדים היוקרתיים דן אנד ברדסטרייט,
                        CODE BDI ומדד ההתחדשות העירונית, המגדירים סטנדרטים
                        מובחרים לאיכויות מוצר, שירות וניסיון.
                      </span>
                    </span>
                  </div>
                  <button className="home-carassobutton2">
                    <button className="home-buttontextarrow2">
                      <img
                        alt="Arrow7Stroke3606"
                        src="/external/arrow7stroke3606-z8r.svg"
                        className="home-arrow7stroke2"
                      />
                      <span className="home-text37">
                        <span>התחדשות עירונית</span>
                      </span>
                    </button>
                    <button className="home-buttongrayline2"></button>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-footer">
          <div className="home-container4">
            <div className="home-leftcoloumn3">
              <div className="home-links">
                <div className="home-footersocialmedialinks">
                  <img
                    alt="InstagramLogo3606"
                    src="/external/instagramlogo3606-i2q.svg"
                    className="home-instagram-logo"
                  />
                  <img
                    alt="LinkedinLogo3606"
                    src="/external/linkedinlogo3606-0emf.svg"
                    className="home-linkedin-logo"
                  />
                  <img
                    alt="FacebookLogo3606"
                    src="/external/facebooklogo3606-o0j.svg"
                    className="home-facebook-logo"
                  />
                </div>
                <div className="home-linksrow2">
                  <span className="home-text39">
                    <span>פרויקטים</span>
                  </span>
                  <div className="home-links1">
                    <span className="home-text41">
                      <span>פרויקטים למגורים</span>
                    </span>
                    <span className="home-text43">
                      <span>סיפורי הצלחה</span>
                    </span>
                    <span className="home-text45">
                      <span>מרכזים מסחריים</span>
                    </span>
                    <span className="home-text47">
                      <span>משרדים ותעסוקה</span>
                    </span>
                  </div>
                </div>
                <div className="home-linksrow1">
                  <span className="home-text49">
                    <span>על החברה</span>
                  </span>
                  <div className="home-links2">
                    <span className="home-text51">
                      <span>דף הבית</span>
                    </span>
                    <span className="home-text53">
                      <span>אודות</span>
                    </span>
                    <span className="home-text55">
                      <span>התחדשות עירונית</span>
                    </span>
                    <span className="home-text57">
                      <span>חדשות ועידכונים</span>
                    </span>
                    <span className="home-text59">
                      <span>טופס יצירת קשר</span>
                    </span>
                    <span className="home-text61">
                      <span>אזור אישי</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="home-info">
                <div className="home-info1">
                  <span className="home-text63">
                    <span>ריב״ל 24, תל אביב</span>
                  </span>
                  <span className="home-text65">
                    <span>+972 050 123 1234</span>
                  </span>
                  <span className="home-text67">
                    <span>info@carasso.co.il</span>
                  </span>
                </div>
                <div className="home-termslinks">
                  <div className="home-frame56">
                    <span className="home-text69">
                      <span>2023 קרסו</span>
                    </span>
                    <img
                      alt="Copyright3606"
                      src="/external/copyright3606-eax.svg"
                      className="home-copyright"
                    />
                  </div>
                  <span className="home-text71">
                    <span>הצהרת נגישות</span>
                  </span>
                  <span className="home-text73">
                    <span>איסוף נתונים</span>
                  </span>
                  <span className="home-text75">
                    <span>מדיניות פרטיות</span>
                  </span>
                  <span className="home-text77">
                    <span>אחריות תאגידית</span>
                  </span>
                </div>
              </div>
              <img
                alt="Fig123606"
                src="/external/fig123606-278.svg"
                className="home-fig12"
              />
            </div>
            <div className="home-rightcoloumn3">
              <div className="home-contactform">
                <div className="home-contact">
                  <span className="home-text79">
                    <span>יצירת קשר</span>
                  </span>
                  <div className="home-frame71">
                    <div className="home-fullnamefield">
                      <div className="home-fullname">
                        <span className="home-text81">
                          <span>מספר טלפון*</span>
                        </span>
                        <img
                          alt="Phone3606"
                          src="/external/phone3606-j8zd.svg"
                          className="home-phone"
                        />
                      </div>
                    </div>
                    <div className="home-fullnamefield1">
                      <div className="home-fullname1">
                        <span className="home-text83">
                          <span>שם מלא*</span>
                        </span>
                        <img
                          alt="UserCircle3606"
                          src="/external/usercircle3606-8dbo.svg"
                          className="home-user-circle"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home-subject">
                  <span className="home-text85">
                    <span>בחר באיזה נושא*</span>
                  </span>
                  <div className="home-projecttags">
                    <div className="home-frame17">
                      <span className="home-text87">
                        <span>אחר</span>
                      </span>
                    </div>
                    <div className="home-frame19">
                      <span className="home-text89">
                        <span>משרדים ותעסוקה</span>
                      </span>
                    </div>
                    <div className="home-frame18">
                      <span className="home-text91">
                        <span>התחדשות עירונית</span>
                      </span>
                    </div>
                    <div className="home-frame16">
                      <span className="home-text93">
                        <span>מרכזים מסחריים</span>
                      </span>
                    </div>
                    <div className="home-frame15">
                      <span className="home-text95">
                        <span>מגורים</span>
                      </span>
                    </div>
                  </div>
                </div>
                <button className="home-carassobutton3">
                  <button className="home-buttontextarrow3">
                    <img
                      alt="Arrow7Stroke3606"
                      src="/external/arrow7stroke3606-nkv4.svg"
                      className="home-arrow7stroke3"
                    />
                    <span className="home-text97">
                      <span>שלח</span>
                    </span>
                  </button>
                  <button className="home-buttongrayline3"></button>
                </button>
              </div>
              <img
                alt="Frame723606"
                src="/external/frame723606-011l.svg"
                className="home-frame72"
              />
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
          .home-projects {
            width: 100%;
            height: auto;
            display: flex;
            padding: 80px 0;
            overflow: hidden;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-carasso-backgroundcolor);
          }
          .home-container1 {
            gap: 2px;
            display: flex;
            padding: 0 90px 0 0;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .home-div {
            display: contents;
          }
          .home-rightcoloumn {
            gap: 10px;
            display: flex;
            padding: 0 0 0 90px;
            align-items: flex-start;
          }
          .home-projectsrightblock {
            gap: 160px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-projectsheadlineandtabs {
            gap: 95px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-text {
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
          .home-projectstabs {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-text03 {
            color: rgba(187, 189, 191, 1);
            cursor: pointer;
            height: auto;
            font-size: 18px;
            font-style: DemiBold;
            text-align: right;
            transition: 0.3s;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text03:hover {
            color: var(--dl-color-carasso-primaryblack);
          }
          .home-text03:active {
            color: var(--dl-color-carasso-primaryblack);
          }
          .home-vector54 {
            width: 177px;
            height: 1px;
            align-self: stretch;
          }
          .home-text05 {
            color: rgba(187, 189, 191, 1);
            cursor: pointer;
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            transition: 0.3s;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text05:hover {
            color: var(--dl-color-carasso-primaryblack);
          }
          .home-text05:active {
            color: var(--dl-color-carasso-primaryblack);
          }
          .home-vector55 {
            width: 177px;
            height: 1px;
            align-self: stretch;
          }
          .home-text07 {
            color: rgba(187, 189, 191, 1);
            cursor: pointer;
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            transition: 0.3s;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text07:hover {
            color: var(--dl-color-carasso-primaryblack);
          }
          .home-text07:active {
            color: var(--dl-color-carasso-primaryblack);
          }
          .home-carassobutton {
            gap: 12px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-buttontextarrow {
            gap: 8px;
            cursor: pointer;
            display: flex;
            align-items: center;
          }
          .home-arrow7stroke {
            width: 8px;
            height: 7px;
          }
          .home-text09 {
            color: var(--dl-color-carasso-primaryblack);
            cursor: pointer;
            height: auto;
            font-size: 18px;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-buttongrayline {
            gap: 10px;
            height: 1px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(187, 187, 187, 1);
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
          .home-arrowforward {
            width: 39px;
            height: 27px;
          }
          .home-arrowbackward {
            width: 39px;
            height: 27px;
          }
          .home-success-story {
            width: 100%;
            height: auto;
            display: none;
            overflow: hidden;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-carasso-lightblue);
          }
          .home-container2 {
            gap: 32px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .home-leftcoloumn1 {
            display: flex;
            padding: 0 70px 20px 150px;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            justify-content: flex-end;
          }
          .home-successcopycontent {
            gap: 10px;
            width: 500px;
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
          .home-text10 {
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
          .home-text11 {
            font-weight: 300;
          }
          .home-bignumbers {
            gap: 60px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-numberrowcontainer {
            gap: 50px;
            width: 480px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-bignumberblock {
            gap: 30px;
            width: 215px;
            display: flex;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .home-bignumbertitleandicon {
            gap: 37px;
            display: flex;
            padding: 0 0 9px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(115, 119, 123, 1);
            border-style: solid;
            border-width: 0 0 0.5px;
            justify-content: space-between;
          }
          .home-users-three {
            width: 24px;
            height: 24px;
          }
          .home-text16 {
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
          .home-numbertext {
            gap: 20px;
            height: auto;
            display: flex;
            align-items: flex-end;
          }
          .home-vector {
            width: 15px;
            height: 15px;
          }
          .home-text18 {
            color: var(--dl-color-carasso-primaryblack);
            width: var(--dl-size-size-xlarge);
            height: 80px;
            font-size: 80px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-bignumberblock1 {
            gap: 30px;
            width: 215px;
            display: flex;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .home-bignumbertitleandicon1 {
            gap: 37px;
            display: flex;
            padding: 0 0 9px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(115, 119, 123, 1);
            border-style: solid;
            border-width: 0 0 0.5px;
            justify-content: space-between;
          }
          .home-buildingsicon {
            width: 24px;
            height: 24px;
          }
          .home-text20 {
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
          .home-numbertext1 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
          }
          .home-vector1 {
            width: 15px;
            height: 15px;
          }
          .home-text22 {
            color: var(--dl-color-carasso-primaryblack);
            height: 70px;
            font-size: 80px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-numberrowcontainer1 {
            gap: 50px;
            width: 480px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-bignumberblock2 {
            gap: 30px;
            width: 50%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-end;
          }
          .home-carassobutton1 {
            gap: 12px;
            height: 24px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .home-buttontextarrow1 {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .home-arrow7stroke1 {
            width: 8px;
            height: 7px;
          }
          .home-text24 {
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
          .home-buttongrayline1 {
            gap: 10px;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-carasso-darkergray);
          }
          .home-bignumberblock3 {
            gap: 30px;
            width: auto;
            display: flex;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .home-bignumbertitleandicon2 {
            gap: 37px;
            display: flex;
            padding: 0 0 9px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(115, 119, 123, 1);
            border-style: solid;
            border-width: 0 0 0.5px;
            justify-content: space-between;
          }
          .home-arrow-square-out {
            width: 24px;
            height: 24px;
          }
          .home-text26 {
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
          .home-numbertext2 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
          }
          .home-vector2 {
            width: 15px;
            height: 15px;
          }
          .home-text28 {
            color: var(--dl-color-carasso-primaryblack);
            height: 80px;
            font-size: 80px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 140%;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-biglinedecorativeline {
            top: 410px;
            left: -85px;
            right: 200px;
            width: 438px;
            bottom: 80px;
            height: 177px;
            z-index: 1;
            position: absolute;
          }
          .home-rightcoloumn1 {
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
            display: none;
            padding: 60px 90px 60px 0;
            overflow: hidden;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-carasso-backgroundcolor);
          }
          .home-container3 {
            gap: 2px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .home-leftcoloumn2 {
            gap: 20px;
            width: 100%;
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            border-radius: 0 20px 20px 0;
            background-size: cover;
            justify-content: flex-end;
            background-image: url('/b68bc570ecd2e9513a6cd423b62a80ef.jpeg-1500w.jpeg');
          }
          .home-circle {
            top: 218px;
            left: -124px;
            width: 501px;
            height: 501px;
            position: absolute;
          }
          .home-manontherightonhover {
            top: 242px;
            right: 16px;
            width: 192px;
            bottom: 77px;
            height: 301px;
            z-index: 1;
            position: absolute;
          }
          .home-rightcoloumn2 {
            gap: 10px;
            width: 100%;
            display: flex;
            padding: 60px;
            align-items: center;
          }
          .home-urbanrenewalcontentborder {
            gap: 10px;
            display: flex;
            padding: 80px 40px;
            align-self: stretch;
            align-items: flex-start;
            border-color: rgba(187, 188, 191, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 20px;
          }
          .home-urbanrenewalcontent {
            gap: 100px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
          }
          .home-urbanrenewalheadingsummary {
            gap: 50px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-text29 {
            color: rgba(0, 0, 0, 1);
            width: 405px;
            height: auto;
            font-size: 50px;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text35 {
            color: rgba(0, 0, 0, 1);
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
          .home-carassobutton2 {
            gap: 12px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-buttontextarrow2 {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .home-arrow7stroke2 {
            width: 8px;
            height: 7px;
          }
          .home-text37 {
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
          .home-buttongrayline2 {
            gap: 10px;
            height: 1px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(187, 187, 187, 1);
          }
          .home-footer {
            width: 100%;
            height: auto;
            display: none;
            overflow: hidden;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-carasso-plainwhite);
          }
          .home-container4 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .home-leftcoloumn3 {
            gap: 90px;
            height: 574px;
            display: flex;
            padding: 80px 0 80px 90px;
            position: relative;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-links {
            gap: 100px;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .home-footersocialmedialinks {
            gap: 15px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-instagram-logo {
            width: 24px;
            height: 24px;
          }
          .home-linkedin-logo {
            width: 24px;
            height: 24px;
          }
          .home-facebook-logo {
            width: 24px;
            height: 24px;
          }
          .home-linksrow2 {
            gap: 40px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-text39 {
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
          .home-links1 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-text41 {
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
          .home-text43 {
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
          .home-text45 {
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
          .home-text47 {
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
          .home-text49 {
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
            gap: 20px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-text51 {
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
          .home-text53 {
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
          .home-text55 {
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
          .home-text57 {
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
          .home-text59 {
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
          .home-text61 {
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
            z-index: 1;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-info1 {
            gap: 38px;
            display: flex;
            align-items: flex-start;
          }
          .home-text63 {
            color: rgba(153, 153, 153, 1);
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
          .home-text65 {
            color: rgba(153, 153, 153, 1);
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
          .home-text67 {
            color: rgba(153, 153, 153, 1);
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
          .home-termslinks {
            gap: 20px;
            display: flex;
            align-items: center;
          }
          .home-frame56 {
            gap: 5px;
            display: flex;
            align-items: center;
          }
          .home-text69 {
            color: rgba(153, 153, 153, 1);
            height: auto;
            font-size: 14px;
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
          .home-text71 {
            color: rgba(153, 153, 153, 1);
            height: auto;
            font-size: 14px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text73 {
            color: rgba(153, 153, 153, 1);
            height: auto;
            font-size: 14px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text75 {
            color: rgba(153, 153, 153, 1);
            height: auto;
            font-size: 14px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text77 {
            color: rgba(153, 153, 153, 1);
            height: auto;
            font-size: 14px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-fig12 {
            top: 774px;
            left: -266px;
            width: 1112px;
            height: 1110px;
            z-index: 2;
            position: absolute;
          }
          .home-rightcoloumn3 {
            gap: 90px;
            width: 874px;
            display: flex;
            padding: 80px 90px 80px 40px;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .home-contactform {
            gap: 40px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-contact {
            gap: 20px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-text79 {
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
          .home-frame71 {
            gap: 30px;
            display: flex;
            flex-wrap: wrap;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .home-fullnamefield {
            gap: 10px;
            width: 200px;
            display: flex;
            padding: 12px 0;
            align-items: flex-end;
            flex-shrink: 0;
            border-color: rgba(115, 119, 123, 1);
            border-style: solid;
            border-width: 0 0 1px;
            flex-direction: column;
          }
          .home-fullname {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .home-text81 {
            color: var(--dl-color-carasso-darkergray);
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
          .home-phone {
            width: 20px;
            height: 20px;
          }
          .home-fullnamefield1 {
            gap: 10px;
            width: 200px;
            display: flex;
            padding: 12px 0;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(115, 119, 123, 1);
            border-style: solid;
            border-width: 0 0 1px;
            flex-direction: column;
          }
          .home-fullname1 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .home-text83 {
            color: var(--dl-color-carasso-darkergray);
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
          .home-user-circle {
            width: 20px;
            height: 20px;
          }
          .home-subject {
            gap: 20px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-text85 {
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
          .home-projecttags {
            gap: 10px;
            display: flex;
            flex-wrap: wrap;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .home-frame17 {
            gap: 10px;
            display: flex;
            padding: 7px;
            overflow: hidden;
            box-shadow: 0px 0px 7px 0px rgba(39, 39, 39, 0.09000000357627869);
            align-items: center;
            border-radius: 5px;
            justify-content: center;
            background-color: var(--dl-color-carasso-plainwhite);
          }
          .home-text87 {
            color: var(--dl-color-carasso-primaryblack);
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
          .home-frame19 {
            gap: 10px;
            display: flex;
            padding: 7px;
            overflow: hidden;
            box-shadow: 0px 0px 7px 0px rgba(39, 39, 39, 0.09000000357627869);
            align-items: center;
            border-radius: 5px;
            justify-content: center;
            background-color: var(--dl-color-carasso-plainwhite);
          }
          .home-text89 {
            color: var(--dl-color-carasso-primaryblack);
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
          .home-frame18 {
            gap: 10px;
            display: flex;
            padding: 7px;
            overflow: hidden;
            box-shadow: 0px 0px 7px 0px rgba(39, 39, 39, 0.09000000357627869);
            align-items: center;
            border-radius: 5px;
            justify-content: center;
            background-color: var(--dl-color-carasso-plainwhite);
          }
          .home-text91 {
            color: var(--dl-color-carasso-primaryblack);
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
          .home-frame16 {
            gap: 10px;
            display: flex;
            padding: 7px;
            overflow: hidden;
            box-shadow: 0px 0px 7px 0px rgba(39, 39, 39, 0.09000000357627869);
            align-items: center;
            border-radius: 5px;
            justify-content: center;
            background-color: var(--dl-color-carasso-plainwhite);
          }
          .home-text93 {
            color: var(--dl-color-carasso-primaryblack);
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
          .home-frame15 {
            gap: 10px;
            display: flex;
            padding: 7px;
            overflow: hidden;
            box-shadow: 0px 0px 7px 0px rgba(39, 39, 39, 0.09000000357627869);
            align-items: center;
            border-radius: 5px;
            justify-content: center;
            background-color: var(--dl-color-carasso-plainwhite);
          }
          .home-text95 {
            color: var(--dl-color-carasso-primaryblack);
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
          .home-carassobutton3 {
            gap: 12px;
            height: 24px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .home-buttontextarrow3 {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .home-arrow7stroke3 {
            width: 8px;
            height: 7px;
          }
          .home-text97 {
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
          .home-buttongrayline3 {
            gap: 10px;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-carasso-primaryblack);
          }
          .home-frame72 {
            height: 90px;
            align-self: flex-end;
          }
        `}
      </style>
    </>
  )
}

export default Home
