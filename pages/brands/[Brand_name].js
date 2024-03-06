import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import brandsPageInitialPropsTqUEResource from '../../resources/brands-page-initial-props-tq_u-e'
import brandsPageInitialPathsTqA2Resource from '../../resources/brands-page-initial-paths-tq_a2'

const Brands = (props) => {
  return (
    <>
      <div className="brands-container">
        <Head>
          <title>Brands - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Brands - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <div className="brands-header-1">
          <header data-thq="thq-navbar" className="brands-navbar-interactive">
            <div className="brands-search">
              <img
                id="navsearch"
                alt="image"
                src="c90025b4-cd9e-4b10-b60e-83848d5a8914"
                className="brands-image"
              />
            </div>
            <div className="brands-logo">
              <Link href="/">
                <a className="brands-link">
                  <img
                    id="logo"
                    alt="logo"
                    src="/clogo.svg"
                    className="brands-image01"
                  />
                </a>
              </Link>
            </div>
            <div data-thq="thq-navbar-nav" className="brands-desktop-menu">
              <nav className="brands-links">
                <span>About</span>
                <span className="brands-text001">Features</span>
                <span className="brands-text002">Pricing</span>
                <span className="brands-text003">Team</span>
                <span className="brands-text004">Blog</span>
              </nav>
              <div className="brands-buttons">
                <button className="brands-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div data-thq="thq-burger-menu" className="brands-burger-menu">
              <img
                id="navmenu"
                alt="image"
                src="212659cd-3875-4ccd-947b-abbd25476938"
                className="brands-image02"
              />
              <svg viewBox="0 0 1024 1024" className="brands-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="brands-mobile-menu">
              <div className="brands-nav">
                <div className="brands-top">
                  <div data-thq="thq-close-menu" className="brands-close-menu">
                    <svg viewBox="0 0 1024 1024" className="brands-icon02">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                  <img
                    alt="image"
                    src="/clogo-no-fill.svg"
                    className="brands-logo1"
                  />
                </div>
                <nav className="brands-links1">
                  <span className="brands-text005">בלוג</span>
                  <span className="brands-text006">אודות</span>
                  <span className="brands-text007">צור קשר</span>
                  <span className="brands-text008">עוד אחד</span>
                  <span className="brands-text009">עוד אחד</span>
                </nav>
                <div className="brands-buttons1">
                  <button className="brands-login1 button">כפתור 2</button>
                  <button className="button">כפתור 1</button>
                </div>
              </div>
              <div className="brands-icon-group">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="brands-icon04"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="brands-icon06"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="brands-icon08"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
            <div>
              <div className="brands-container02">
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
              </div>
            </div>
          </header>
        </div>
        <DataProvider
          renderSuccess={(BrandsEntity) => (
            <>
              <div className="brands-main-hero">
                <img
                  alt={BrandsEntity?.Hero_image?.alt}
                  src={BrandsEntity?.Hero_image?.url}
                  loading="lazy"
                  className="brands-image03"
                />
                <div className="brands-bread-crumbs">
                  <div className="brands-breadcrumps">
                    <span className="brands-text010">
                      <span>פארק VICA</span>
                    </span>
                    <div className="brands-frame120"></div>
                    <span className="brands-text012">
                      <span>משרדים והייטק</span>
                    </span>
                    <div className="brands-frame119"></div>
                    <img
                      alt="House3842"
                      src="/external/house3842-dz3.svg"
                      className="brands-house"
                    />
                  </div>
                </div>
                <div className="brands-sidebarnavigation">
                  <div className="brands-container03">
                    <div className="brands-sidebar">
                      <img
                        alt="Vector3842"
                        src={
                          BrandsEntity?.Sidebar_logo?.url ||
                          'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/bd438ef8-05f7-4c29-9c01-eea7ae17edea/506e69b1-1a60-4ed7-adb8-8cd38d35752c?org_if_sml=1&q=80&force_format=original'
                        }
                        className="brands-vector"
                      />
                      <div className="brands-sidebarlinks">
                        <a href="#about" className="brands-text014">
                          <span>על המרכז</span>
                        </a>
                        <span className="brands-text016">
                          <span>החנויות</span>
                        </span>
                        <span className="brands-text018">
                          <span>הסביבה</span>
                        </span>
                        <span className="brands-text020">
                          <span>יצירת קשר</span>
                        </span>
                      </div>
                    </div>
                    <div className="brands-projectstatus">
                      <span className="brands-text022">
                        {BrandsEntity?.project_status}
                      </span>
                      <img
                        alt="Vector3842"
                        src="/external/vector3842-rf6.svg"
                        className="brands-vector01"
                      />
                    </div>
                  </div>
                </div>
                <div className="brands-hero">
                  <div className="brands-hero-body">
                    <div className="brands-centeredlogo">
                      <img
                        alt={BrandsEntity?.Main_logo?.alt || 'logo'}
                        src={
                          BrandsEntity?.Main_logo?.url ||
                          'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/bd438ef8-05f7-4c29-9c01-eea7ae17edea/506e69b1-1a60-4ed7-adb8-8cd38d35752c?org_if_sml=1&q=80&force_format=original'
                        }
                        loading="lazy"
                        className="brands-vector02"
                      />
                      <img
                        alt="Line473842"
                        src="/external/line473842-kj8l.svg"
                        className="brands-line47"
                      />
                      <span className="brands-text023">
                        {BrandsEntity?.City_c}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div id="about" className="brands-about-brand">
                <div className="brands-conceptimagecontainer">
                  <img
                    alt="image"
                    src={
                      BrandsEntity?.Main_featured_image?.url ||
                      'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/bd438ef8-05f7-4c29-9c01-eea7ae17edea/506e69b1-1a60-4ed7-adb8-8cd38d35752c?org_if_sml=1&q=80&force_format=original'
                    }
                    loading="lazy"
                    className="brands-image04"
                  />
                </div>
                <div className="brands-conceptdetailsblock">
                  <div className="brands-group1261158202">
                    <img
                      alt="Vector6012"
                      src="/external/vector6012-e0qr.svg"
                      className="brands-vector03"
                    />
                    <img
                      alt="Vector6012"
                      src="/external/vector6012-vcqk.svg"
                      className="brands-vector04"
                    />
                    <img
                      alt="Vector6012"
                      src="/external/vector6012-2cg2.svg"
                      className="brands-vector05"
                    />
                    <img
                      alt={BrandsEntity?.Secondary_featured_image?.alt}
                      src={
                        BrandsEntity?.Secondary_featured_image?.url ||
                        'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/bd438ef8-05f7-4c29-9c01-eea7ae17edea/506e69b1-1a60-4ed7-adb8-8cd38d35752c?org_if_sml=1&q=80&force_format=original'
                      }
                      loading="lazy"
                      className="brands-image05"
                    />
                  </div>
                  <div className="brands-conceptdetails">
                    <div className="brands-frame89">
                      <span className="brands-text024">
                        {BrandsEntity?.Main_title || ' '}
                      </span>
                      <span className="brands-text025">
                        {BrandsEntity?.Brand_Slogan}
                      </span>
                      <span className="brands-text026">
                        {BrandsEntity?.Main_description || ' '}
                      </span>
                    </div>
                    <div className="brands-frame90">
                      <div className="brands-projectnumbers">
                        <div className="brands-frame28">
                          <span className="brands-text027">15 אלף מ״ר</span>
                          <span className="brands-text028">משרדים ומסחר</span>
                        </div>
                        <div className="brands-frame29">
                          <span className="brands-text029">320</span>
                          <span className="brands-text030">דירות</span>
                        </div>
                        <div className="brands-frame27">
                          <span className="brands-text031">47</span>
                          <span className="brands-text032">קומות</span>
                        </div>
                        <div className="brands-frame26">
                          <span className="brands-text033">3</span>
                          <span className="brands-text034">מגדלים</span>
                        </div>
                      </div>
                      <div className="brands-projecttags">
                        <div className="brands-frame18">
                          <span className="brands-text035">ענק</span>
                        </div>
                        <div className="brands-frame19">
                          <span className="brands-text036">ליד הרכבת</span>
                        </div>
                        <div className="brands-frame16">
                          <span className="brands-text037">הייטק</span>
                        </div>
                        <div className="brands-frame15">
                          <span className="brands-text038">משרדים</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="brands-tabs">
                <div className="brands-title-div">
                  <span className="brands-text039">
                    {BrandsEntity?.Surrounding_title_regular}
                  </span>
                  <span className="brands-text040">
                    תמהיל
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <div
                  data-thq="slider"
                  data-loop="true"
                  data-autoplay="true"
                  data-navigation="false"
                  data-pagination="false"
                  className="brands-slider swiper"
                >
                  <div data-thq="slider-wrapper" className="swiper-wrapper">
                    <div
                      data-thq="slider-slide"
                      className="brands-slider-slide swiper-slide"
                    >
                      <div className="brands-facilities">
                        <div className="brands-container04">
                          <div className="brands-text041">
                            <span className="brands-text042">
                              החיבור שבין החנויות
                            </span>
                            <span className="brands-text043">
                              המרכז מתפרש על פני כ- 4,000 מ&quot;ר בשלושה מפלסי
                              מסחר וכולל תמהיל חנויות ושירותים המותאמים לאופי
                              התושבים, שטחים ציבוריים ירוקים וחניון תת קרקעי
                              נוח.
                            </span>
                          </div>
                          <div className="brands-container05">
                            <img
                              alt="image"
                              src="/external/intersect-400w-400w.webp"
                              className="brands-image06"
                            />
                            <div className="brands-frame100">
                              <img
                                alt="Rectangle7516012"
                                src="/external/rectangle%20751.svg"
                                className="brands-rectangle751"
                              />
                              <img
                                alt="Rectangle7516012"
                                src="/external/rectangle%20751.svg"
                                className="brands-rectangle7511"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="brands-container06">
                          <div className="brands-container07">
                            <img
                              alt="image"
                              src="/frame%2077-600w.png"
                              className="brands-image07"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-thq="slider-slide"
                      className="brands-slider-slide1 swiper-slide"
                    >
                      <div className="brands-facilities1">
                        <div className="brands-container08">
                          <div className="brands-text044">
                            <span className="brands-text045">
                              החיבור שבין החנויות
                            </span>
                            <span className="brands-text046">
                              המרכז מתפרש על פני כ- 4,000 מ&quot;ר בשלושה מפלסי
                              מסחר וכולל תמהיל חנויות ושירותים המותאמים לאופי
                              התושבים, שטחים ציבוריים ירוקים וחניון תת קרקעי
                              נוח.
                            </span>
                          </div>
                          <div className="brands-container09">
                            <img
                              alt="image"
                              src="/external/intersect-400w-400w.webp"
                              className="brands-image08"
                            />
                            <div className="brands-frame1001">
                              <img
                                alt="Rectangle7516012"
                                src="/external/rectangle%20751.svg"
                                className="brands-rectangle7512"
                              />
                              <img
                                alt="Rectangle7516012"
                                src="/external/rectangle%20751.svg"
                                className="brands-rectangle7513"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="brands-container10">
                          <div className="brands-container11">
                            <img
                              alt="image"
                              src="/frame%2077-600w.png"
                              className="brands-image09"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-thq="slider-pagination"
                    className="brands-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
                  ></div>
                  <div
                    data-thq="slider-button-prev"
                    className="brands-slider-button-prev swiper-button-prev"
                  ></div>
                  <div
                    data-thq="slider-button-next"
                    className="brands-slider-button-next swiper-button-next"
                  ></div>
                </div>
              </div>
              <div className="brands-frame115">
                <div className="brands-frame">
                  <span className="brands-text047">
                    {BrandsEntity?.Surrounding_title_bold}
                  </span>
                  <div className="brands-frame1201">
                    <div className="brands-frame7">
                      <span className="brands-text048">
                        {BrandsEntity?.Surrounding_title_3 ||
                          'הקו האדום ורכבת ישראל'}
                      </span>
                      <div className="brands-container12"></div>
                      <img
                        alt="image"
                        src={
                          BrandsEntity?.Surrounding_image_3?.url ||
                          'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/bd438ef8-05f7-4c29-9c01-eea7ae17edea/506e69b1-1a60-4ed7-adb8-8cd38d35752c?org_if_sml=1&q=80&force_format=original'
                        }
                        className="brands-image10"
                      />
                    </div>
                    <div className="brands-frame8">
                      <span className="brands-text049">
                        {BrandsEntity?.Surrounding_title_2 || 'בילוי ופנאי'}
                      </span>
                      <div className="brands-container13"></div>
                      <img
                        alt="image"
                        src={
                          BrandsEntity?.Surrounding_image_2?.url ||
                          'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/bd438ef8-05f7-4c29-9c01-eea7ae17edea/506e69b1-1a60-4ed7-adb8-8cd38d35752c?org_if_sml=1&q=80&force_format=original'
                        }
                        className="brands-image11"
                      />
                    </div>
                    <div className="brands-frame9">
                      <span className="brands-text050">
                        {BrandsEntity?.Surrounding_title_1 ||
                          'רחבת מסחר ייחודית'}
                      </span>
                      <img
                        alt="image66I6012"
                        src="/external/image66i6012-3cm6-200h.png"
                        className="brands-image66"
                      />
                      <div className="brands-container14"></div>
                      <img
                        alt="image"
                        src={
                          BrandsEntity?.Surrounding_image_1?.url ||
                          'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/bd438ef8-05f7-4c29-9c01-eea7ae17edea/506e69b1-1a60-4ed7-adb8-8cd38d35752c?org_if_sml=1&q=80&force_format=original'
                        }
                        className="brands-image12"
                      />
                    </div>
                  </div>
                  <span className="brands-text051">
                    {BrandsEntity?.Surrounding_description}
                  </span>
                </div>
              </div>
              <div className="brands-frame110">
                <img
                  alt="Rectangle7486012"
                  src={BrandsEntity?.Extra_singel_media_2?.url}
                  className="brands-rectangle748"
                />
                <img
                  alt="Fig166012"
                  src="/external/fig166012-fm8a.svg"
                  className="brands-fig16"
                />
                <img
                  alt="Ellipse956012"
                  src="/external/ellipse956012-8py9-600w.png"
                  className="brands-ellipse95"
                />
                <span className="brands-text052">
                  {BrandsEntity?.Street__c}
                </span>
                <div className="brands-group1261158147">
                  <img
                    alt="image546012"
                    src={BrandsEntity?.Extra_singel_media_1?.url}
                    className="brands-image54"
                  />
                  <div className="brands-group1261158148">
                    <img
                      alt="Rectangle7396012"
                      src="/external/rectangle7396012-0opb-200h.png"
                      className="brands-rectangle739"
                    />
                    <img
                      alt="X6012"
                      src="/external/x6012-gaep.svg"
                      className="brands-x"
                    />
                    <span className="brands-text053">
                      <span>פארק VICA</span>
                    </span>
                    <span className="brands-text055">
                      <span>קריית אריה, פתח תקווה</span>
                    </span>
                    <img
                      alt="MapPin6012"
                      src="/external/mappin6012-lu7f.svg"
                      className="brands-map-pin"
                    />
                  </div>
                  <div className="brands-frame81">
                    <img
                      alt="Rectangle7406012"
                      src="/external/rectangle7406012-afgl-200h.png"
                      className="brands-rectangle740"
                    />
                    <img
                      alt="FrameCorners6012"
                      src="/external/framecorners6012-jlv.svg"
                      className="brands-frame-corners"
                    />
                  </div>
                </div>
              </div>
              <div className="brands-frame111">
                <div className="brands-container15">
                  <div className="brands-container16"></div>
                  <img
                    alt="image"
                    src="/851df0bf0be15526c77002d5aea5cf5d-1400w.jpeg"
                    loading="lazy"
                    className="brands-image13"
                  />
                </div>
                <span className="brands-text057">
                  <span>הצוות שלנו ישמח לענות על כל שאלה שעולה לכם.</span>
                </span>
                <div className="brands-component10">
                  <img
                    alt="Rectangle722I6012"
                    src="/external/rectangle722i6012-87hd-200h.png"
                    className="brands-rectangle722"
                  />
                  <img
                    alt="Rectangle723I6012"
                    src="/external/rectangle723i6012-t2qb-200h.png"
                    className="brands-rectangle723"
                  />
                  <div className="brands-frame30">
                    <img
                      alt="Arrow7I6012"
                      src="/external/arrow7i6012-924j.svg"
                      className="brands-arrow7"
                    />
                    <span className="brands-text059">
                      <span>050 123 1234</span>
                    </span>
                  </div>
                </div>
                <div className="brands-component3">
                  <img
                    alt="Rectangle722I6012"
                    src="/external/rectangle722i6012-x5du-200h.png"
                    className="brands-rectangle7221"
                  />
                  <img
                    alt="Rectangle723I6012"
                    src="/external/rectangle723i6012-yvh-200h.png"
                    className="brands-rectangle7231"
                  />
                  <div className="brands-frame301">
                    <img
                      alt="Arrow7I6012"
                      src="/external/arrow7i6012-n2oo.svg"
                      className="brands-arrow71"
                    />
                    <span className="brands-text061">יצירת קשר</span>
                  </div>
                </div>
                <span className="brands-text062">
                  <span className="brands-text063">יצירת</span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>קשר</span>
                </span>
              </div>
              <div className="brands-wireframe52">
                <div className="brands-container17">
                  <button className="brands-carassobuttononhover">
                    <button className="brands-buttontextarrow">
                      <img
                        alt="Arrow7Stroke6012"
                        src="/external/arrow7stroke6012-el1p.svg"
                        className="brands-arrow7-stroke"
                      />
                      <span className="brands-text066">
                        <span>מרכזי קניות</span>
                      </span>
                    </button>
                    <button className="brands-buttongrayline">
                      <div className="brands-blacklineonhover"></div>
                    </button>
                  </button>
                  <span className="brands-text068">
                    <span>
                      פרויקטים
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>נוספים</span>
                  </span>
                </div>
                <div className="brands-container18">
                  <div className="brands-projectcardgridviewnarrow">
                    <div className="brands-projectimageandtags">
                      <div className="brands-projectstatus1">
                        <span className="brands-text071">
                          <span>בבנייה</span>
                        </span>
                        <img
                          alt="VectorI6012"
                          src="/external/vectori6012-h068.svg"
                          className="brands-vector06"
                        />
                      </div>
                      <img
                        alt="hadera10gardenc020ID5102212I6012"
                        src="/external/hadera10gardenc020id5102212i6012-1999-400w.png"
                        className="brands-hadera10gardenc020id5102212"
                      />
                    </div>
                    <div className="brands-projectdetails">
                      <div className="brands-projectdetails1">
                        <div className="brands-projectnamelocation">
                          <span className="brands-text073">
                            <span>תל אביב</span>
                          </span>
                          <span className="brands-text075">
                            <span>יד חרוצים</span>
                          </span>
                        </div>
                        <span className="brands-text077">
                          <span>
                            חוויית מגורים בה כל הטעמים מרגשים, בועטים, עוצמתיים
                            וייחודיים
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="brands-projectcardgridviewnarrow1">
                    <div className="brands-projectimageandtags1">
                      <img
                        alt="umamibgimageI6012"
                        src="/bs-400w.png"
                        className="brands-umamibgimage"
                      />
                      <div className="brands-projectstatus2">
                        <span className="brands-text079">
                          <span>בבנייה</span>
                        </span>
                        <img
                          alt="VectorI6012"
                          src="/external/vectori6012-r9h.svg"
                          className="brands-vector07"
                        />
                      </div>
                    </div>
                    <div className="brands-projectdetails2">
                      <div className="brands-projectdetails3">
                        <div className="brands-projectnamelocation1">
                          <span className="brands-text081">
                            <span>באר שבע</span>
                          </span>
                          <span className="brands-text083">
                            <span>מגדל קרסו</span>
                          </span>
                        </div>
                        <span className="brands-text085">
                          <span>
                            התאמה לסביבת המגורים התל אביבית התוצאה היא שילוב
                            מרשים של נוחות, איכות, נוסטלגיה וחדשנות.
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="brands-projectcardgridviewnarrow2">
                    <div className="brands-projectimageandtags2">
                      <img
                        alt="umamibgimageI6012"
                        src="/centercut-400w.png"
                        className="brands-umamibgimage1"
                      />
                      <div className="brands-projectstatus3">
                        <span className="brands-text087">
                          <span>נפתח</span>
                        </span>
                        <div className="brands-openbusiness">
                          <img
                            alt="VectorI6012"
                            src="/external/vectori6012-n9fe.svg"
                            className="brands-vector08"
                          />
                          <img
                            alt="Rectangle776I6012"
                            src="/external/rectangle776i6012-z7hr-200h.png"
                            className="brands-rectangle776"
                          />
                          <img
                            alt="Rectangle777I6012"
                            src="/external/rectangle777i6012-x7ph.svg"
                            className="brands-rectangle777"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="brands-projectdetails4">
                      <div className="brands-projectdetails5">
                        <div className="brands-projectnamelocation2">
                          <span className="brands-text089">
                            <span>תל אביב</span>
                          </span>
                          <span className="brands-text091">
                            <span>ריב״ל 10</span>
                          </span>
                        </div>
                        <span className="brands-text093">
                          <span>
                            חוויית מגורים בה כל הטעמים מרגשים, בועטים, עוצמתיים
                            וייחודיים
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          initialData={props.brandsEntity}
          persistDataDuringLoading={true}
          key={props?.brandsEntity?.Brand_name}
        />
        <div className="brands-footer">
          <div className="brands-footerdesktopmain">
            <img
              alt="Fig126965"
              src="/external/fig126965-pknj.svg"
              className="brands-fig12"
            />
            <div className="brands-frame54">
              <div className="brands-group">
                <div className="brands-group1">
                  <img
                    alt="Vector6965"
                    src="/external/vector6965-jajh.svg"
                    className="brands-vector09"
                  />
                  <img
                    alt="Vector6965"
                    src="/external/vector6965-hkrh.svg"
                    className="brands-vector10"
                  />
                  <img
                    alt="Vector6965"
                    src="/external/vector6965-nnc.svg"
                    className="brands-vector11"
                  />
                  <img
                    alt="Vector6965"
                    src="/external/vector6965-ig7x.svg"
                    className="brands-vector12"
                  />
                  <img
                    alt="Vector6965"
                    src="/external/vector6965-drf.svg"
                    className="brands-vector13"
                  />
                  <img
                    alt="Vector6965"
                    src="/external/vector6965-ba2g.svg"
                    className="brands-vector14"
                  />
                  <img
                    alt="Vector6965"
                    src="/external/vector6965-hbcl.svg"
                    className="brands-vector15"
                  />
                </div>
                <div className="brands-group2">
                  <img
                    alt="Vector6965"
                    src="/external/vector6965-wfu7.svg"
                    className="brands-vector16"
                  />
                  <img
                    alt="Vector6965"
                    src="/external/vector6965-3t9.svg"
                    className="brands-vector17"
                  />
                  <img
                    alt="Vector6965"
                    src="/external/vector6965-qmkk.svg"
                    className="brands-vector18"
                  />
                  <img
                    alt="Vector6965"
                    src="/external/vector6965-ozn8.svg"
                    className="brands-vector19"
                  />
                  <img
                    alt="Vector6965"
                    src="/external/vector6965-98td.svg"
                    className="brands-vector20"
                  />
                  <img
                    alt="Vector6965"
                    src="/external/vector6965-r4hf.svg"
                    className="brands-vector21"
                  />
                  <img
                    alt="Vector6965"
                    src="/external/vector6965-dlsb.svg"
                    className="brands-vector22"
                  />
                  <img
                    alt="Vector6965"
                    src="/external/vector6965-t0uv.svg"
                    className="brands-vector23"
                  />
                  <img
                    alt="Vector6965"
                    src="/external/vector6965-pqnt.svg"
                    className="brands-vector24"
                  />
                  <img
                    alt="Vector6965"
                    src="/external/vector6965-fg7g.svg"
                    className="brands-vector25"
                  />
                  <img
                    alt="Vector6965"
                    src="/external/vector6965-txt7c.svg"
                    className="brands-vector26"
                  />
                  <img
                    alt="Vector6965"
                    src="/external/vector6965-h6cd.svg"
                    className="brands-vector27"
                  />
                  <img
                    alt="Vector6965"
                    src="/external/vector6965-se1m.svg"
                    className="brands-vector28"
                  />
                  <img
                    alt="Vector6965"
                    src="/external/vector6965-qp5l.svg"
                    className="brands-vector29"
                  />
                  <img
                    alt="Vector6965"
                    src="/external/vector6965-fuf.svg"
                    className="brands-vector30"
                  />
                </div>
              </div>
            </div>
            <div className="brands-frame1261158169">
              <span className="brands-text095">
                <span>פרויקטים</span>
              </span>
              <div className="brands-frame1261158166">
                <span className="brands-text097">
                  <span>פרויקטים למגורים</span>
                </span>
                <span className="brands-text099">
                  <span>סיפורי הצלחה</span>
                </span>
                <span className="brands-text101">
                  <span>מרכזי קניות</span>
                </span>
                <span className="brands-text103">
                  <span>משרדים והייטק</span>
                </span>
              </div>
            </div>
            <div className="brands-frame1261158170">
              <span className="brands-text105">
                <span>החברה</span>
              </span>
              <div className="brands-frame1261158165">
                <span className="brands-text107">
                  <span>דף הבית</span>
                </span>
                <span className="brands-text109">
                  <span>הסיפור שלנו</span>
                </span>
                <span className="brands-text111">
                  <span>התחדשות עירונית</span>
                </span>
                <span className="brands-text113">
                  <span>חדשות ועידכונים</span>
                </span>
                <span className="brands-text115">
                  <span>יצירת קשר</span>
                </span>
              </div>
            </div>
            <div className="brands-frame1261158168">
              <span className="brands-text117">
                <span>פנו אלינו</span>
              </span>
              <div className="brands-frame1261158167">
                <div className="brands-frame133">
                  <span className="brands-text119">
                    <span>+972 050 123 1234</span>
                  </span>
                  <span className="brands-text121">
                    <span>ריב״ל 24, תל אביב-יפו</span>
                  </span>
                  <span className="brands-text123">
                    <span>info@carasso-nadlan.com</span>
                  </span>
                </div>
                <div className="brands-frame1261158158">
                  <img
                    alt="LinkedinLogo6965"
                    src="/external/linkedinlogo6965-4qjb.svg"
                    className="brands-linkedin-logo"
                  />
                  <img
                    alt="InstagramLogo6965"
                    src="/external/instagramlogo6965-f3vl.svg"
                    className="brands-instagram-logo"
                  />
                  <img
                    alt="FacebookLogo6965"
                    src="/external/facebooklogo6965-tllr.svg"
                    className="brands-facebook-logo"
                  />
                </div>
              </div>
            </div>
            <div className="brands-frame1261158164">
              <div className="brands-frame1261158157">
                <span className="brands-text125">
                  <span>קרדיטים</span>
                </span>
                <span className="brands-text127">
                  <span>מדיניות פרטיות</span>
                </span>
                <span className="brands-text129">
                  <span>הצהרת נגישות</span>
                </span>
                <span className="brands-text131">
                  <span>איסוף נתונים</span>
                </span>
                <span className="brands-text133">
                  <span>אחריות תאגידית</span>
                </span>
                <div className="brands-frame56">
                  <span className="brands-text135">
                    <span>2023 קרסו</span>
                  </span>
                  <img
                    alt="Copyright6965"
                    src="/external/copyright6965-wpnr.svg"
                    className="brands-copyright"
                  />
                </div>
              </div>
            </div>
            <div className="brands-contactus">
              <div className="brands-contactclose">
                <img
                  alt="Frame50I6965"
                  src="/external/frame50i6965-cf6.svg"
                  className="brands-frame50"
                />
                <span className="brands-text137">
                  <span>יצירת קשר</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .brands-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-carasso-backgroundcolor);
          }
          .brands-header-1 {
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
          .brands-navbar-interactive {
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
          .brands-search {
            flex: 0 0 auto;
            width: 5%;
            height: 40px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .brands-image {
            width: 24px;
            cursor: pointer;
            filter: invert();
            object-fit: cover;
          }
          .brands-logo {
            flex: 0 0 auto;
            width: 90%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .brands-link {
            display: contents;
          }
          .brands-image01 {
            cursor: pointer;
            filter: invert();
            height: auto;
            align-self: center;
            text-decoration: none;
          }
          .brands-desktop-menu {
            flex: 1;
            display: none;
            justify-content: space-between;
          }
          .brands-links {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .brands-text001 {
            margin-left: var(--dl-space-space-twounits);
          }
          .brands-text002 {
            margin-left: var(--dl-space-space-twounits);
          }
          .brands-text003 {
            margin-left: var(--dl-space-space-twounits);
          }
          .brands-text004 {
            margin-left: var(--dl-space-space-twounits);
          }
          .brands-buttons {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .brands-login {
            border-width: 0px;
            margin-right: var(--dl-space-space-twounits);
          }
          .brands-burger-menu {
            width: 5%;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .brands-image02 {
            fill: var(--dl-color-carasso-plainwhite);
            width: auto;
            cursor: pointer;
            filter: invert();
            height: 10px;
            object-fit: cover;
          }
          .brands-icon {
            fill: #d9d9d9;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: none;
          }
          .brands-mobile-menu {
            top: 0px;
            right: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 999;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #ffffff;
          }
          .brands-nav {
            width: 100%;
            display: flex;
            align-self: flex-end;
            align-items: flex-start;
            flex-direction: column;
          }
          .brands-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .brands-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .brands-icon02 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
          }
          .brands-logo1 {
            fill: var(--dl-color-carasso-primaryblack);
            filter: invert(1);
            height: 2rem;
          }
          .brands-links1 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-end;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands-text005 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .brands-text006 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .brands-text007 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .brands-text008 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .brands-text009 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .brands-buttons1 {
            display: flex;
            align-self: flex-end;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .brands-login1 {
            margin-right: var(--dl-space-space-twounits);
          }
          .brands-icon-group {
            align-self: flex-end;
          }
          .brands-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .brands-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .brands-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .brands-container02 {
            display: contents;
          }
          .brands-main-hero {
            flex: 0 0 auto;
            width: 100%;
            height: 100vh;
            display: flex;
            position: relative;
            flex-direction: column;
          }
          .brands-image03 {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            position: absolute;
            object-fit: cover;
          }
          .brands-bread-crumbs {
            display: flex;
            padding: 0 90px 20px;
            align-self: stretch;
            margin-top: 130px;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .brands-breadcrumps {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .brands-text010 {
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
          .brands-frame120 {
            width: 10px;
            height: 1px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: var(--dl-color-carasso-plainwhite);
          }
          .brands-text012 {
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
          .brands-frame119 {
            width: 10px;
            height: 1px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: var(--dl-color-carasso-plainwhite);
          }
          .brands-house {
            width: 24px;
            height: 24px;
          }
          .brands-sidebarnavigation {
            top: 280;
            right: 0px;
            height: auto;
            display: flex;
            z-index: 5;
            position: fixed;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .brands-container03 {
            gap: 16px;
            height: auto;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            margin-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
          }
          .brands-sidebar {
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
          .brands-vector {
            width: 80px;
            height: 22px;
          }
          .brands-sidebarlinks {
            gap: 29px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
          }
          .brands-text014 {
            color: var(--dl-color-carasso-primaryblack);
            cursor: pointer;
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
          .brands-text016 {
            color: var(--dl-color-carasso-primaryblack);
            cursor: pointer;
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
          .brands-text018 {
            color: var(--dl-color-carasso-primaryblack);
            cursor: pointer;
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
          .brands-text020 {
            color: var(--dl-color-carasso-primaryblack);
            cursor: pointer;
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
          .brands-projectstatus {
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
          .brands-text022 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 500;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-vector01 {
            width: 13px;
            height: 12px;
          }
          .brands-hero {
            gap: 50px;
            width: 100%;
            height: 800px;
            display: flex;
            padding: 20px 0;
            overflow: hidden;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: space-between;
          }
          .brands-hero-body {
            gap: 40px;
            display: flex;
            padding: 0 90px;
            position: relative;
            flex-grow: 1;
            align-self: center;
            align-items: center;
            justify-content: flex-end;
          }
          .brands-centeredlogo {
            gap: 38px;
            display: flex;
            z-index: 1;
            align-items: center;
            flex-direction: column;
          }
          .brands-vector02 {
            width: 325px;
            height: 89px;
          }
          .brands-line47 {
            width: 88px;
            height: 1px;
          }
          .brands-text023 {
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
          .brands-about-brand {
            width: 100%;
            height: 661px;
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-sixunits);
            align-items: flex-start;
            flex-shrink: 0;
            margin-bottom: var(--dl-space-space-sixunits);
            background-color: var(--dl-color-carasso-backgroundcolor);
          }
          .brands-conceptimagecontainer {
            gap: 10px;
            top: 0px;
            left: 0px;
            width: 906px;
            height: 661px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            border-radius: 0 20px 20px 0;
          }
          .brands-image04 {
            width: 902px;
            height: 100%;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
          }
          .brands-conceptdetailsblock {
            top: 0px;
            left: 930px;
            width: 514px;
            height: 661px;
            display: flex;
            padding: 85px 0;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
            background-color: var(--dl-color-carasso-backgroundcolor);
          }
          .brands-group1261158202 {
            top: -140px;
            left: -100px;
            width: 408px;
            height: 408.14581298828125px;
            display: flex;
            z-index: 1;
            position: absolute;
            align-items: center;
            flex-shrink: 1;
            justify-content: center;
          }
          .brands-vector03 {
            top: 24px;
            right: -66px;
            width: 247px;
            height: 352px;
            display: none;
            position: absolute;
          }
          .brands-vector04 {
            right: -94px;
            width: 247px;
            bottom: 5px;
            height: 352px;
            display: none;
            position: absolute;
          }
          .brands-vector05 {
            top: -4px;
            right: -39px;
            width: 247px;
            height: 352px;
            display: none;
            position: absolute;
          }
          .brands-image05 {
            width: 100%;
            object-fit: cover;
            animation-name: bounce;
            animation-delay: 0s;
            animation-duration: 5000ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .brands-conceptdetails {
            gap: 100px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
          }
          .brands-frame89 {
            gap: 0;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            justify-content: flex-start;
          }
          .brands-text024 {
            direction: rtl;
            font-size: 50px;
            font-style: normal;
            font-family: 'Ploni ML v2 AAA Bold';
            line-height: 1.15;
            font-stretch: normal;
            text-transform: none;
            text-decoration: none;
          }
          .brands-text025 {
            direction: rtl;
            font-size: 50px;
            font-family: 'Ploni ML v2 AAA Light';
            font-stretch: normal;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .brands-text026 {
            color: var(--dl-color-carasso-primaryblack);
            width: 407px;
            height: auto;
            direction: rtl;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: '' Ploni ML v2 AAA Light '';
            line-height: 140%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-frame90 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands-projectnumbers {
            gap: 30px;
            display: flex;
            align-items: flex-start;
          }
          .brands-frame28 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands-text027 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: DemiBold;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 400;
            line-height: 105%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-text028 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 300;
            line-height: 105%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-frame29 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands-text029 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: DemiBold;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 400;
            line-height: 105%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-text030 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 300;
            line-height: 105%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-frame27 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands-text031 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: DemiBold;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 400;
            line-height: 105%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-text032 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 300;
            line-height: 105%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-frame26 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands-text033 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: DemiBold;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 400;
            line-height: 105%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-text034 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 300;
            line-height: 105%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-projecttags {
            gap: 8px;
            display: flex;
            align-items: flex-start;
          }
          .brands-frame18 {
            gap: 10px;
            display: flex;
            padding: 7px;
            overflow: hidden;
            box-shadow: 0px 2px 23px 0px rgba(39, 39, 39, 0.10000000149011612);
            align-items: center;
            border-radius: 5px;
            justify-content: center;
            background-color: rgba(255, 255, 255, 1);
          }
          .brands-text035 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 14px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 300;
            line-height: 105%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-frame19 {
            gap: 10px;
            display: flex;
            padding: 7px;
            overflow: hidden;
            box-shadow: 0px 2px 23px 0px rgba(39, 39, 39, 0.10000000149011612);
            align-items: center;
            border-radius: 5px;
            justify-content: center;
            background-color: rgba(255, 255, 255, 1);
          }
          .brands-text036 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 14px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 300;
            line-height: 105%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-frame16 {
            gap: 10px;
            display: flex;
            padding: 7px;
            overflow: hidden;
            box-shadow: 0px 2px 23px 0px rgba(39, 39, 39, 0.10000000149011612);
            align-items: center;
            border-radius: 5px;
            justify-content: center;
            background-color: rgba(255, 255, 255, 1);
          }
          .brands-text037 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 14px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 300;
            line-height: 105%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-frame15 {
            gap: 10px;
            display: flex;
            padding: 7px;
            overflow: hidden;
            box-shadow: 0px 2px 23px 0px rgba(39, 39, 39, 0.10000000149011612);
            align-items: center;
            border-radius: 5px;
            justify-content: center;
            background-color: rgba(255, 255, 255, 1);
          }
          .brands-text038 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 14px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 300;
            line-height: 105%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-tabs {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-self: flex-end;
            align-items: flex-start;
            flex-direction: column;
          }
          .brands-title-div {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .brands-text039 {
            color: var(--dl-color-carasso-primaryblack);
            direction: rtl;
            font-size: 50px;
            align-self: flex-end;
            font-family: 'Ploni ML v2 AAA';
            line-height: 105%;
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .brands-text040 {
            color: var(--dl-color-carasso-primaryblack);
            direction: rtl;
            font-size: 50px;
            align-self: flex-end;
            font-family: 'Ploni ML v2 AAA';
            font-weight: bold;
            line-height: 105%;
            margin-right: 530px;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .brands-slider {
            width: 100%;
            height: auto;
            display: inline-block;
          }
          .brands-slider-slide {
            display: flex;
          }
          .brands-facilities {
            width: 100%;
            height: auto;
            display: flex;
            align-self: flex-end;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: row;
          }
          .brands-container04 {
            width: 798px;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .brands-text041 {
            width: auto;
            height: 347px;
            display: flex;
            align-self: flex-end;
            align-items: flex-end;
            margin-right: 90px;
            flex-direction: column;
          }
          .brands-text042 {
            color: rgb(0, 0, 0);
            height: auto;
            font-size: 24px;
            align-self: flex-end;
            font-style: DemiBold;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: bold;
            line-height: 140%;
            font-stretch: normal;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .brands-text043 {
            color: rgb(0, 0, 0);
            width: 393px;
            height: auto;
            font-size: 16px;
            align-self: flex-end;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 300;
            line-height: 140%;
            font-stretch: normal;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .brands-container05 {
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .brands-image06 {
            top: 190px;
            left: 354px;
            width: 353px;
            height: auto;
            position: absolute;
            align-self: flex-start;
            object-fit: cover;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .brands-frame100 {
            gap: 20px;
            width: 395px;
            height: auto;
            display: flex;
            position: relative;
            flex-direction: column;
          }
          .brands-rectangle751 {
            top: -184px;
            right: -550px;
            width: 591px;
            height: 359px;
            position: absolute;
            border-radius: 20px;
          }
          .brands-rectangle7511 {
            top: -162px;
            left: -28px;
            width: 735px;
            height: 457px;
            position: absolute;
          }
          .brands-container06 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .brands-container07 {
            flex: 0 0 auto;
            height: auto;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands-image07 {
            width: 592px;
            object-fit: cover;
            animation-name: slideInRight;
            animation-delay: 0s;
            animation-duration: 4000ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .brands-slider-slide1 {
            display: flex;
          }
          .brands-facilities1 {
            width: 100%;
            height: auto;
            display: flex;
            align-self: flex-end;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: row;
          }
          .brands-container08 {
            width: 798px;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .brands-text044 {
            width: auto;
            height: 347px;
            display: flex;
            align-self: flex-end;
            align-items: flex-end;
            margin-right: 90px;
            flex-direction: column;
          }
          .brands-text045 {
            color: rgb(0, 0, 0);
            height: auto;
            font-size: 24px;
            align-self: flex-end;
            font-style: DemiBold;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: bold;
            line-height: 140%;
            font-stretch: normal;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .brands-text046 {
            color: rgb(0, 0, 0);
            width: 393px;
            height: auto;
            font-size: 16px;
            align-self: flex-end;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 300;
            line-height: 140%;
            font-stretch: normal;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .brands-container09 {
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .brands-image08 {
            top: 190px;
            left: 354px;
            width: 353px;
            height: auto;
            position: absolute;
            align-self: flex-start;
            object-fit: cover;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .brands-frame1001 {
            gap: 20px;
            width: 395px;
            height: auto;
            display: flex;
            position: relative;
            flex-direction: column;
          }
          .brands-rectangle7512 {
            top: -184px;
            right: -550px;
            width: 591px;
            height: 359px;
            position: absolute;
            border-radius: 20px;
          }
          .brands-rectangle7513 {
            top: -162px;
            left: -28px;
            width: 735px;
            height: 457px;
            position: absolute;
          }
          .brands-container10 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .brands-container11 {
            flex: 0 0 auto;
            height: auto;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands-image09 {
            width: 592px;
            object-fit: cover;
            animation-name: slideInRight;
            animation-delay: 0s;
            animation-duration: 4000ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .brands-slider-pagination {
            display: none;
          }
          .brands-slider-button-prev {
            display: none;
          }
          .brands-slider-button-next {
            color: var(--dl-color-carasso-primaryblack);
            display: none;
          }
          .brands-frame115 {
            width: 1415px;
            height: 480px;
            display: flex;
            position: relative;
            overflow-y: visible;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .brands-frame {
            top: 25px;
            left: 90px;
            width: 1047px;
            height: 611px;
            display: flex;
            z-index: 1;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
            flex-direction: column;
          }
          .brands-text047 {
            left: 892px;
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            position: absolute;
            font-size: 50px;
            font-style: DemiBold;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: bold;
            line-height: 105%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-frame1201 {
            gap: 20px;
            top: 126px;
            left: 0px;
            width: 1047px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .brands-frame7 {
            width: 336px;
            height: 485px;
            display: flex;
            overflow: visible;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 20px;
            flex-direction: column;
          }
          .brands-text048 {
            top: 40px;
            left: 117px;
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            z-index: 2;
            position: absolute;
            font-size: 18px;
            font-style: DemiBold;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 400;
            line-height: 105%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-container12 {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 0;
            position: absolute;
            border-radius: var(--dl-radius-radius-radius20);
            flex-direction: column;
            background-image: radial-gradient(
              circle at center,
              rgba(0, 0, 0, 0) 36%,
              rgba(0, 0, 0, 0.75) 100%
            );
          }
          .brands-image10 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 20px;
          }
          .brands-frame8 {
            width: 335px;
            height: 485px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 20px;
            background-size: cover;
            background-image: linear-gradient(
                90deg,
                rgba(0, 0, 0, 0.1) 0%,
                rgba(44, 62, 80, 0.1) 100%
              ),
              url('/4677b535b495944f6afebaf67830914a-500h.jpeg');
          }
          .brands-text049 {
            top: 40px;
            left: 223px;
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            z-index: 2;
            position: absolute;
            font-size: 18px;
            font-style: DemiBold;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 400;
            line-height: 105%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-container13 {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 0;
            position: absolute;
            border-radius: var(--dl-radius-radius-radius20);
            flex-direction: column;
            background-image: radial-gradient(
              circle at center,
              rgba(0, 0, 0, 0) 36%,
              rgba(0, 0, 0, 0.75) 100%
            );
          }
          .brands-image11 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 20px;
          }
          .brands-frame9 {
            width: 336px;
            height: 485px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 20px;
            background-size: cover;
            background-image: linear-gradient(
                90deg,
                rgba(0, 0, 0, 0.1) 0%,
                rgba(0, 0, 0, 0.1) 100%
              ),
              url('/1fff79fb16c5cb75fb3cfda99ba4dc3b-500h.jpeg');
          }
          .brands-text050 {
            top: 40px;
            left: 152px;
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            z-index: 2;
            position: absolute;
            font-size: 18px;
            font-style: DemiBold;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 400;
            line-height: 105%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-image66 {
            top: 242px;
            left: 168px;
            width: 0px;
            height: 0px;
            position: absolute;
          }
          .brands-container14 {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 0;
            position: absolute;
            border-radius: var(--dl-radius-radius-radius20);
            flex-direction: column;
            background-image: radial-gradient(
              circle at center,
              rgba(0, 0, 0, 0) 36%,
              rgba(0, 0, 0, 0.75) 100%
            );
          }
          .brands-image12 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 20px;
          }
          .brands-text051 {
            left: 258px;
            color: var(--dl-color-carasso-primaryblack);
            width: 433px;
            height: auto;
            position: absolute;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 300;
            line-height: 140%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-frame110 {
            width: 100%;
            height: 938px;
            display: flex;
            position: relative;
            align-self: center;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: center;
          }
          .brands-rectangle748 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            height: 726px;
            margin: auto;
            position: absolute;
          }
          .brands-fig16 {
            top: 116px;
            left: 989px;
            width: 418px;
            height: 330px;
            position: absolute;
          }
          .brands-ellipse95 {
            top: 368px;
            left: -157px;
            width: 570px;
            height: 570px;
            position: absolute;
            border-color: rgba(144, 149, 154, 1);
            border-style: solid;
            border-width: 1px;
          }
          .brands-text052 {
            top: 283px;
            left: 1237px;
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            position: absolute;
            font-size: 50px;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: bold;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-group1261158147 {
            top: 361px;
            left: 338px;
            right: 0px;
            width: 1047px;
            height: 446px;
            margin: 0px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .brands-image54 {
            top: 0px;
            left: 0px;
            width: 1047px;
            height: 446px;
            position: absolute;
            border-radius: 20px;
          }
          .brands-group1261158148 {
            top: 123px;
            left: 442px;
            width: 144px;
            height: 175px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .brands-rectangle739 {
            top: 0px;
            left: 0px;
            width: 144px;
            height: 114px;
            position: absolute;
            border-radius: 10px;
          }
          .brands-x {
            top: 10px;
            left: 10px;
            width: 10px;
            height: 10px;
            position: absolute;
          }
          .brands-text053 {
            top: 40px;
            left: 48px;
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            position: absolute;
            font-size: 18px;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-text055 {
            top: 66px;
            left: 42px;
            color: var(--dl-color-carasso-primaryblack);
            width: 89px;
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-map-pin {
            top: 125px;
            left: 47px;
            width: 50px;
            height: 50px;
            position: absolute;
          }
          .brands-frame81 {
            top: 20px;
            left: 985px;
            width: 42px;
            height: 38px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .brands-rectangle740 {
            top: 0px;
            left: 0px;
            width: 42px;
            height: 38px;
            position: absolute;
            border-radius: 5px;
          }
          .brands-frame-corners {
            top: 3px;
            left: 5px;
            width: 32px;
            height: 32px;
            position: absolute;
          }
          .brands-frame111 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 0 20px 20px 0;
          }
          .brands-container15 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
          }
          .brands-container16 {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            opacity: 0.5;
            position: absolute;
            background: linear-gradient(
                0deg,
                rgba(43, 43, 43, 0.5) 0%,
                rgba(43, 43, 43, 0.5) 100%
              ),
              linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.3) 0%,
                rgba(0, 0, 0, 0.3) 100%
              ),
              #111 50% / cover no-repeat;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius20);
            flex-direction: column;
            background-blend-mode: normal, soft-light, normal;
            border-top-left-radius: 0px;
            border-bottom-left-radius: 0px;
          }
          .brands-image13 {
            width: 1380px;
            border-radius: var(--dl-radius-radius-radius20);
            border-top-left-radius: 0px;
            border-bottom-left-radius: 0px;
          }
          .brands-text057 {
            top: 594px;
            left: 986px;
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            position: absolute;
            direction: rtl;
            font-size: 18px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-component10 {
            left: 1008px;
            width: 115px;
            bottom: 48px;
            height: 25px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .brands-rectangle722 {
            top: 24px;
            left: 1px;
            width: 114px;
            height: 1px;
            position: absolute;
          }
          .brands-rectangle723 {
            top: 24px;
            left: 114px;
            width: 1px;
            height: 1px;
            opacity: 0;
            position: absolute;
          }
          .brands-frame30 {
            gap: 8px;
            top: 1px;
            left: 1px;
            width: 114px;
            cursor: pointer;
            display: flex;
            position: absolute;
            align-items: center;
          }
          .brands-arrow7 {
            width: 8px;
            height: 8px;
          }
          .brands-text059 {
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
          .brands-component3 {
            left: 1198px;
            width: 135px;
            bottom: 48px;
            height: 24px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .brands-rectangle7221 {
            top: 23px;
            left: 42px;
            width: 93px;
            height: 1px;
            position: absolute;
          }
          .brands-rectangle7231 {
            top: 23px;
            left: 134px;
            width: 1px;
            height: 1px;
            opacity: 0;
            position: absolute;
          }
          .brands-frame301 {
            gap: 8px;
            top: 0px;
            left: 42px;
            width: 93px;
            cursor: poi;
            display: flex;
            position: absolute;
            align-items: center;
            justify-content: flex-end;
          }
          .brands-arrow71 {
            width: 8px;
            height: 8px;
          }
          .brands-text061 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 18px;
            font-style: DemiBold;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 400;
            line-height: 140%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-text062 {
            top: 534px;
            left: 1123px;
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            position: absolute;
            font-size: 50px;
            font-style: DemiBold;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 400;
            line-height: 105%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-text063 {
            font-weight: 700;
          }
          .brands-wireframe52 {
            width: 1440px;
            height: 916px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: flex-end;
            background-color: var(--dl-color-carasso-backgroundcolor);
          }
          .brands-container17 {
            flex: 0 0 auto;
            width: 80%;
            height: 100px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
          }
          .brands-carassobuttononhover {
            gap: 12px;
            width: 99px;
            height: 24px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .brands-buttontextarrow {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .brands-arrow7-stroke {
            width: 8px;
            cursor: pointer;
            height: 7px;
          }
          .brands-text066 {
            color: var(--dl-color-carasso-primaryblack);
            cursor: pointer;
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
          .brands-buttongrayline {
            gap: 10px;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(187, 187, 187, 1);
          }
          .brands-blacklineonhover {
            width: 99px;
            height: 1px;
            display: flex;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            background-color: var(--dl-color-carasso-primaryblack);
          }
          .brands-text068 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 50px;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-container18 {
            flex: 0 0 auto;
            width: 80%;
            height: 671px;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .brands-projectcardgridviewnarrow {
            gap: 30px;
            width: 334px;
            height: 578px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .brands-projectimageandtags {
            gap: 10px;
            width: 334px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .brands-projectstatus1 {
            gap: 7px;
            top: 30px;
            right: 30px;
            display: flex;
            padding: 8px 15px;
            z-index: 1;
            position: absolute;
            align-items: center;
            border-radius: 9999px;
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.8500000238418579);
          }
          .brands-text071 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 14px;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-vector06 {
            width: 13px;
            height: 12px;
          }
          .brands-hadera10gardenc020id5102212 {
            width: 334px;
            height: 430px;
            border-radius: 20px;
          }
          .brands-projectdetails {
            gap: 108px;
            width: 334px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .brands-projectdetails1 {
            gap: 30px;
            width: 334px;
            display: flex;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: space-between;
          }
          .brands-projectnamelocation {
            gap: 20px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands-text073 {
            color: var(--dl-color-carasso-primaryblack);
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
          .brands-text075 {
            color: var(--dl-color-carasso-primaryblack);
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
          .brands-text077 {
            color: var(--dl-color-carasso-primaryblack);
            width: 195px;
            height: auto;
            font-size: 14px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-projectcardgridviewnarrow1 {
            gap: 30px;
            width: 334px;
            margin: var(--dl-space-space-unit);
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .brands-projectimageandtags1 {
            gap: 10px;
            width: 334px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .brands-umamibgimage {
            width: 334px;
            height: 430px;
            overflow: hidden;
            border-radius: 20px;
          }
          .brands-projectstatus2 {
            gap: 7px;
            top: 30px;
            right: 30px;
            display: flex;
            padding: 8px 15px;
            z-index: 1;
            position: absolute;
            align-items: center;
            border-radius: 9999px;
            background-color: rgba(255, 255, 255, 0.8500000238418579);
          }
          .brands-text079 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 14px;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-vector07 {
            width: 13px;
            height: 12px;
          }
          .brands-projectdetails2 {
            gap: 108px;
            width: 334px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .brands-projectdetails3 {
            gap: 30px;
            width: 334px;
            display: flex;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .brands-projectnamelocation1 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands-text081 {
            color: var(--dl-color-carasso-primaryblack);
            width: 160px;
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
          .brands-text083 {
            color: var(--dl-color-carasso-primaryblack);
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
          .brands-text085 {
            color: var(--dl-color-carasso-primaryblack);
            width: 280px;
            height: auto;
            font-size: 14px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-projectcardgridviewnarrow2 {
            gap: 30px;
            width: 334px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .brands-projectimageandtags2 {
            gap: 10px;
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .brands-umamibgimage1 {
            width: 334px;
            height: 430px;
            border-radius: 20px;
          }
          .brands-projectstatus3 {
            gap: 7px;
            top: 30px;
            right: 30px;
            display: flex;
            padding: 8px 15px;
            z-index: 1;
            position: absolute;
            align-items: center;
            border-radius: 9999px;
            background-color: rgba(255, 255, 255, 0.8500000238418579);
          }
          .brands-text087 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 14px;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-openbusiness {
            width: 14px;
            height: 11.24609375px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .brands-vector08 {
            top: 4.201171875px;
            left: 6px;
            width: 2px;
            height: 1px;
            position: absolute;
          }
          .brands-rectangle776 {
            top: 1.24609375px;
            left: 0px;
            width: 14px;
            height: 10px;
            position: absolute;
            border-color: rgba(42, 42, 42, 1);
            border-style: solid;
            border-width: 1px;
          }
          .brands-rectangle777 {
            top: 0px;
            left: 4px;
            width: 6px;
            height: 1px;
            position: absolute;
          }
          .brands-projectdetails4 {
            gap: 108px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .brands-projectdetails5 {
            gap: 30px;
            width: 334px;
            display: flex;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .brands-projectnamelocation2 {
            gap: 20px;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands-text089 {
            color: var(--dl-color-carasso-primaryblack);
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
          .brands-text091 {
            color: var(--dl-color-carasso-primaryblack);
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
          .brands-text093 {
            color: var(--dl-color-carasso-primaryblack);
            width: 195px;
            height: auto;
            font-size: 14px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands-footer {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-carasso-plainwhite);
          }
          .brands-footerdesktopmain {
            width: 1440px;
            height: 431px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: var(--dl-color-carasso-plainwhite);
          }
          .brands-fig12 {
            top: -320px;
            left: 424px;
            width: 1123px;
            height: 1122px;
            position: absolute;
          }
          .brands-frame54 {
            top: 74px;
            left: 1211px;
            width: 139px;
            height: 98px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .brands-group {
            top: 0.00001049041748046875px;
            left: 0.0001087188720703125px;
            width: 139.00335693359375px;
            height: 97.70420837402344px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .brands-group1 {
            top: 0px;
            left: 0px;
            width: 139.00335693359375px;
            height: 69.75921630859375px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .brands-vector09 {
            top: 60.7265625px;
            left: 87.546875px;
            width: 9px;
            height: 8px;
            position: absolute;
          }
          .brands-vector10 {
            top: 60.7265625px;
            left: 120.296875px;
            width: 9px;
            height: 8px;
            position: absolute;
          }
          .brands-vector11 {
            top: 8.91796875px;
            left: 8.09375px;
            width: 2px;
            height: 47px;
            position: absolute;
          }
          .brands-vector12 {
            top: 8.91796875px;
            left: 16.5px;
            width: 43px;
            height: 47px;
            position: absolute;
          }
          .brands-vector13 {
            top: 8.91796875px;
            left: 98.5625px;
            width: 40px;
            height: 61px;
            position: absolute;
          }
          .brands-vector14 {
            top: 8.91796875px;
            left: 56.0546875px;
            width: 37px;
            height: 47px;
            position: absolute;
          }
          .brands-vector15 {
            top: 0px;
            left: 0px;
            width: 6px;
            height: 6px;
            position: absolute;
          }
          .brands-group2 {
            top: 82.82421875px;
            left: 8.09375px;
            width: 130.90953063964844px;
            height: 14.879993438720703px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .brands-vector16 {
            top: 0.169921875px;
            left: 0px;
            width: 11px;
            height: 11px;
            position: absolute;
          }
          .brands-vector17 {
            top: 0.171875px;
            left: 13.265625px;
            width: 2px;
            height: 7px;
            position: absolute;
          }
          .brands-vector18 {
            top: 0.169921875px;
            left: 17.8359375px;
            width: 2px;
            height: 7px;
            position: absolute;
          }
          .brands-vector19 {
            top: 0.169921875px;
            left: 22.59375px;
            width: 11px;
            height: 11px;
            position: absolute;
          }
          .brands-vector20 {
            top: 0.169921875px;
            left: 41.859375px;
            width: 2px;
            height: 15px;
            position: absolute;
          }
          .brands-vector21 {
            top: 0.169921875px;
            left: 46.765625px;
            width: 2px;
            height: 11px;
            position: absolute;
          }
          .brands-vector22 {
            top: 0.171875px;
            left: 51.1328125px;
            width: 5px;
            height: 11px;
            position: absolute;
          }
          .brands-vector23 {
            top: 0.169921875px;
            left: 58px;
            width: 6px;
            height: 11px;
            position: absolute;
          }
          .brands-vector24 {
            top: 0.169921875px;
            left: 66.3671875px;
            width: 11px;
            height: 12px;
            position: absolute;
          }
          .brands-vector25 {
            top: 0.171875px;
            left: 85.609375px;
            width: 2px;
            height: 11px;
            position: absolute;
          }
          .brands-vector26 {
            top: 0.171875px;
            left: 89.96875px;
            width: 5px;
            height: 11px;
            position: absolute;
          }
          .brands-vector27 {
            top: 0.171875px;
            left: 97.828125px;
            width: 2px;
            height: 7px;
            position: absolute;
          }
          .brands-vector28 {
            top: 0.169921875px;
            left: 102.3984375px;
            width: 2px;
            height: 7px;
            position: absolute;
          }
          .brands-vector29 {
            top: 0px;
            left: 106.2890625px;
            width: 13px;
            height: 12px;
            position: absolute;
          }
          .brands-vector30 {
            top: 0.169921875px;
            left: 120.234375px;
            width: 11px;
            height: 11px;
            position: absolute;
          }
          .brands-frame1261158169 {
            gap: 40px;
            top: 83px;
            left: 633px;
            width: 123px;
            display: flex;
            position: absolute;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands-text095 {
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
          .brands-frame1261158166 {
            gap: 24px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands-text097 {
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
          .brands-text099 {
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
          .brands-text101 {
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
          .brands-text103 {
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
          .brands-frame1261158170 {
            gap: 40px;
            top: 83px;
            left: 906px;
            width: 124px;
            display: flex;
            position: absolute;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands-text105 {
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
          .brands-frame1261158165 {
            gap: 24px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands-text107 {
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
          .brands-text109 {
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
          .brands-text111 {
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
          .brands-text113 {
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
          .brands-text115 {
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
          .brands-frame1261158168 {
            gap: 40px;
            top: 83px;
            left: 291px;
            width: 202px;
            display: flex;
            position: absolute;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands-text117 {
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
          .brands-frame1261158167 {
            gap: 24px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands-frame133 {
            gap: 24px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
          }
          .brands-text119 {
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
          .brands-text121 {
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
          .brands-text123 {
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
          .brands-frame1261158158 {
            gap: 16px;
            display: flex;
            align-items: flex-start;
          }
          .brands-linkedin-logo {
            width: 24px;
            height: 24px;
          }
          .brands-instagram-logo {
            width: 24px;
            height: 24px;
          }
          .brands-facebook-logo {
            width: 24px;
            height: 24px;
          }
          .brands-frame1261158164 {
            gap: 10px;
            top: 348px;
            left: 291px;
            width: 739px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .brands-frame1261158157 {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .brands-text125 {
            color: var(--dl-color-carasso-graytextcolor);
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
          .brands-text127 {
            color: var(--dl-color-carasso-graytextcolor);
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
          .brands-text129 {
            color: var(--dl-color-carasso-graytextcolor);
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
          .brands-text131 {
            color: var(--dl-color-carasso-graytextcolor);
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
          .brands-text133 {
            color: var(--dl-color-carasso-graytextcolor);
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
          .brands-frame56 {
            gap: 5px;
            height: 12px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
          }
          .brands-text135 {
            color: var(--dl-color-carasso-graytextcolor);
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
          .brands-copyright {
            width: 16px;
            height: 16px;
          }
          .brands-contactus {
            top: 230px;
            left: 0px;
            width: 259px;
            height: 201px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .brands-contactclose {
            gap: 8px;
            top: 129px;
            left: 35px;
            width: 134px;
            display: flex;
            padding: 13px 16px;
            position: absolute;
            align-items: center;
            border-radius: 7px;
            background-color: var(--dl-color-carasso-primaryblack);
          }
          .brands-frame50 {
            width: 17px;
            height: 14px;
          }
          .brands-text137 {
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
            .brands-desktop-menu {
              display: none;
            }
            .brands-burger-menu {
              display: flex;
            }
          }
          @media (max-width: 1440px) {
            .brands-conceptimagecontainer {
              width: 623px;
            }
            .brands-image04 {
              width: 100%;
            }
            .brands-conceptdetailsblock {
              left: 623px;
            }
            .brands-group1261158202 {
              top: -100px;
              left: -90px;
            }
            .brands-vector03 {
              display: none;
            }
            .brands-vector04 {
              display: none;
            }
            .brands-vector05 {
              display: none;
            }
            .brands-image05 {
              width: 100%;
            }
            .brands-conceptdetails {
              width: 100%;
              padding-right: var(--dl-space-space-twounits);
            }
            .brands-text039 {
              margin-right: var(--dl-space-space-unit);
            }
            .brands-text040 {
              margin-right: 340px;
            }
            .brands-container04 {
              width: 512px;
              height: auto;
            }
            .brands-image06 {
              left: 54px;
            }
            .brands-rectangle751 {
              right: -250px;
            }
            .brands-rectangle7511 {
              left: -328px;
            }
            .brands-container08 {
              width: 512px;
              height: auto;
            }
            .brands-image08 {
              left: 54px;
            }
            .brands-rectangle7512 {
              right: -250px;
            }
            .brands-rectangle7513 {
              left: -328px;
            }
            .brands-frame {
              left: 45px;
            }
            .brands-text048 {
              color: var(--dl-color-carasso-plainwhite);
              font-size: 18px;
              font-family: Ploni ML v2 AAA;
              font-weight: 400;
              line-height: 105%;
              text-decoration: none;
            }
            .brands-text049 {
              color: var(--dl-color-carasso-plainwhite);
              font-size: 18px;
              font-family: Ploni ML v2 AAA;
              font-weight: 400;
              line-height: 105%;
              text-decoration: none;
            }
            .brands-text050 {
              color: var(--dl-color-carasso-plainwhite);
              font-size: 18px;
              font-family: Ploni ML v2 AAA;
              font-weight: 400;
              line-height: 105%;
              text-decoration: none;
            }
            .brands-fig16 {
              top: 98px;
              left: 689px;
              right: 306px;
            }
            .brands-text052 {
              top: 265px;
              left: 937px;
              right: 335px;
            }
            .brands-group1261158147 {
              left: 60px;
            }
            .brands-image13 {
              width: 1100px;
            }
            .brands-text057 {
              top: 394px;
              left: 686px;
            }
            .brands-component10 {
              left: 690px;
              bottom: 50px;
            }
            .brands-frame30 {
              width: 114px;
            }
            .brands-component3 {
              left: 900px;
              bottom: 50px;
            }
            .brands-text062 {
              top: 334px;
              left: 825px;
            }
            .brands-container17 {
              width: 77%;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: 0px;
            }
            .brands-container18 {
              width: 78%;
            }
            .brands-projectcardgridviewnarrow2 {
              margin-right: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 767px) {
            .brands-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .brands-burger-menu {
              align-items: center;
              justify-content: center;
            }
            .brands-text005 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .brands-text006 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .brands-text007 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .brands-text008 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .brands-text009 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .brands-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .brands-mobile-menu {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

Brands.defaultProps = {
  brandsEntity: [],
}

Brands.propTypes = {
  brandsEntity: PropTypes.array,
}

export default Brands

export async function getStaticProps(context) {
  try {
    const response = await brandsPageInitialPropsTqUEResource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        brandsEntity: response?.data?.[0],
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
    const response = await brandsPageInitialPathsTqA2Resource({})
    return {
      paths: (response?.data || []).map((item) => {
        return {
          params: {
            Brand_name: (item?.attributes?.Brand_name).toString(),
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
