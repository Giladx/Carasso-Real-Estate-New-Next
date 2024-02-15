import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import buildingsPageInitialPathsTqTNResource from '../../../resources/buildings-page-initial-paths-tq_t-n'
import buildingsPageInitialPropsTqW1Resource from '../../../resources/buildings-page-initial-props-tq_w1'

const Buildings11 = (props) => {
  return (
    <>
      <div className="buildings11-container">
        <Head>
          <title>Buildings1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta
            property="og:title"
            content="Buildings1 - Carasso Real Estate"
          />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(BuildingsEntities) => (
                  <>
                    <div className="buildings11-container1">
                      <span>{BuildingsEntities?.Building_name}</span>
                      <span>{BuildingsEntities?.Building_status}</span>
                      <span>{BuildingsEntities?.SF_id}</span>
                    </div>
                  </>
                )}
              />
            </>
          )}
          initialData={props.buildingsEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .buildings11-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .buildings11-container1 {
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

Buildings11.defaultProps = {
  buildingsEntities: [],
}

Buildings11.propTypes = {
  buildingsEntities: PropTypes.array,
}

export default Buildings11

export async function getStaticPaths() {
  try {
    const response = await buildingsPageInitialPathsTqTNResource({})
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
    const response = await buildingsPageInitialPropsTqW1Resource({
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
        buildingsEntities: response,
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
