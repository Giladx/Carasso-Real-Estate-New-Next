import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import shopsPageInitialPathsTqHwResource from '../../resources/shops-page-initial-paths-tq_hw'
import shopsPageInitialPropsTqQ0Resource from '../../resources/shops-page-initial-props-tq_q0'

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
          renderSuccess={(ShopsEntity) => (
            <>
              <div className="shops-container1">
                <span>{ShopsEntity?.Shop_title}</span>
                <span>{ShopsEntity?.Shop_phone}</span>
                <span>{ShopsEntity?.Shop_opening_hours}</span>
              </div>
            </>
          )}
          initialData={props.shopsEntity}
          persistDataDuringLoading={true}
          key={props?.shopsEntity?.id}
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
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Shops.defaultProps = {
  shopsEntity: [],
}

Shops.propTypes = {
  shopsEntity: PropTypes.array,
}

export default Shops

export async function getStaticPaths() {
  try {
    const response = await shopsPageInitialPathsTqHwResource({})
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
    const response = await shopsPageInitialPropsTqQ0Resource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        shopsEntity: response?.data?.[0],
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
