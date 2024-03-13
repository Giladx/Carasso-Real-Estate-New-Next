import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Numbersurbanrenewal from '../components/numbersurbanrenewal'

const UrbanRenew = (props) => {
  return (
    <>
      <div className="urban-renew-container">
        <Head>
          <title>Urban-Renew - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta
            property="og:title"
            content="Urban-Renew - Carasso Real Estate"
          />
          <meta property="og:description" content="Carasso Real Estate" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/bd438ef8-05f7-4c29-9c01-eea7ae17edea/54924954-5c3a-4ae6-9277-e76b2fdbc592?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <div className="urban-renew-header-1">
          <header
            data-thq="thq-navbar"
            className="urban-renew-navbar-interactive"
          >
            <div className="urban-renew-search">
              <img
                id="navsearch"
                alt="image"
                src="c90025b4-cd9e-4b10-b60e-83848d5a8914"
                className="urban-renew-image"
              />
            </div>
            <div className="urban-renew-logo">
              <img
                id="logo"
                alt="logo"
                src="/clogo.svg"
                className="urban-renew-image1"
              />
            </div>
            <div data-thq="thq-navbar-nav" className="urban-renew-desktop-menu">
              <nav className="urban-renew-links">
                <span>About</span>
                <span className="urban-renew-text001">Features</span>
                <span className="urban-renew-text002">Pricing</span>
                <span className="urban-renew-text003">Team</span>
                <span className="urban-renew-text004">Blog</span>
              </nav>
              <div className="urban-renew-buttons">
                <button className="urban-renew-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div data-thq="thq-burger-menu" className="urban-renew-burger-menu">
              <img
                id="navmenu"
                alt="image"
                src="212659cd-3875-4ccd-947b-abbd25476938"
                className="urban-renew-image2"
              />
              <svg viewBox="0 0 1024 1024" className="urban-renew-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="urban-renew-mobile-menu">
              <div className="urban-renew-megamenudefault">
                <div className="urban-renew-container1">
                  <div className="urban-renew-leftcoloumn">
                    <img
                      alt="image"
                      src="/left-coloumn1-1400w.png"
                      className="urban-renew-image3"
                    />
                  </div>
                  <div className="urban-renew-rightcoloumn">
                    <img
                      alt="VectorI6012"
                      src="/external/vectori6012-vqsd.svg"
                      className="urban-renew-vector"
                    />
                    <div className="urban-renew-navigationbarmenuopen">
                      <img
                        alt="SearchI6012"
                        src="/external/searchi6012-bgsk1.svg"
                        className="urban-renew-search1"
                      />
                      <img
                        alt="logoI6012"
                        src="/external/logoi6012-r0di1.svg"
                        className="urban-renew-logo1"
                      />
                      <img
                        alt="hamburgerI6012"
                        src="/external/hamburgeri6012-lv27.svg"
                        className="urban-renew-hamburger"
                      />
                    </div>
                    <div className="urban-renew-navcontent">
                      <div className="urban-renew-navlinks">
                        <div className="urban-renew-frame139">
                          <img
                            alt="Arrow11I6012"
                            src="/external/arrow11i6012-70po1.svg"
                            className="urban-renew-arrow11"
                          />
                          <span className="urban-renew-text005">
                            <span>דף הבית</span>
                          </span>
                        </div>
                        <div className="urban-renew-frame138">
                          <span className="urban-renew-text007">
                            <span>הסיפור שלנו</span>
                          </span>
                        </div>
                        <div className="urban-renew-frame137">
                          <img
                            alt="VectorI6012"
                            src="/external/vectori6012-wp6f.svg"
                            className="urban-renew-vector1"
                          />
                          <span className="urban-renew-text009">
                            <span>פרויקטים</span>
                          </span>
                        </div>
                        <div className="urban-renew-frame140">
                          <span className="urban-renew-text011">
                            <span>התחדשות עירונית</span>
                          </span>
                        </div>
                        <div className="urban-renew-frame141">
                          <span className="urban-renew-text013">
                            <span>חדשות ועידכונים</span>
                          </span>
                        </div>
                        <div className="urban-renew-frame142">
                          <span className="urban-renew-text015">
                            <span>יצירת קשר</span>
                          </span>
                        </div>
                      </div>
                      <div className="urban-renew-bottomdetails">
                        <div className="urban-renew-personalareacontainer">
                          <div className="urban-renew-personalarea">
                            <span className="urban-renew-text017">
                              <span>אזור אישי</span>
                            </span>
                            <img
                              alt="UserCircleI6012"
                              src="/external/usercirclei6012-pj7h.svg"
                              className="urban-renew-user-circle"
                            />
                          </div>
                        </div>
                        <div className="urban-renew-contactdetails">
                          <div className="urban-renew-frame123">
                            <img
                              alt="InstagramLogoI6012"
                              src="/external/instagramlogoi6012-678.svg"
                              className="urban-renew-instagram-logo"
                            />
                            <img
                              alt="LinkedinLogoI6012"
                              src="/external/linkedinlogoi6012-f7lb.svg"
                              className="urban-renew-linkedin-logo"
                            />
                            <img
                              alt="FacebookLogoI6012"
                              src="/external/facebooklogoi6012-6681.svg"
                              className="urban-renew-facebook-logo"
                            />
                          </div>
                          <div className="urban-renew-frame133">
                            <span className="urban-renew-text019">
                              <span>+972 050 123 1234</span>
                            </span>
                            <span className="urban-renew-text021">
                              <span>ריב״ל 24, תל אביב-יפו</span>
                            </span>
                            <span className="urban-renew-text023">
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
          </header>
        </div>
        <div className="urban-renew-header">
          <div className="urban-renew-navigationbar">
            <img
              alt="Search5030"
              src="c90025b4-cd9e-4b10-b60e-83848d5a8914"
              className="urban-renew-search2"
            />
            <img
              alt="logo5030"
              src="/external/logo5030-cc9b.svg"
              className="urban-renew-logo2"
            />
            <img
              alt="hamburger5030"
              src="/external/hamburger5030-mc5d.svg"
              className="urban-renew-hamburger1"
            />
          </div>
        </div>
        <Numbersurbanrenewal></Numbersurbanrenewal>
        <div className="urban-renew-herourbanrenewal">
          <div className="urban-renew-container2">
            <img
              alt="Vector5030"
              src="/external/vector5030-uk5.svg"
              className="urban-renew-vector2"
            />
            <div className="urban-renew-leftcoloumn1">
              <div className="urban-renew-content">
                <div className="urban-renew-frame144">
                  <img
                    alt="FlagPennant5030"
                    src="/external/flagpennant5030-xo88.svg"
                    className="urban-renew-flag-pennant"
                  />
                  <span className="urban-renew-text025">
                    <span>​​הערך המוסף שלנו</span>
                  </span>
                  <span className="urban-renew-text027">
                    <span>הידע והניסיון, המומחיות, והחשיבה החדשנית</span>
                  </span>
                  <div className="urban-renew-frame">
                    <div className="urban-renew-frame224">
                      <img
                        alt="CaretDown5030"
                        src="/external/caretdown5030-fakf.svg"
                        className="urban-renew-caret-down"
                      />
                      <span className="urban-renew-text029">
                        <span>עוד פרטים</span>
                      </span>
                    </div>
                    <div className="urban-renew-frame226">
                      <div className="urban-renew-frame125">
                        <span className="urban-renew-text031">
                          <span>
                            12 שנות פעילות בהן צברנו ידע וניסיון רב בתחום
                            ההתחדשות העירונית
                          </span>
                        </span>
                        <img
                          alt="Arrow7Stroke5030"
                          src="/external/arrow7stroke5030-irm.svg"
                          className="urban-renew-arrow7-stroke"
                        />
                      </div>
                      <div className="urban-renew-frame128">
                        <span className="urban-renew-text033">
                          <span>מומחים בפרויקטים עירוניים מורכבים</span>
                        </span>
                        <img
                          alt="Arrow7Stroke5030"
                          src="/external/arrow7stroke5030-1fkv.svg"
                          className="urban-renew-arrow7-stroke1"
                        />
                      </div>
                      <div className="urban-renew-frame129">
                        <span className="urban-renew-text035">
                          <span>גב פיננסי רחב ויציב</span>
                        </span>
                        <img
                          alt="Arrow7Stroke5030"
                          src="/external/arrow7stroke5030-d4ds.svg"
                          className="urban-renew-arrow7-stroke2"
                        />
                      </div>
                      <div className="urban-renew-frame127">
                        <span className="urban-renew-text037">
                          <span>מערך שירות אישי</span>
                        </span>
                        <img
                          alt="Arrow7Stroke5030"
                          src="/external/arrow7stroke5030-0lnq.svg"
                          className="urban-renew-arrow7-stroke3"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="urban-renew-frame145">
                  <img
                    alt="FlagPennant5030"
                    src="/external/flagpennant5030-hksf.svg"
                    className="urban-renew-flag-pennant1"
                  />
                  <span className="urban-renew-text039">
                    <span>דואגים להכל</span>
                  </span>
                  <span className="urban-renew-text041">
                    <span>
                      מימון כל ההוצאות הנדרשות לקבלת שירותים מקצועיים הקשורים
                      לפרויקט
                    </span>
                  </span>
                  <div className="urban-renew-frame1">
                    <div className="urban-renew-frame2241">
                      <img
                        alt="CaretDown5030"
                        src="/external/caretdown5030-99z.svg"
                        className="urban-renew-caret-down1"
                      />
                      <span className="urban-renew-text043">
                        <span>עוד פרטים</span>
                      </span>
                    </div>
                    <div className="urban-renew-frame2261">
                      <div className="urban-renew-frame1251">
                        <span className="urban-renew-text045">
                          <span>דמי שכירות מלאים לאורך כל הבנייה</span>
                        </span>
                        <img
                          alt="Arrow7Stroke5440"
                          src="/external/arrow7stroke5440-fgxh.svg"
                          className="urban-renew-arrow7-stroke4"
                        />
                      </div>
                      <div className="urban-renew-frame1281">
                        <span className="urban-renew-text047">
                          <span>שירותי אריזה פינוי והובלות ללא עלות</span>
                        </span>
                        <img
                          alt="Arrow7Stroke5440"
                          src="/external/arrow7stroke5440-iyn.svg"
                          className="urban-renew-arrow7-stroke5"
                        />
                      </div>
                      <div className="urban-renew-frame1271">
                        <span className="urban-renew-text049">
                          <span>שירותי תיווך לאיתור דיור חלופי</span>
                        </span>
                        <img
                          alt="Arrow7Stroke5440"
                          src="/external/arrow7stroke5440-0apf.svg"
                          className="urban-renew-arrow7-stroke6"
                        />
                      </div>
                      <div className="urban-renew-frame1291">
                        <span className="urban-renew-text051">
                          <span>
                            ליווי צמוד ופתרונות מותאמים אישית של בעלי דירות
                            מבוגרים
                          </span>
                        </span>
                        <img
                          alt="Arrow7Stroke5440"
                          src="/external/arrow7stroke5440-a4lh.svg"
                          className="urban-renew-arrow7-stroke7"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="urban-renew-frame146">
                  <img
                    alt="FlagPennant5030"
                    src="/external/flagpennant5030-45fl.svg"
                    className="urban-renew-flag-pennant2"
                  />
                  <span className="urban-renew-text053">
                    <span>איתך בכל שלב</span>
                  </span>
                  <span className="urban-renew-text055">
                    <span>
                      נעמיד לרשותכם צוות שיהיה זמין לאורך כל הדרך ובכל שלב
                      בפרויקט
                    </span>
                  </span>
                  <div className="urban-renew-frame2">
                    <div className="urban-renew-frame2242">
                      <img
                        alt="CaretDown5030"
                        src="/external/caretdown5030-t6z9.svg"
                        className="urban-renew-caret-down2"
                      />
                      <span className="urban-renew-text057">
                        <span>עוד פרטים</span>
                      </span>
                    </div>
                    <span className="urban-renew-text059">
                      <span className="urban-renew-text060">
                        אנחנו יודעים שפרויקט מורכב כזה דורש ליווי מסור לבעלי
                        הדירות ולדיירים ולכן נעמיד לרשותכם את הצוות הנדרש
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        מחתימת החוזה, דרך הבנייה ועד לטיפול בשינויים ובכל דבר
                        אחר שתצטרכו עם מסירת הדירה.
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="urban-renew-rightcoloumn1">
              <span className="urban-renew-text063">
                <span className="urban-renew-text064">
                  הפרטים הקטנים
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>והחשובים</span>
              </span>
              <button className="urban-renew-carassobutton">
                <div className="urban-renew-frame1231">
                  <img
                    alt="Arrow7Stroke5030"
                    src="/external/arrow7stroke5030-rb9.svg"
                    className="urban-renew-arrow7-stroke8"
                  />
                  <span className="urban-renew-text066">
                    <span>אשמח שתחדשו גם את הבניין שלי</span>
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="urban-renew-container3">
          <div className="urban-renew-backgroundelipse"></div>
          <div className="urban-renew-content1">
            <div className="urban-renew-projectsandheaders">
              <span className="urban-renew-text068">
                <span className="urban-renew-text069">
                  הפרויקטים
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="urban-renew-text070">הנבחרים שלנו</span>
              </span>
              <div className="urban-renew-tabs">
                <div className="urban-renew-frame156">
                  <span className="urban-renew-text071">
                    <span>תמ״א 38/2</span>
                  </span>
                </div>
                <div className="urban-renew-frame154">
                  <span className="urban-renew-text073">
                    <span>פינוי בינוי</span>
                  </span>
                </div>
              </div>
              <div className="urban-renew-urbanrenewalprojects">
                <div className="urban-renew-rightcoloumn2">
                  <div className="urban-renew-projectcardgridviewnarrow">
                    <div className="urban-renew-projectimageandtags">
                      <div className="urban-renew-frame33"></div>
                      <div className="urban-renew-projectdetails">
                        <div className="urban-renew-projectdetails1">
                          <div className="urban-renew-projectnamelocation">
                            <span className="urban-renew-text075">
                              <span>ירושלים</span>
                            </span>
                            <span className="urban-renew-text077">
                              <span>דרך חברון התנופה</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="urban-renew-rightcoloumn3">
                  <div className="urban-renew-projectimageandtags1">
                    <div className="urban-renew-frame331"></div>
                    <div className="urban-renew-projectdetails2">
                      <div className="urban-renew-projectdetails3">
                        <div className="urban-renew-projectnamelocation1">
                          <span className="urban-renew-text079">
                            <span>ירושלים</span>
                          </span>
                          <span className="urban-renew-text081">
                            <span>קריית היובל</span>
                          </span>
                        </div>
                        <span className="urban-renew-text083">
                          <span>
                            קרית יובל: השכונה האהובה, מתחדשת והופכת למתחם עירוני
                            מעורר השראה. המתחם, המתפרס לאורך חלקו הצפוני של רחוב
                            טהון, מהווה מרחב עירוני פורץ דרך ומעניק את החוויה
                            האורבנית המושלמת. בליבו מתחם פנאי, קניות ובילוי חי
                            ותוסס לאורך כל שעות היום.
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="urban-renew-bottomrow">
              <div className="urban-renew-leftrightarrows">
                <img
                  alt="Arrow5030"
                  src="/external/arrow5030-f3zn.svg"
                  className="urban-renew-arrow"
                />
                <img
                  alt="Arrow5030"
                  src="/external/arrow5030-w72a.svg"
                  className="urban-renew-arrow1"
                />
              </div>
              <div className="urban-renew-gallerydots">
                <div className="urban-renew-frame162"></div>
                <div className="urban-renew-frame167"></div>
                <div className="urban-renew-frame166"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="urban-renew-container4">
          <img
            alt="Vector5030"
            src="/external/vector5030-p63.svg"
            className="urban-renew-vector3"
          />
          <div>
            <div className="urban-renew-frame222">
              <span className="urban-renew-text085">
                <span className="urban-renew-text086">
                  הצוות
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="urban-renew-text087">שלנו</span>
              </span>
            </div>
            <div className="urban-renew-team">
              <div className="urban-renew-memberblock">
                <div className="urban-renew-topimage"></div>
                <div className="urban-renew-bottomtext">
                  <div className="urban-renew-frame280">
                    <span className="urban-renew-text088">
                      <span>אתל מלכא</span>
                    </span>
                    <span className="urban-renew-text090">
                      <span>רכזת התחדשות עירונית</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="urban-renew-memberblock1">
                <div className="urban-renew-topimage1"></div>
                <div className="urban-renew-bottomtext1">
                  <div className="urban-renew-frame2801">
                    <span className="urban-renew-text092">
                      <span>בועז שיקלר</span>
                    </span>
                    <span className="urban-renew-text094">
                      <span>מנהל פרויקטים</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="urban-renew-memberblock2">
                <div className="urban-renew-topimage2"></div>
                <div className="urban-renew-bottomtext2">
                  <div className="urban-renew-frame279">
                    <span className="urban-renew-text096">
                      <span>עידן קניג</span>
                    </span>
                    <span className="urban-renew-text098">
                      <span>מנהל ייזום עסקי</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="urban-renew-memberblock3">
                <div className="urban-renew-topimage3"></div>
                <div className="urban-renew-bottomtext3">
                  <div className="urban-renew-frame2791">
                    <span className="urban-renew-text100">
                      <span>אברהם שמש</span>
                    </span>
                    <span className="urban-renew-text102">
                      <span>מנהל תחום התחדשות עירונית</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="urban-renew-content2 urban-renew-content2">
            <div className="urban-renew-frame1261158166">
              <span className="urban-renew-text104">
                <span>מובילים בדירוג</span>
              </span>
              <span className="urban-renew-text106">
                <span>
                  קרסו מובילה בדירוגים החשובים ביותר בתחום הבנייה בכלל ובהתחדשות
                  עירונית בפרט
                </span>
              </span>
            </div>
            <div className="urban-renew-frame218">
              <img
                alt="image185030"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/bd438ef8-05f7-4c29-9c01-eea7ae17edea/fee89d70-8251-49a2-9a59-0c68094a00a1?org_if_sml=111614&amp;force_format=original"
                className="urban-renew-image18"
              />
              <div className="urban-renew-frame219">
                <img
                  alt="image165030"
                  src="/external/image165030-tkmc-200h.png"
                  className="urban-renew-image16"
                />
              </div>
              <img
                alt="image175030"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/bd438ef8-05f7-4c29-9c01-eea7ae17edea/a7e830ed-b715-4db0-8117-d60af823da43?org_if_sml=13899&amp;force_format=original"
                className="urban-renew-image17"
              />
            </div>
          </div>
        </div>
        <div className="urban-renew-herourbanrenewal1">
          <div className="urban-renew-container5">
            <span className="urban-renew-text108">
              <span className="urban-renew-text109">
                מה צפוי בתהליך
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>התחדשות עירונית</span>
            </span>
            <div className="urban-renew-steps">
              <div className="urban-renew-frame136">
                <div className="urban-renew-frame1261158169">
                  <div className="urban-renew-frame1361">
                    <span className="urban-renew-text111">
                      <span>אנחנו כאן בשבילכם</span>
                    </span>
                    <span className="urban-renew-text113">
                      <span>תקופת בדק</span>
                      <br></br>
                      <span>ואחריות</span>
                    </span>
                  </div>
                  <span className="urban-renew-text117">7</span>
                </div>
              </div>
              <div className="urban-renew-frame1421">
                <div className="urban-renew-frame1261158168">
                  <div className="urban-renew-frame1362">
                    <span className="urban-renew-text118">
                      <span>מסירת הדירות</span>
                    </span>
                    <span className="urban-renew-text120">
                      <span>בשעה טובה :)</span>
                      <br></br>
                      <span>נכנסים הביתה ורושמים</span>
                      <br></br>
                      <span>את הבית המשותף</span>
                    </span>
                  </div>
                  <span className="urban-renew-text126">6</span>
                </div>
              </div>
              <div className="urban-renew-frame1411">
                <div className="urban-renew-frame1363">
                  <span className="urban-renew-text127">
                    <span>בנייה</span>
                  </span>
                  <span className="urban-renew-text129">
                    <span>מהקומה העליונה כבר</span>
                    <br></br>
                    <span>רואים את הסוף</span>
                    <br></br>
                    <span>כ-36 חודשים</span>
                  </span>
                </div>
                <span className="urban-renew-text135">5</span>
              </div>
              <div className="urban-renew-frame1401">
                <div className="urban-renew-frame1364">
                  <span className="urban-renew-text136">
                    <span>עוד בירוקרטיה</span>
                  </span>
                  <span className="urban-renew-text138">
                    <span>רישוי וקבלת היתר בנייה</span>
                    <br></br>
                    <span>כ-24 חודשים מקליטת הבקשה</span>
                  </span>
                </div>
                <span className="urban-renew-text142">4</span>
              </div>
              <div className="urban-renew-frame1381">
                <div className="urban-renew-frame1365">
                  <span className="urban-renew-text143">
                    <span>בירוקרטיה</span>
                  </span>
                  <span className="urban-renew-text145">
                    <span>תכנון ואישור תב״ע</span>
                    <br></br>
                    <span>כ-36 חודשים</span>
                  </span>
                </div>
                <span className="urban-renew-text149">3</span>
              </div>
              <div className="urban-renew-frame1391">
                <div className="urban-renew-frame1366">
                  <span className="urban-renew-text150">
                    <span>שותפות</span>
                  </span>
                  <span className="urban-renew-text152">
                    <span>בחירת יזם וחתימה</span>
                    <br></br>
                    <span>על הסכם</span>
                  </span>
                </div>
                <span className="urban-renew-text156">2</span>
              </div>
              <div className="urban-renew-frame1371">
                <div className="urban-renew-frame135">
                  <span className="urban-renew-text157">
                    <span>התנעה</span>
                  </span>
                  <span className="urban-renew-text159">
                    <span>מינוי נציגות דיירים, עו״ד ומפקח</span>
                  </span>
                </div>
                <span className="urban-renew-text161">1</span>
              </div>
            </div>
            <div>
              <div className="urban-renew-container7">
                <Script
                  html={`<style>
svg .svg-elem-1 {
  stroke-dashoffset: 20370.94921875px;
  stroke-dasharray: 20370.94921875px;
  -webkit-transition: stroke-dashoffset 5s cubic-bezier(0.47, 0, 0.745, 0.715) 0s;
          transition: stroke-dashoffset 5s cubic-bezier(0.47, 0, 0.745, 0.715) 0s;
}

svg.active .svg-elem-1 {
  stroke-dashoffset: 0;
}
</style>`}
                ></Script>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .urban-renew-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .urban-renew-header-1 {
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
          .urban-renew-navbar-interactive {
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
          .urban-renew-search {
            flex: 0 0 auto;
            width: 5%;
            height: 40px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .urban-renew-image {
            width: 24px;
            cursor: pointer;
            filter: invert();
            object-fit: cover;
          }
          .urban-renew-logo {
            flex: 0 0 auto;
            width: 90%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .urban-renew-image1 {
            cursor: pointer;
            filter: invert();
            height: auto;
            align-self: center;
            text-decoration: none;
          }
          .urban-renew-desktop-menu {
            flex: 1;
            display: none;
            justify-content: space-between;
          }
          .urban-renew-links {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .urban-renew-text001 {
            margin-left: var(--dl-space-space-twounits);
          }
          .urban-renew-text002 {
            margin-left: var(--dl-space-space-twounits);
          }
          .urban-renew-text003 {
            margin-left: var(--dl-space-space-twounits);
          }
          .urban-renew-text004 {
            margin-left: var(--dl-space-space-twounits);
          }
          .urban-renew-buttons {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .urban-renew-login {
            border-width: 0px;
            margin-right: var(--dl-space-space-twounits);
          }
          .urban-renew-burger-menu {
            width: 5%;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .urban-renew-image2 {
            fill: var(--dl-color-carasso-plainwhite);
            width: auto;
            cursor: pointer;
            filter: invert();
            height: 10px;
            object-fit: cover;
          }
          .urban-renew-icon {
            fill: #d9d9d9;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: none;
          }
          .urban-renew-mobile-menu {
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
          .urban-renew-megamenudefault {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: var(--dl-color-carasso-plainwhite);
          }
          .urban-renew-container1 {
            display: flex;
            padding: 0 90px 0 0;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            justify-content: flex-end;
          }
          .urban-renew-leftcoloumn {
            gap: 10px;
            padding: 10px;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
          }
          .urban-renew-image3 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .urban-renew-rightcoloumn {
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
          .urban-renew-vector {
            top: 363px;
            left: 180px;
            width: 529px;
            height: 595px;
            position: absolute;
          }
          .urban-renew-navigationbarmenuopen {
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
          .urban-renew-search1 {
            width: 36px;
            height: 36px;
          }
          .urban-renew-logo1 {
            width: 80px;
            height: 40px;
          }
          .urban-renew-hamburger {
            width: 36px;
            height: 36px;
          }
          .urban-renew-navcontent {
            gap: 80px;
            display: flex;
            z-index: 2;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
            justify-content: space-between;
          }
          .urban-renew-navlinks {
            gap: 32px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .urban-renew-frame139 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .urban-renew-arrow11 {
            width: 20px;
            height: 1px;
          }
          .urban-renew-text005 {
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
          .urban-renew-frame138 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .urban-renew-text007 {
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
          .urban-renew-frame137 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .urban-renew-vector1 {
            width: 10px;
            height: 5px;
          }
          .urban-renew-text009 {
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
          .urban-renew-frame140 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .urban-renew-text011 {
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
          .urban-renew-frame141 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .urban-renew-text013 {
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
          .urban-renew-frame142 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .urban-renew-text015 {
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
          .urban-renew-bottomdetails {
            gap: 25px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .urban-renew-personalareacontainer {
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
          .urban-renew-personalarea {
            gap: 6px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .urban-renew-text017 {
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
          .urban-renew-user-circle {
            width: 18px;
            height: 18px;
          }
          .urban-renew-contactdetails {
            gap: 176px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .urban-renew-frame123 {
            gap: 8px;
            height: 76px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .urban-renew-instagram-logo {
            width: 20px;
            height: 20px;
          }
          .urban-renew-linkedin-logo {
            width: 20px;
            height: 20px;
          }
          .urban-renew-facebook-logo {
            width: 20px;
            height: 20px;
          }
          .urban-renew-frame133 {
            gap: 18px;
            height: 76px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .urban-renew-text019 {
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
          .urban-renew-text021 {
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
          .urban-renew-text023 {
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
          .urban-renew-header {
            gap: 32px;
            width: 1440px;
            display: none;
            padding: 0 90px;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            flex-shrink: 0;
            margin-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .urban-renew-navigationbar {
            gap: 526px;
            display: flex;
            padding: 15px 30px;
            flex-grow: 1;
            box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.05000000074505806);
            align-items: center;
            border-color: rgba(255, 255, 255, 0.800000011920929);
            border-style: solid;
            border-width: 1px;
            border-radius: 15px;
            justify-content: space-between;
            background-color: rgba(255, 255, 255, 0.699999988079071);
          }
          .urban-renew-search2 {
            width: 36px;
            filter: invert();
            height: 36px;
          }
          .urban-renew-logo2 {
            width: 80px;
            height: 40px;
          }
          .urban-renew-hamburger1 {
            width: 36px;
            height: 36px;
          }
          .urban-renew-herourbanrenewal {
            gap: 50px;
            width: 100%;
            height: auto;
            display: flex;
            padding: 70px 0;
            overflow: hidden;
            margin-top: var(--dl-space-space-sixunits);
            align-items: flex-end;
            flex-shrink: 0;
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: center;
            background-color: rgba(236, 241, 239, 1);
          }
          .urban-renew-container2 {
            display: flex;
            padding: 0 90px;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .urban-renew-vector2 {
            top: -13px;
            left: 1078px;
            width: 544px;
            height: 408px;
            position: absolute;
          }
          .urban-renew-leftcoloumn1 {
            gap: 20px;
            display: flex;
            z-index: 1;
            align-items: flex-start;
          }
          .urban-renew-content {
            gap: 60px;
            display: flex;
            align-items: flex-start;
          }
          .urban-renew-frame144 {
            gap: 28px;
            width: 273.3333435058594px;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .urban-renew-flag-pennant {
            width: 64px;
            height: 64px;
          }
          .urban-renew-text025 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text027 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-frame {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .urban-renew-frame224 {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .urban-renew-caret-down {
            width: 12px;
            height: 12px;
          }
          .urban-renew-text029 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-frame226 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .urban-renew-frame125 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .urban-renew-text031 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-arrow7-stroke {
            width: 8px;
            height: 7px;
          }
          .urban-renew-frame128 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .urban-renew-text033 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-arrow7-stroke1 {
            width: 8px;
            height: 7px;
          }
          .urban-renew-frame129 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .urban-renew-text035 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-arrow7-stroke2 {
            width: 8px;
            height: 7px;
          }
          .urban-renew-frame127 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .urban-renew-text037 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-arrow7-stroke3 {
            width: 8px;
            height: 7px;
          }
          .urban-renew-frame145 {
            gap: 28px;
            width: 273.33331298828125px;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .urban-renew-flag-pennant1 {
            width: 64px;
            height: 64px;
          }
          .urban-renew-text039 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text041 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-frame1 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .urban-renew-frame2241 {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .urban-renew-caret-down1 {
            width: 12px;
            height: 12px;
          }
          .urban-renew-text043 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-frame2261 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .urban-renew-frame1251 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .urban-renew-text045 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-arrow7-stroke4 {
            width: 8px;
            height: 7px;
          }
          .urban-renew-frame1281 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .urban-renew-text047 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-arrow7-stroke5 {
            width: 8px;
            height: 7px;
          }
          .urban-renew-frame1271 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .urban-renew-text049 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-arrow7-stroke6 {
            width: 8px;
            height: 7px;
          }
          .urban-renew-frame1291 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .urban-renew-text051 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-arrow7-stroke7 {
            width: 8px;
            height: 7px;
          }
          .urban-renew-frame146 {
            gap: 28px;
            width: 273.33331298828125px;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .urban-renew-flag-pennant2 {
            width: 64px;
            height: 64px;
          }
          .urban-renew-text053 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text055 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-frame2 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .urban-renew-frame2242 {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .urban-renew-caret-down2 {
            width: 12px;
            height: 12px;
          }
          .urban-renew-text057 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text059 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text060 {
            font-weight: 300;
          }
          .urban-renew-rightcoloumn1 {
            gap: 10px;
            display: flex;
            z-index: 2;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
            justify-content: space-between;
          }
          .urban-renew-text063 {
            color: var(--dl-color-carasso-primaryblack);
            width: 224px;
            height: auto;
            font-size: 32px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text064 {
            font-weight: 300;
          }
          .urban-renew-carassobutton {
            gap: 12px;
            display: flex;
            padding: 0 0 12px;
            align-items: flex-start;
            border-color: rgba(42, 42, 42, 1);
            border-style: solid;
            border-width: 0 0 1px;
          }
          .urban-renew-frame1231 {
            gap: 12px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .urban-renew-arrow7-stroke8 {
            width: 8px;
            height: 7px;
          }
          .urban-renew-text066 {
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
          .urban-renew-container3 {
            width: auto;
            height: auto;
            display: flex;
            padding: 0 90px;
            z-index: 1;
            align-self: center;
            align-items: center;
            flex-shrink: 0;
            margin-bottom: var(--dl-space-space-sixunits);
          }
          .urban-renew-backgroundelipse {
            gap: 10px;
            display: flex;
            align-items: flex-start;
            border-color: rgba(0, 177, 64, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 999px;
          }
          .urban-renew-content1 {
            gap: 28px;
            width: 1260px;
            display: flex;
            z-index: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .urban-renew-projectsandheaders {
            gap: 44px;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .urban-renew-text068 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 50px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 300;
            line-height: 110%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text069 {
            font-weight: 300;
          }
          .urban-renew-text070 {
            font-weight: 700;
          }
          .urban-renew-tabs {
            gap: 40px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            padding-left: var(--dl-space-space-twounits);
            justify-content: flex-end;
          }
          .urban-renew-frame156 {
            gap: 10px;
            display: flex;
            padding: 0 0 12px;
            align-items: center;
            justify-content: center;
          }
          .urban-renew-text071 {
            color: var(--dl-color-carasso-darkergray);
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
          .urban-renew-frame154 {
            gap: 10px;
            display: flex;
            padding: 0 0 12px;
            align-items: center;
            border-color: rgba(0, 177, 64, 1);
            border-style: solid;
            border-width: 0 0 1px;
            justify-content: center;
          }
          .urban-renew-text073 {
            color: var(--dl-color-carasso-green);
            height: auto;
            font-size: 24px;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-urbanrenewalprojects {
            gap: 20px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .urban-renew-rightcoloumn2 {
            gap: 50px;
            height: 445px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .urban-renew-projectcardgridviewnarrow {
            gap: 30px;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .urban-renew-projectimageandtags {
            display: flex;
            padding: 30px;
            flex-grow: 1;
            align-self: stretch;
            box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.10000000149011612);
            border-radius: 20px;
            flex-direction: column;
            background-size: cover;
            justify-content: space-between;
            background-image: url('/1fff79fb16c5cb75fb3cfda99ba4dc3b-1300w.jpeg');
            background-repeat: no-repeat;
          }
          .urban-renew-frame33 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .urban-renew-projectdetails {
            gap: 108px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .urban-renew-projectdetails1 {
            gap: 30px;
            width: 560px;
            display: flex;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .urban-renew-projectnamelocation {
            gap: 20px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .urban-renew-text075 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 16px;
            font-style: Bold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 700;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text077 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 50px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-rightcoloumn3 {
            gap: 50px;
            height: 445px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .urban-renew-projectimageandtags1 {
            display: flex;
            padding: 30px;
            flex-grow: 1;
            align-self: stretch;
            box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.10000000149011612);
            align-items: flex-end;
            border-radius: 20px;
            flex-direction: column;
            background-size: cover;
            justify-content: space-between;
            background-image: url('/7bf6c9d4a441e73511f0390b6b541a6b-1300w.jpeg');
          }
          .urban-renew-frame331 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .urban-renew-projectdetails2 {
            gap: 108px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .urban-renew-projectdetails3 {
            gap: 30px;
            width: 560px;
            display: flex;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .urban-renew-projectnamelocation1 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .urban-renew-text079 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 16px;
            font-style: Bold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 700;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text081 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 50px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text083 {
            color: var(--dl-color-carasso-plainwhite);
            width: 513px;
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-bottomrow {
            gap: 1153px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .urban-renew-leftrightarrows {
            gap: 15px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
          }
          .urban-renew-arrow {
            width: 28px;
            height: 28px;
          }
          .urban-renew-arrow1 {
            width: 28px;
            height: 28px;
          }
          .urban-renew-gallerydots {
            gap: 8px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .urban-renew-frame162 {
            width: 6px;
            height: 6px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 99px;
            background-color: var(--dl-color-carasso-graytextcolor);
          }
          .urban-renew-frame167 {
            width: 6px;
            height: 6px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 99px;
            background-color: var(--dl-color-carasso-graytextcolor);
          }
          .urban-renew-frame166 {
            width: 8px;
            height: 8px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 99px;
            background-color: var(--dl-color-carasso-primaryblack);
          }
          .urban-renew-container4 {
            gap: 60px;
            width: 100%;
            height: auto;
            display: flex;
            padding: 0 90px;
            align-self: stretch;
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: center;
          }
          .urban-renew-vector3 {
            top: 279px;
            left: 1147px;
            width: 457px;
            height: 546px;
            position: absolute;
          }
          .urban-renew-content2 {
            gap: 60px;
            display: flex;
            z-index: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .urban-renew-frame222 {
            gap: 40px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .urban-renew-text085 {
            color: rgb(0, 177, 64);
            height: auto;
            font-size: 50px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 300;
            line-height: 110%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text086 {
            font-weight: 300;
          }
          .urban-renew-text087 {
            font-weight: 700;
          }
          .urban-renew-team {
            gap: 20px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .urban-renew-memberblock {
            width: 300px;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(166, 196, 177, 1);
            border-style: solid;
            border-width: 0.5px;
            border-radius: 20px;
            flex-direction: column;
            background-color: var(--dl-color-carasso-backgroundcolor);
          }
          .urban-renew-topimage {
            gap: 10px;
            width: 100%;
            height: 347px;
            display: flex;
            padding: 10px;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            background-size: cover;
            background-image: url('/top-image-400h.png');
          }
          .urban-renew-bottomtext {
            display: flex;
            padding: 22px 24px 20px;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .urban-renew-frame280 {
            gap: 16px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .urban-renew-text088 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text090 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-memberblock1 {
            width: 300px;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(166, 196, 177, 1);
            border-style: solid;
            border-width: 0.5px;
            border-radius: 20px;
            flex-direction: column;
            background-color: var(--dl-color-carasso-backgroundcolor);
          }
          .urban-renew-topimage1 {
            gap: 10px;
            height: 347px;
            display: flex;
            padding: 10px;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            background-size: cover;
            background-image: url('/top-image%20(1)1-400h.png');
          }
          .urban-renew-bottomtext1 {
            display: flex;
            padding: 22px 24px 20px;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .urban-renew-frame2801 {
            gap: 16px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .urban-renew-text092 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text094 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-memberblock2 {
            width: 300px;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(166, 196, 177, 1);
            border-style: solid;
            border-width: 0.5px;
            border-radius: 20px;
            flex-direction: column;
            background-color: var(--dl-color-carasso-backgroundcolor);
          }
          .urban-renew-topimage2 {
            gap: 10px;
            height: 347px;
            display: flex;
            padding: 10px;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            background-size: cover;
            background-image: url('/top-image-400h.png');
          }
          .urban-renew-bottomtext2 {
            display: flex;
            padding: 22px 24px 20px;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .urban-renew-frame279 {
            gap: 16px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .urban-renew-text096 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text098 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-memberblock3 {
            width: 300px;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(166, 196, 177, 1);
            border-style: solid;
            border-width: 0.5px;
            border-radius: 20px;
            flex-direction: column;
            background-color: var(--dl-color-carasso-backgroundcolor);
          }
          .urban-renew-topimage3 {
            gap: 10px;
            height: 347px;
            display: flex;
            padding: 10px;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            background-size: cover;
            background-image: url('/top-image%20(1)1-400h.png');
          }
          .urban-renew-bottomtext3 {
            display: flex;
            padding: 22px 24px 20px;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .urban-renew-frame2791 {
            gap: 16px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .urban-renew-text100 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text102 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-content2 {
            gap: 40px;
            display: flex;
            z-index: 2;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .urban-renew-frame1261158166 {
            gap: 30px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .urban-renew-text104 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 32px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 129.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text106 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 129.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-frame218 {
            gap: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .urban-renew-image18 {
            width: 81px;
            height: 84px;
          }
          .urban-renew-frame219 {
            gap: 14.51128101348877px;
            display: flex;
            padding: 0 0 5.804512023925781px;
            align-items: center;
            justify-content: center;
          }
          .urban-renew-image16 {
            width: 82px;
            height: 82px;
          }
          .urban-renew-image17 {
            width: 61px;
            height: 51px;
          }
          .urban-renew-herourbanrenewal1 {
            gap: 50px;
            width: 100%;
            height: 1076px;
            display: flex;
            padding: 120px 0 0;
            overflow: hidden;
            align-items: flex-end;
            flex-shrink: 0;
            padding-top: 45px;
            flex-direction: column;
            background-color: rgba(236, 241, 239, 1);
          }
          .urban-renew-container5 {
            gap: 60px;
            display: flex;
            padding: 0 90px;
            z-index: 1;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
            background-size: cover;
            justify-content: space-between;
            background-image: url('/room.svg');
          }
          .urban-renew-text108 {
            color: rgba(20, 103, 50, 1);
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
          .urban-renew-text109 {
            font-weight: 300;
          }
          .urban-renew-steps {
            gap: 30px;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            justify-content: space-between;
          }
          .urban-renew-frame136 {
            gap: 12px;
            display: flex;
            padding: 10px 0 0;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .urban-renew-frame1261158169 {
            gap: 12px;
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
          }
          .urban-renew-frame1361 {
            gap: 12px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .urban-renew-text111 {
            color: rgba(19, 103, 49, 1);
            height: auto;
            font-size: 18px;
            font-style: Bold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text113 {
            color: rgb(19, 103, 49);
            width: 100%;
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 400;
            line-height: 19px;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text117 {
            color: rgba(19, 103, 49, 1);
            height: auto;
            font-size: 80px;
            font-style: Light;
            text-align: left;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-frame1421 {
            gap: 12px;
            display: flex;
            padding: 100px 0 0;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .urban-renew-frame1261158168 {
            gap: 12px;
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
          }
          .urban-renew-frame1362 {
            gap: 12px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .urban-renew-text118 {
            color: rgba(19, 103, 49, 1);
            height: auto;
            font-size: 18px;
            font-style: Bold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text120 {
            color: rgb(19, 103, 49);
            width: 100%;
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 400;
            line-height: 19px;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text126 {
            color: rgba(19, 103, 49, 1);
            height: auto;
            font-size: 80px;
            font-style: Light;
            text-align: left;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-frame1411 {
            gap: 12px;
            display: flex;
            padding: 0 30px 340px 0;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            justify-content: flex-end;
          }
          .urban-renew-frame1363 {
            gap: 12px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .urban-renew-text127 {
            color: rgba(19, 103, 49, 1);
            height: auto;
            font-size: 18px;
            font-style: Bold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text129 {
            color: rgb(19, 103, 49);
            width: 100%;
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 400;
            line-height: 19px;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text135 {
            color: rgba(19, 103, 49, 1);
            height: auto;
            font-size: 80px;
            font-style: Light;
            text-align: left;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-frame1401 {
            gap: 12px;
            display: flex;
            padding: 0 20px 260px 0;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            justify-content: flex-end;
          }
          .urban-renew-frame1364 {
            gap: 12px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .urban-renew-text136 {
            color: rgba(19, 103, 49, 1);
            height: auto;
            font-size: 18px;
            font-style: Bold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text138 {
            color: rgb(19, 103, 49);
            width: 100%;
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 400;
            line-height: 19px;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text142 {
            color: rgba(19, 103, 49, 1);
            height: auto;
            font-size: 80px;
            font-style: Light;
            text-align: left;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-frame1381 {
            gap: 12px;
            display: flex;
            padding: 0 0 260px;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            justify-content: flex-end;
          }
          .urban-renew-frame1365 {
            gap: 12px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .urban-renew-text143 {
            color: rgba(19, 103, 49, 1);
            height: auto;
            font-size: 18px;
            font-style: Bold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text145 {
            color: rgb(19, 103, 49);
            width: 100%;
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 400;
            line-height: 19px;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text149 {
            color: rgba(19, 103, 49, 1);
            height: auto;
            font-size: 80px;
            font-style: Light;
            text-align: left;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-frame1391 {
            gap: 12px;
            display: flex;
            padding: 0 50px 152px 0;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            justify-content: flex-end;
          }
          .urban-renew-frame1366 {
            gap: 12px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .urban-renew-text150 {
            color: rgba(19, 103, 49, 1);
            height: auto;
            font-size: 18px;
            font-style: Bold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text152 {
            color: rgb(19, 103, 49);
            width: 100%;
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 400;
            line-height: 19px;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text156 {
            color: rgba(19, 103, 49, 1);
            height: auto;
            font-size: 80px;
            font-style: Light;
            text-align: left;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-frame1371 {
            gap: 12px;
            display: flex;
            padding: 0 20px 85px 0;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            justify-content: flex-end;
          }
          .urban-renew-frame135 {
            gap: 12px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .urban-renew-text157 {
            color: rgba(19, 103, 49, 1);
            height: auto;
            font-size: 18px;
            font-style: Bold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text159 {
            color: rgba(19, 103, 49, 1);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 19px;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-text161 {
            color: rgba(19, 103, 49, 1);
            height: auto;
            font-size: 80px;
            font-style: Light;
            text-align: left;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .urban-renew-container7 {
            display: contents;
          }
          @media (max-width: 1920px) {
            .urban-renew-desktop-menu {
              display: none;
            }
            .urban-renew-burger-menu {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .urban-renew-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .urban-renew-burger-menu {
              align-items: center;
              justify-content: center;
            }
            .urban-renew-container1 {
              padding-right: 60px;
            }
            .urban-renew-leftcoloumn {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .urban-renew-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .urban-renew-mobile-menu {
              padding: 16px;
            }
            .urban-renew-container1 {
              padding-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default UrbanRenew
