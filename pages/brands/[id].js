import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import brandsPageInitialPathsD9263Resource from '../../resources/brands-page-initial-paths-d9263'
import brandsPageInitialPropsE3661Resource from '../../resources/brands-page-initial-props-e3661'

const Brands11 = (props) => {
  return (
    <>
      <div className="brands11-container">
        <Head>
          <title>Brands1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Brands1 - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(BrandsEntity) => (
            <>
              <div className="brands11-container1">
                <span>{BrandsEntity?.Brand_name}</span>
                <span>{BrandsEntity?.Brand_Slogan}</span>
                <span>{BrandsEntity?.City_c}</span>
              </div>
            </>
          )}
          initialData={props.brandsEntity}
          persistDataDuringLoading={true}
          key={props?.brandsEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .brands11-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .brands11-container1 {
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

Brands11.defaultProps = {
  brandsEntity: [],
}

Brands11.propTypes = {
  brandsEntity: PropTypes.array,
}

export default Brands11

export async function getStaticPaths() {
  try {
    const response = await brandsPageInitialPathsD9263Resource({})
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
    const response = await brandsPageInitialPropsE3661Resource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        brandsEntity: response?.data?.[0],
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
