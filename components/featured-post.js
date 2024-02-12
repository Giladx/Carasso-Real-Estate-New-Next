import React from 'react'

import PropTypes from 'prop-types'

const FeaturedPost = (props) => {
  return (
    <>
      <div className="featured-post-featured-post">
        <img
          alt="Vector4859"
          src={props.vectorsrc}
          className="featured-post-vector"
        />
        <div className="featured-post-leftcoloumn">
          <img
            alt={props.imagealt}
            src={props.imagesrc}
            className="featured-post-image"
          />
        </div>
        <div className="featured-post-rightcoloumn">
          <div className="featured-post-frame296">
            <span className="featured-post-text">
              <span>הכתבה החמה</span>
            </span>
            <span className="featured-post-text2">{props.featuredTitle}</span>
            <span className="featured-post-text3">{props.featuredExcerpt}</span>
            <button className="featured-post-carassobutton">
              <a
                href={props.featuredLink}
                target="_blank"
                rel="noreferrer noopener"
                className="featured-post-link"
              >
                <div className="featured-post-frame123">
                  <img
                    alt="Arrow7Stroke4859"
                    src="/external/arrow7stroke4859-994m.svg"
                    className="featured-post-arrow7-stroke"
                  />
                  <span className="featured-post-text4">
                    <span>לקריאת הכתבה</span>
                  </span>
                </div>
              </a>
            </button>
          </div>
        </div>
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
            object-fit: cover;
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
            font-family: Ploni ML v2 AAA;
            font-weight: 700;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .featured-post-text2 {
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
          .featured-post-text3 {
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
          .featured-post-link {
            display: contents;
          }
          .featured-post-frame123 {
            gap: 12px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            text-decoration: none;
          }
          .featured-post-arrow7-stroke {
            width: 8px;
            height: 7px;
          }
          .featured-post-text4 {
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
        `}
      </style>
    </>
  )
}

FeaturedPost.defaultProps = {
  vectorsrc: '/blog_shape.svg',
  imagealt: 'image',
  featuredLink: '#',
  featuredTitle: 'איך נראת דירה לאנשים שאוהבים לארח ולבשל לכל המשפחה',
  featuredExcerpt:
    'בשנים האחרונות משקיעה החברה את מיטב המשאבים בפיתוח, תכנון והקמה של מגוון פרויקטים מתקדמים המשקפים',
  imagesrc: '/left-coloumn-news-1500w.webp',
}

FeaturedPost.propTypes = {
  vectorsrc: PropTypes.string,
  imagealt: PropTypes.string,
  featuredLink: PropTypes.string,
  featuredTitle: PropTypes.string,
  featuredExcerpt: PropTypes.string,
  imagesrc: PropTypes.string,
}

export default FeaturedPost
