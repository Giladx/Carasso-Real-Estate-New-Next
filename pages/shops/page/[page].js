import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import shopsPageInitialPropsTqYJResource from '../../../resources/shops-page-initial-props-tq_y-j'
import shopsPageInitialPathsTq9iResource from '../../../resources/shops-page-initial-paths-tq_9i'

const Shops11 = (props) => {
  return (
    <>
      <div className="shops11-container">
        <Head>
          <title>Shops1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Shops1 - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div>
                <Repeater
                  items={params}
                  renderItem={(ShopsEntities) => (
                    <>
                      <div className="shops11-container2">
                        <span>{ShopsEntities?.Shop_title}</span>
                        <span>{ShopsEntities?.Shop_phone}</span>
                        <span>{ShopsEntities?.Shop_opening_hours}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.shopsEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .shops11-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .shops11-container2 {
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

Shops11.defaultProps = {
  shopsEntities: [],
}

Shops11.propTypes = {
  shopsEntities: PropTypes.array,
}

export default Shops11

export async function getStaticProps(context) {
  try {
    const response = await shopsPageInitialPropsTqYJResource({
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
        shopsEntities: response,
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
    const response = await shopsPageInitialPathsTq9iResource({})
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
