import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import shopsPageInitialPropsTq29Resource from '../../resources/shops-page-initial-props-tq_29'

const Shops = (props) => {
  return (
    <>
      <div className="shops-container">
        <Head>
          <title>Shops - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Shops - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(ShopsEntities) => (
                  <>
                    <div className="shops-container1">
                      <span>{ShopsEntities?.Shop_title}</span>
                      <span>{ShopsEntities?.Shop_phone}</span>
                      <span>{ShopsEntities?.Shop_opening_hours}</span>
                    </div>
                  </>
                )}
              />
            </>
          )}
          initialData={props.shopsEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .shops-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .shops-container1 {
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

Shops.defaultProps = {
  shopsEntities: [],
}

Shops.propTypes = {
  shopsEntities: PropTypes.array,
}

export default Shops

export async function getStaticProps(context) {
  try {
    const response = await shopsPageInitialPropsTq29Resource({
      ...context?.params,
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
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
