import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import buildingsPageInitialPropsTqQgResource from '../../resources/buildings-page-initial-props-tq_qg'

const Buildings = (props) => {
  return (
    <>
      <div className="buildings-container">
        <Head>
          <title>Buildings - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Buildings - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div>
                <Repeater
                  items={params}
                  renderItem={(BuildingsEntities) => (
                    <>
                      <div className="buildings-container2">
                        <span>{BuildingsEntities?.Building_name}</span>
                        <span>{BuildingsEntities?.Building_status}</span>
                        <span>{BuildingsEntities?.SF_id}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.buildingsEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .buildings-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .buildings-container2 {
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

Buildings.defaultProps = {
  buildingsEntities: [],
}

Buildings.propTypes = {
  buildingsEntities: PropTypes.array,
}

export default Buildings

export async function getStaticProps(context) {
  try {
    const response = await buildingsPageInitialPropsTqQgResource({
      ...context?.params,
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
      revalidate: 30,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
