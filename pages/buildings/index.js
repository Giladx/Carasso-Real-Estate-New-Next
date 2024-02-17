import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import buildingsPageInitialPropsTqD5Resource from '../../resources/buildings-page-initial-props-tq_d5'

const Buildings1 = (props) => {
  return (
    <>
      <div className="buildings1-container">
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
                    <div className="buildings1-container1">
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
          .buildings1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .buildings1-container1 {
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

Buildings1.defaultProps = {
  buildingsEntities: [],
}

Buildings1.propTypes = {
  buildingsEntities: PropTypes.array,
}

export default Buildings1

export async function getStaticProps(context) {
  try {
    const response = await buildingsPageInitialPropsTqD5Resource({
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
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
