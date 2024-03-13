import React, { useEffect } from 'react'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import posts7Resource from '../resources/posts7'

const FeaturedPost = (props) => {
  useEffect(() => import('@lottiefiles/lottie-player'), [])
  return (
    <>
      <div className="featured-post-featured-post">
        <DataProvider
          renderSuccess={(FeaturedOne) => (
            <>
              <img
                alt={props.vectorAlt}
                src={props.vectorSrc}
                className="featured-post-vector"
              />
              <div className="featured-post-leftcoloumn">
                <img
                  alt="image"
                  src={FeaturedOne?.Media?.url}
                  className="featured-post-image"
                />
              </div>
              <div className="featured-post-rightcoloumn">
                <div className="featured-post-frame296">
                  <span className="featured-post-text">הכתבה החמה</span>
                  <span className="featured-post-text1">
                    {FeaturedOne?.Title}
                  </span>
                  <span className="featured-post-text2">
                    {FeaturedOne?.Content}
                  </span>
                  <button className="featured-post-carassobutton">
                    <div className="featured-post-frame123">
                      <img
                        alt="Arrow7Stroke4859"
                        src="/external/arrow7stroke4859-994m.svg"
                        className="featured-post-arrow7-stroke"
                      />
                      <span className="featured-post-text3">
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
              <div className="featured-post-load">
                <div className="featured-post-div">
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
          initialData={props.featuredOneProp}
          persistDataDuringLoading={true}
          initialData={props.featuredOneProp}
          persistDataDuringLoading={true}
        />
      </div>
      <style jsx>
        {`
          .featured-post-featured-post {
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
          .featured-post-vector {
            top: -240px;
            left: 1066px;
            width: 564px;
            height: 633px;
            position: absolute;
          }
          .featured-post-leftcoloumn {
            gap: 20px;
            display: flex;
            z-index: 1;
            flex-grow: 1;
            align-items: flex-start;
            border-radius: 20px;
          }
          .featured-post-image {
            width: 100%;
            cursor: pointer;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .featured-post-rightcoloumn {
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
          .featured-post-frame296 {
            gap: 40px;
            height: auto;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .featured-post-text {
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
          .featured-post-text1 {
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
          .featured-post-text2 {
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
          .featured-post-carassobutton {
            gap: 12px;
            display: flex;
            align-items: flex-start;
          }
          .featured-post-frame123 {
            gap: 12px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            text-decoration: none;
          }
          .featured-post-arrow7-stroke {
            width: 8px;
            height: 7px;
          }
          .featured-post-text3 {
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
          .featured-post-load {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .featured-post-div {
            width: 300px;
            height: 300px;
          }
        `}
      </style>
    </>
  )
}

FeaturedPost.defaultProps = {
  text: 'בונה ממשק',
  vectorAlt: 'Vector4859',
  vectorSrc: '/external/blog_shape.svg',
  text1: 'בונה ממשק',
  vectorsrc: 'd1eb8480-a96c-47f4-8294-41058ea481e3',
  imagealt: 'image',
  featuredLink: '#',
  featuredTitle: 'איך נראת דירה לאנשים שאוהבים לארח ולבשל לכל המשפחה',
  featuredExcerpt:
    'בשנים האחרונות משקיעה החברה את מיטב המשאבים בפיתוח, תכנון והקמה של מגוון פרויקטים מתקדמים המשקפים',
  imagesrc: 'aeca6834-2546-43be-860f-90c72e5e07de',
}

FeaturedPost.propTypes = {
  text: PropTypes.string,
  vectorAlt: PropTypes.string,
  vectorSrc: PropTypes.string,
  text1: PropTypes.string,
  vectorsrc: PropTypes.string,
  imagealt: PropTypes.string,
  featuredLink: PropTypes.string,
  featuredTitle: PropTypes.string,
  featuredExcerpt: PropTypes.string,
  imagesrc: PropTypes.string,
}

export default FeaturedPost

export async function getStaticProps(context) {
  try {
    const featuredOneProp = await posts7Resource({
      ...context?.params,
    })
    if (!featuredOneProp?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    const featuredOneProp = await posts7Resource({
      ...context?.params,
    })
    if (!featuredOneProp?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        featuredOneProp: featuredOneProp?.data?.[0],
        featuredOneProp: featuredOneProp?.data?.[0],
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
