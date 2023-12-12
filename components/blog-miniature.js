import React from 'react'

import PropTypes from 'prop-types'

const BlogMiniature = (props) => {
  return (
    <>
      <div className={`blog-miniature-container ${props.rootClassName} `}>
        <div className="blog-miniature-hover-blog">
          <div className="blog-miniature-frame9">
            <img
              alt={props.imagealt}
              src={props.imagesrc}
              className="blog-miniature-image"
            />
          </div>
          <div className="blog-miniature-frame280">
            <span className="blog-miniature-text">{props.date}</span>
            <span className="blog-miniature-text1">{props.postTitle}</span>
            <span className="blog-miniature-text2">{props.postExcerpt}</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .blog-miniature-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-miniature-hover-blog {
            gap: 24px;
            width: 100%;
            height: auto;
            display: flex;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .blog-miniature-frame9 {
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
          .blog-miniature-image {
            width: 100%;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .blog-miniature-frame280 {
            gap: 20px;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            padding-left: 30px;
            padding-right: 30px;
            flex-direction: column;
          }
          .blog-miniature-text {
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
          .blog-miniature-text1 {
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
          .blog-miniature-text2 {
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

          @media (max-width: 1200px) {
            .blog-miniature-image {
              border-radius: var(--dl-radius-radius-radius20);
            }
          }
          @media (max-width: 991px) {
            .blog-miniature-image {
              border-radius: var(--dl-radius-radius-radius4);
            }
            .blog-miniature-text2 {
              color: var(--dl-color-carasso-darkergray);
              font-size: 18px;
              font-family: Ploni ML v2 AAA;
              font-weight: 300;
              line-height: 140%;
              text-decoration: none;
            }
          }
          @media (max-width: 479px) {
            .blog-miniature-frame9 {
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .blog-miniature-image {
              height: auto;
            }
            .blog-miniature-frame280 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .blog-miniature-text {
              color: var(--dl-color-carasso-darkergray);
              font-size: 18px;
              font-family: Ploni ML v2 AAA;
              font-weight: 300;
              line-height: 140%;
              text-decoration: none;
            }
            .blog-miniature-text1 {
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

BlogMiniature.defaultProps = {
  postExcerpt:
    'בשנים האחרונות משקיעה החברה את מיטב המשאבים בפיתוח, תכנון והקמה של מגוון פרויקטים מתקדמים המשקפים בשנים.',
  rootClassName: '',
  imagealt: 'image',
  date: '18 בינואר, 2023',
  postTitle: 'איך נראת דירה לאנשים שאוהבים לארח',
  imagesrc: '/blog/c416e0d7a51cd55e8fe5e745cd82e4b5-200h.jpeg',
}

BlogMiniature.propTypes = {
  postExcerpt: PropTypes.string,
  rootClassName: PropTypes.string,
  imagealt: PropTypes.string,
  date: PropTypes.string,
  postTitle: PropTypes.string,
  imagesrc: PropTypes.string,
}

export default BlogMiniature
