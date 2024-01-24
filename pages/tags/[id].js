import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import tagsPageInitialPaths08b2bResource from '../../resources/tags-page-initial-paths-08b2b'
import tagsPageInitialProps65ce4Resource from '../../resources/tags-page-initial-props-65ce4'

const Tags = (props) => {
  return (
    <>
      <div className="tags-container">
        <Head>
          <title>Tags - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Tags - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(TagsEntity) => (
            <>
              <div className="tags-container1">
                <span>{TagsEntity?.tag}</span>
                <span>{TagsEntity?.id}</span>
              </div>
            </>
          )}
          initialData={props.tagsEntity}
          persistDataDuringLoading={true}
          key={props?.tagsEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .tags-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .tags-container1 {
            gap: 12px;
            width: 100%;
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Tags.defaultProps = {
  tagsEntity: [],
}

Tags.propTypes = {
  tagsEntity: PropTypes.array,
}

export default Tags

export async function getStaticPaths() {
  try {
    const response = await tagsPageInitialPaths08b2bResource({})
    return {
      paths: (response?.data || []).map((item) => {
        return {
          params: {
            id: (item?.id).toString(),
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

export async function getStaticProps(context) {
  try {
    const response = await tagsPageInitialProps65ce4Resource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        tagsEntity: response?.data?.[0],
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
