import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import tagsPageInitialPathsTqKdResource from '../../../resources/tags-page-initial-paths-tq_kd'
import tagsPageInitialPropsTqQtResource from '../../../resources/tags-page-initial-props-tq_qt'

const Tags1 = (props) => {
  return (
    <>
      <div className="tags1-container">
        <Head>
          <title>Tags - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Tags - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(TagsEntities) => (
                  <>
                    <div className="tags1-container1">
                      <span>{TagsEntities?.tag}</span>
                      <span>{TagsEntities?.id}</span>
                    </div>
                  </>
                )}
              />
            </>
          )}
          initialData={props.tagsEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .tags1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .tags1-container1 {
            gap: 12px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Tags1.defaultProps = {
  tagsEntities: [],
}

Tags1.propTypes = {
  tagsEntities: PropTypes.array,
}

export default Tags1

export async function getStaticPaths() {
  try {
    const response = await tagsPageInitialPathsTqKdResource({})
    const totalCount = response?.meta?.pagination?.total
    const pagesCount = Math.ceil(totalCount / 10)
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

export async function getStaticProps(context) {
  try {
    const response = await tagsPageInitialPropsTqQtResource({
      ...context?.params,
      start: (context.params.page - 1) * 10,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        tagsEntities: response,
        ...response?.meta,
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
