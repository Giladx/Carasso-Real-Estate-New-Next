import React from 'react'
import Head from 'next/head'

import Timelinesection from '../components/timelinesection'

const About = (props) => {
  return (
    <>
      <div className="about-container">
        <Head>
          <title>About - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="About - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <div className="about-hero">
          <div className="about-leftcolumn">
            <img alt="Vector4942" src="/simbol.svg" className="about-vector" />
            <img
              alt="image"
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/blog/about-background-1500h.webp"
              srcSet="blog//about-background-1500h.webp 1200w, blog/about-background-tablet.webp 800w, blog/about-background-mobile.webp 480w"
              className="about-image"
            />
          </div>
          <div className="about-rightcolumn">
            <div className="about-content">
              <span className="about-text">
                <span>את הבניין הראשון</span>
                <br></br>
                <span>בנינו ב-1927</span>
                <br></br>
                <span>בנחלת בנימין</span>
              </span>
              <span className="about-text06">
                <span>
                  אנחנו חברה ציבורית הנכללת במדד ת&quot;א 90, עם החברות הגדולות
                  והחזקות בישראל.
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="about-visionsection">
          <div className="about-container1">
            <div className="about-leftcoloumn">
              <div className="about-content1">
                <span className="about-text08">
                  <span>
                    אנחנו שואפים לזהות תפיסות עולם וסגנונות חיים עדכניים
                    ומתכננים עבורך מרחבים שיתמכו בהם. הדירה, הבניין והסביבה
                    מתוכננים כיחידה אחת שמוקדשת כולה למטרה זו.
                  </span>
                </span>
                <span className="about-text10">
                  <span>
                    סביבה שמתאימה לסגנון החיים שתאפשר לך לחיות במדויק יותר,
                    ותמלא כל יום במשמעות.
                  </span>
                </span>
                <img
                  alt="Vector4942"
                  src="/external/vector4942-8wwd.svg"
                  className="about-vector1"
                />
              </div>
            </div>
            <div className="about-rightcoloumn">
              <div className="about-image1">
                <img
                  alt="Rectangle214942"
                  sizes="(min-width: 768px) 800px, 480px"
                  src="/external/rectangle214942-gzu-600w.webp"
                  srcSet="external//rectangle214942-gzu-600w.webp 800w, external/rectangle214942-gzu-mobile.webp 480w"
                  className="about-rectangle21"
                />
                <img
                  alt="Intersect4942"
                  src="/external/intersect4942-sl2.svg"
                  className="about-intersect"
                />
                <img
                  alt="Ellipse104942"
                  sizes="(min-width: 768px) 800px, 480px"
                  src="/external/ellipse104942-crg6-700w.webp"
                  srcSet="external//ellipse104942-crg6-700w.webp 800w, external/ellipse104942-crg6-mobile.webp 480w"
                  className="about-ellipse10"
                />
              </div>
            </div>
          </div>
        </div>
        <Timelinesection></Timelinesection>
        <div className="about-teamsection">
          <div className="about-container2">
            <div className="about-content2">
              <div className="about-teammembers">
                <div className="about-memberblock">
                  <div className="about-topimage"></div>
                  <div className="about-bottomtext">
                    <div className="about-frame278">
                      <span className="about-text12">
                        <span>ירון צוברי</span>
                      </span>
                      <span className="about-text14">
                        <span>מנהל חטיבת מגורים</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="about-memberblock01">
                  <div className="about-topimage01"></div>
                  <div className="about-bottomtext01">
                    <div className="about-frame2781">
                      <span className="about-text16">
                        <span>דן פרנס</span>
                      </span>
                      <span className="about-text18">
                        <span>מנכ״ל</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="about-memberblock02">
                  <div className="about-frame1261158170">
                    <span className="about-text20">
                      <span className="about-text21">
                        <span>הדלת שלנו</span>
                        <br></br>
                        <span></span>
                      </span>
                      <span>פתוחה תמיד</span>
                    </span>
                    <span className="about-text26">
                      <span className="about-text27">
                        מסַּפרים על משה קרסו, האב המייסד, שכל מי שנכנס למשרדו
                        התקבל במאור פנים, בין שהיה עובד או שר בממשלה. הוא היה
                        קורא לכולם &apos;מי אלמה&apos;, נשמה שלי.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>זה ה-DNA שלנו עד היום.</span>
                    </span>
                    <span className="about-text29">
                      <span>
                        אנחנו לא נקרא לכם &apos;מי אלמה&apos;, אבל מערכות יחסים
                        חמות והדדיות עם לקוחות, ספקים ועובדים – הן הבסיס להצלחה
                        שלנו, ואנחנו שומרים עליהן מכל משמר.
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <img
                alt="spacersplus4942"
                src="/external/spacersplus4942-85t.svg"
                className="about-spacersplus"
              />
              <div className="about-teammembers1">
                <div className="about-memberblock03">
                  <div className="about-topimage02"></div>
                  <div className="about-bottomtext02">
                    <div className="about-frame2782">
                      <span className="about-text31">
                        <span>חמי שאול</span>
                      </span>
                      <span className="about-text33">
                        <span>מנהל חטיבת מגורים בוטיק</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="about-memberblock04">
                  <div className="about-topimage03"></div>
                  <div className="about-bottomtext03">
                    <div className="about-frame2783">
                      <span className="about-text35">
                        <span>ראובן קידר</span>
                      </span>
                      <span className="about-text37">
                        <span>סמנכ״ל כספים</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="about-memberblock05">
                  <div className="about-topimage04"></div>
                  <div className="about-bottomtext04">
                    <div className="about-frame2784">
                      <span className="about-text39">
                        <span>עדי ברילובסקי</span>
                      </span>
                      <span className="about-text41">
                        <span>סמנכ״לית חווית לקוח ומשאבי אנוש</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <img
                alt="spacersplus4942"
                src="/external/spacersplus4942-cf93.svg"
                className="about-spacersplus1"
              />
              <div className="about-teammembers2">
                <div className="about-memberblock06">
                  <div className="about-topimage05"></div>
                  <div className="about-bottomtext05">
                    <div className="about-frame2785">
                      <span className="about-text43">
                        <span>הראל שהם</span>
                      </span>
                      <span className="about-text45">
                        <span>יועץ משפטי ומזכיר</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="about-memberblock07">
                  <div className="about-topimage06"></div>
                  <div className="about-bottomtext06">
                    <div className="about-frame275">
                      <div className="about-frame274">
                        <span className="about-text47">
                          <span>מיכל גליק</span>
                        </span>
                        <span className="about-text49">
                          <span>סמנכ״לית שיווק</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-memberblock08">
                  <div className="about-topimage07"></div>
                  <div className="about-bottomtext07">
                    <div className="about-frame2786">
                      <span className="about-text51">
                        <span>מוטי להב</span>
                      </span>
                      <span className="about-text53">
                        <span>סמנכ״ל פיתוח עסקי</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <img
                alt="spacersplus4942"
                src="/external/spacersplus4942-uxc.svg"
                className="about-spacersplus2"
              />
              <div className="about-teammembers3">
                <div className="about-memberblock09">
                  <div className="about-topimage08"></div>
                  <div className="about-bottomtext08">
                    <div className="about-frame2787">
                      <span className="about-text55">
                        <span>איציק טובול</span>
                      </span>
                      <span className="about-text57">
                        <span>סמנכ״ל הנדסה</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="about-memberblock10">
                  <div className="about-topimage09"></div>
                  <div className="about-bottomtext09">
                    <div className="about-frame2788">
                      <span className="about-text59">
                        <span>יוני ישראלי</span>
                      </span>
                      <span className="about-text61">
                        <span>מנהל חטיבת מניבים</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .about-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .about-hero {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .about-leftcolumn {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .about-vector {
            top: 26%;
            left: 41%;
            width: 732px;
            height: 828px;
            position: absolute;
          }
          .about-image {
            width: 100%;
            height: auto;
            z-index: 5;
            object-fit: cover;
          }
          .about-rightcolumn {
            gap: 10px;
            width: 50%;
            height: auto;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            margin-right: var(--dl-space-space-sixunits);
            justify-content: flex-end;
          }
          .about-content {
            gap: 60px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .about-text {
            color: var(--dl-color-carasso-red);
            width: 100%;
            height: auto;
            font-size: 64px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 300;
            line-height: 110%;
            font-stretch: normal;
            text-decoration: none;
          }
          .about-text06 {
            color: var(--dl-color-carasso-primaryblack);
            width: 438px;
            height: auto;
            font-size: 24px;
            font-style: Regular;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 129.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .about-visionsection {
            gap: 50px;
            width: 100%;
            height: 1080px;
            display: flex;
            overflow: hidden;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(240, 240, 240, 1);
          }
          .about-container1 {
            display: flex;
            padding: 0 90px 0 0;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
          }
          .about-leftcoloumn {
            gap: 20px;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            justify-content: flex-end;
          }
          .about-content1 {
            gap: 80px;
            width: 837px;
            display: flex;
            padding: 0 60px 0 0;
            position: relative;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .about-text08 {
            color: rgba(180, 182, 184, 1);
            width: 687px;
            height: auto;
            font-size: 45px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 129.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .about-text10 {
            color: rgba(180, 182, 184, 1);
            width: 461px;
            height: auto;
            z-index: 1;
            font-size: 24px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 129.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .about-vector1 {
            top: 269.5px;
            left: -50px;
            width: 353px;
            height: 393px;
            z-index: 2;
            position: absolute;
          }
          .about-rightcoloumn {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-end;
          }
          .about-image1 {
            display: flex;
            position: relative;
            align-items: flex-start;
          }
          .about-rectangle21 {
            width: 513px;
            height: 573px;
            border-color: rgba(255, 82, 61, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 20px;
          }
          .about-intersect {
            top: 40px;
            left: 40px;
            width: 473px;
            height: 533px;
            z-index: 1;
            position: absolute;
          }
          .about-ellipse10 {
            top: 40px;
            left: 40px;
            width: 698px;
            height: 698px;
            z-index: 2;
            position: absolute;
            border-color: rgba(255, 82, 61, 1);
            border-style: solid;
            border-width: 1px;
          }
          .about-teamsection {
            gap: 50px;
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(240, 240, 240, 1);
          }
          .about-container2 {
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            padding-top: 170px 90px 0;
            padding-left: 170px 90px 0;
            padding-right: 170px 90px 0;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .about-content2 {
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .about-teammembers {
            gap: 21px;
            display: flex;
            align-items: flex-start;
          }
          .about-memberblock {
            width: 406px;
            height: 483px;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(178, 187, 194, 1);
            border-style: solid;
            border-width: 0.5px;
            border-radius: 20px;
            flex-direction: column;
          }
          .about-topimage {
            gap: 10px;
            display: flex;
            padding: 10px;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            background-size: cover;
            background-image: url('/about/yaron-500h.webp');
          }
          .about-bottomtext {
            gap: 16px;
            display: flex;
            padding: 30px;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .about-frame278 {
            gap: 16px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .about-text12 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 32px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .about-text14 {
            color: var(--dl-color-carasso-primaryblack);
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
          .about-memberblock01 {
            width: 406px;
            height: 483px;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(178, 187, 194, 1);
            border-style: solid;
            border-width: 0.5px;
            border-radius: 20px;
            flex-direction: column;
          }
          .about-topimage01 {
            gap: 10px;
            display: flex;
            padding: 10px;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            background-size: cover;
            background-image: url('/about/dan-500h.webp');
          }
          .about-bottomtext01 {
            gap: 16px;
            display: flex;
            padding: 30px;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .about-frame2781 {
            gap: 16px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .about-text16 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 32px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .about-text18 {
            color: var(--dl-color-carasso-primaryblack);
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
          .about-memberblock02 {
            width: 406px;
            height: 483px;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-shrink: 0;
            border-radius: 20px;
            flex-direction: column;
            justify-content: center;
          }
          .about-frame1261158170 {
            gap: 41px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .about-text20 {
            color: var(--dl-color-carasso-red);
            width: 276px;
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
          .about-text21 {
            font-weight: 300;
          }
          .about-text26 {
            color: var(--dl-color-carasso-primaryblack);
            width: 333px;
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
          .about-text27 {
            font-weight: 300;
          }
          .about-text29 {
            color: var(--dl-color-carasso-primaryblack);
            width: 300px;
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
          .about-spacersplus {
            width: 1260px;
            height: 20px;
            align-self: stretch;
          }
          .about-teammembers1 {
            gap: 21px;
            display: flex;
            align-items: flex-start;
          }
          .about-memberblock03 {
            width: 406px;
            height: 483px;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(178, 187, 194, 1);
            border-style: solid;
            border-width: 0.5px;
            border-radius: 20px;
            flex-direction: column;
          }
          .about-topimage02 {
            gap: 10px;
            display: flex;
            padding: 10px;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            background-size: cover;
            background-image: url('/about/hemi-500h.webp');
          }
          .about-bottomtext02 {
            gap: 16px;
            display: flex;
            padding: 30px;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .about-frame2782 {
            gap: 16px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .about-text31 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 32px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .about-text33 {
            color: var(--dl-color-carasso-primaryblack);
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
          .about-memberblock04 {
            width: 406px;
            height: 483px;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(178, 187, 194, 1);
            border-style: solid;
            border-width: 0.5px;
            border-radius: 20px;
            flex-direction: column;
          }
          .about-topimage03 {
            gap: 10px;
            display: flex;
            padding: 10px;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            background-size: cover;
            background-image: url('/about/reuven-500h.webp');
          }
          .about-bottomtext03 {
            gap: 16px;
            display: flex;
            padding: 30px;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .about-frame2783 {
            gap: 16px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .about-text35 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 32px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .about-text37 {
            color: var(--dl-color-carasso-primaryblack);
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
          .about-memberblock05 {
            width: 406px;
            height: 483px;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(178, 187, 194, 1);
            border-style: solid;
            border-width: 0.5px;
            border-radius: 20px;
            flex-direction: column;
          }
          .about-topimage04 {
            gap: 10px;
            display: flex;
            padding: 10px;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            background-size: cover;
            background-image: url('/about/adi-500h.webp');
          }
          .about-bottomtext04 {
            gap: 16px;
            display: flex;
            padding: 30px;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .about-frame2784 {
            gap: 16px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .about-text39 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 32px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .about-text41 {
            color: var(--dl-color-carasso-primaryblack);
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
          .about-spacersplus1 {
            width: 1260px;
            height: 20px;
            align-self: stretch;
          }
          .about-teammembers2 {
            gap: 21px;
            display: flex;
            align-items: flex-start;
          }
          .about-memberblock06 {
            width: 406px;
            height: 483px;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(178, 187, 194, 1);
            border-style: solid;
            border-width: 0.5px;
            border-radius: 20px;
            flex-direction: column;
          }
          .about-topimage05 {
            gap: 10px;
            display: flex;
            padding: 10px;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            background-size: cover;
            background-image: url('/about/harel-500h.webp');
          }
          .about-bottomtext05 {
            gap: 16px;
            display: flex;
            padding: 30px;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .about-frame2785 {
            gap: 16px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .about-text43 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 32px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .about-text45 {
            color: var(--dl-color-carasso-primaryblack);
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
          .about-memberblock07 {
            width: 406px;
            height: 483px;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(178, 187, 194, 1);
            border-style: solid;
            border-width: 0.5px;
            border-radius: 20px;
            flex-direction: column;
          }
          .about-topimage06 {
            gap: 10px;
            display: flex;
            padding: 10px;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            background-size: cover;
            background-image: url('/about/michal-500h.webp');
          }
          .about-bottomtext06 {
            gap: 16px;
            display: flex;
            padding: 30px;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .about-frame275 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .about-frame274 {
            gap: 16px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .about-text47 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 32px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .about-text49 {
            color: var(--dl-color-carasso-primaryblack);
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
          .about-memberblock08 {
            width: 406px;
            height: 483px;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(178, 187, 194, 1);
            border-style: solid;
            border-width: 0.5px;
            border-radius: 20px;
            flex-direction: column;
          }
          .about-topimage07 {
            gap: 10px;
            display: flex;
            padding: 10px;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            background-size: cover;
            background-image: url('/about/moti-500h.webp');
          }
          .about-bottomtext07 {
            gap: 16px;
            display: flex;
            padding: 30px;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .about-frame2786 {
            gap: 16px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .about-text51 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 32px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .about-text53 {
            color: var(--dl-color-carasso-primaryblack);
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
          .about-spacersplus2 {
            width: 1260px;
            height: 20px;
            align-self: stretch;
          }
          .about-teammembers3 {
            gap: 21px;
            display: flex;
            align-items: flex-start;
          }
          .about-memberblock09 {
            width: 406px;
            height: 483px;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(178, 187, 194, 1);
            border-style: solid;
            border-width: 0.5px;
            border-radius: 20px;
            flex-direction: column;
          }
          .about-topimage08 {
            gap: 10px;
            display: flex;
            padding: 10px;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            background-size: cover;
            background-image: url('/about/itzik-500h.webp');
          }
          .about-bottomtext08 {
            gap: 16px;
            display: flex;
            padding: 30px;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .about-frame2787 {
            gap: 16px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .about-text55 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 32px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .about-text57 {
            color: var(--dl-color-carasso-primaryblack);
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
          .about-memberblock10 {
            width: 406px;
            height: 483px;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(178, 187, 194, 1);
            border-style: solid;
            border-width: 0.5px;
            border-radius: 20px;
            flex-direction: column;
          }
          .about-topimage09 {
            gap: 10px;
            display: flex;
            padding: 10px;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            background-size: cover;
            background-image: url('/about/yoni-500h.webp');
          }
          .about-bottomtext09 {
            gap: 16px;
            display: flex;
            padding: 30px;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .about-frame2788 {
            gap: 16px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .about-text59 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 32px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .about-text61 {
            color: var(--dl-color-carasso-primaryblack);
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
          @media (max-width: 1440px) {
            .about-vector {
              top: 33%;
              left: 49%;
              width: 492px;
              height: 553px;
            }
            .about-image {
              height: 56rem;
            }
          }
        `}
      </style>
    </>
  )
}

export default About
