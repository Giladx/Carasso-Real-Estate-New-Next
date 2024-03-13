import React from 'react'

import {
  DataProvider,
  DateTimePrimitive,
  Repeater,
} from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import posts8Resource from '../resources/posts8'

const BlogMiniature = (props) => {
  return (
    <>
      <div className={`blog-miniature-container ${props.rootClassName} `}>
        <div className="blog-miniature-hover-blog">
          <DataProvider
            renderSuccess={(Blogmini) => (
              <>
                <div className="blog-miniature-frame9">
                  <img
                    alt={props.imagealt}
                    src={Blogmini?.Media?.url}
                    className="blog-miniature-image"
                  />
                </div>
                <div className="blog-miniature-frame280">
                  <span className="blog-miniature-date-time">
                    <DateTimePrimitive
                      format="MMMM D, YYYY"
                      date="Mon Feb 26 2024 13:08:55 GMT+0200 (Israel Standard Time)"
                    ></DateTimePrimitive>
                  </span>
                  <span className="blog-miniature-text">{Blogmini?.Title}</span>
                  <span className="blog-miniature-text1">
                    {Blogmini?.Content}
                  </span>
                </div>
              </>
            )}
            initialData={props.blogminiProp}
            persistDataDuringLoading={true}
            initialData={props.blogminiProp}
            persistDataDuringLoading={true}
          />
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
          .blog-miniature-date-time {
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
          .blog-miniature-text {
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
          .blog-miniature-text1 {
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
            .blog-miniature-text1 {
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
            .blog-miniature-date-time {
              color: var(--dl-color-carasso-darkergray);
              font-size: 18px;
              font-family: Ploni ML v2 AAA;
              font-weight: 300;
              line-height: 140%;
              text-decoration: none;
            }
            .blog-miniature-text {
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
  imagesrc: 'c8e3d00d-a6af-4e62-a554-722a48c916bb',
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

export async function getStaticProps(context) {
  try {
    const blogminiProp = await posts8Resource({
      ...context?.params,
    })
    if (!blogminiProp?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    const blogminiProp = await posts8Resource({
      ...context?.params,
    })
    if (!blogminiProp?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        blogminiProp: blogminiProp?.data?.[0],
        blogminiProp: blogminiProp?.data?.[0],
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
