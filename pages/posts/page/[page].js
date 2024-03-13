import React from 'react'
import Head from 'next/head'

import {
  DataProvider,
  DateTimePrimitive,
  Repeater,
} from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import postsPageInitialPropsTqRFResource from '../../../resources/posts-page-initial-props-tq_r-f'
import postsPageInitialPathsTqTUResource from '../../../resources/posts-page-initial-paths-tq_t-u'

const Posts11 = (props) => {
  return (
    <>
      <div className="posts11-container">
        <Head>
          <title>Posts1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Posts1 - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <div className="posts11-container1">
          <DataProvider
            renderSuccess={(params) => (
              <>
                <div>
                  <Repeater
                    items={params}
                    renderItem={(PostsEntities) => (
                      <>
                        <div className="posts11-container3">
                          <div className="posts11-hover-blog">
                            <div className="posts11-frame9">
                              <img
                                alt="image"
                                src={PostsEntities?.Featured_image?.url}
                                className="posts11-image"
                              />
                            </div>
                            <div className="posts11-frame280">
                              <span className="posts11-date-time">
                                <DateTimePrimitive
                                  format="MMMM D, YYYY"
                                  date={PostsEntities?.createdAt}
                                ></DateTimePrimitive>
                              </span>
                              <span className="posts11-text">
                                {PostsEntities?.Title}
                              </span>
                              <span className="posts11-text1">
                                {PostsEntities?.Content || ' '}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="posts11-container4">
                          <h1>{PostsEntities?.Title}</h1>
                          <span>{PostsEntities?.Title}</span>
                          <span>{PostsEntities?.Content}</span>
                        </div>
                      </>
                    )}
                  />
                </div>
              </>
            )}
            initialData={props.postsEntities}
            persistDataDuringLoading={true}
            key={props?.pagination?.page}
          />
        </div>
      </div>
      <style jsx>
        {`
          .posts11-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .posts11-container1 {
            width: auto;
            height: auto;
            display: grid;
            align-items: flex-start;
            grid-template-columns: repeat(3, 1fr);
          }
          .posts11-container3 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .posts11-hover-blog {
            gap: 24px;
            width: 100%;
            height: auto;
            display: flex;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .posts11-frame9 {
            gap: 10px;
            width: auto;
            display: flex;
            padding: 30px;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            border-radius: 20px;
          }
          .posts11-image {
            width: 100%;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .posts11-frame280 {
            gap: 20px;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            padding-left: 30px;
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: 30px;
            flex-direction: column;
          }
          .posts11-text {
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
          .posts11-text1 {
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
          .posts11-container4 {
            gap: 12px;
            width: 100%;
            display: none;
            align-items: center;
            flex-direction: column;
          }
          @media (max-width: 1200px) {
            .posts11-image {
              border-radius: var(--dl-radius-radius-radius20);
            }
          }
          @media (max-width: 991px) {
            .posts11-image {
              border-radius: var(--dl-radius-radius-radius4);
            }
            .posts11-text1 {
              color: var(--dl-color-carasso-darkergray);
              font-size: 18px;
              font-family: Ploni ML v2 AAA;
              font-weight: 300;
              line-height: 140%;
              text-decoration: none;
            }
          }
          @media (max-width: 479px) {
            .posts11-frame9 {
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .posts11-image {
              height: auto;
            }
            .posts11-frame280 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .posts11-date-time {
              color: var(--dl-color-carasso-darkergray);
              font-size: 18px;
              font-family: Ploni ML v2 AAA;
            }
            .posts11-text {
              color: var(--dl-color-carasso-primaryblack);
              font-size: 24px;
              font-family: Ploni ML v2 AAA;
              font-weight: 500;
              line-height: 120%;
              text-decoration: none;
            }
            .posts11-container4 {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

Posts11.defaultProps = {
  postsEntities: [],
}

Posts11.propTypes = {
  postsEntities: PropTypes.array,
}

export default Posts11

export async function getStaticProps(context) {
  try {
    const response = await postsPageInitialPropsTqRFResource({
      ...context?.params,
      start: (context.params.page - 1) * 9,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        postsEntities: response,
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
    const response = await postsPageInitialPathsTqTUResource({})
    const totalCount = response?.meta?.pagination?.total
    const pagesCount = Math.ceil(totalCount / 9)
    return {
      paths: Array.from(
        {
          length: pagesCount,
        },
        (_, i) => ({
          params: {
            page: (i + 1).toString(),
          },
        })
      ),
      fallback: 'blocking',
    }
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}
