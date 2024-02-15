import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import brandsPageInitialPropsTqMkResource from '../../resources/brands-page-initial-props-tq_mk'

const Brands = (props) => {
  return (
    <>
      <div className="brands-container">
        <Head>
          <title>Brands - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Brands - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(BrandsEntities) => (
                  <>
                    <div className="brands-container1">
                      <span>{BrandsEntities?.Brand_name}</span>
                      <span>{BrandsEntities?.Brand_Slogan}</span>
                      <span>{BrandsEntities?.City_c}</span>
                    </div>
                  </>
                )}
              />
            </>
          )}
          initialData={props.brandsEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .brands-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .brands-container1 {
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

Brands.defaultProps = {
  brandsEntities: [],
}

Brands.propTypes = {
  brandsEntities: PropTypes.array,
}

export default Brands

export async function getStaticProps(context) {
  try {
    const response = await brandsPageInitialPropsTqMkResource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        brandsEntities: response,
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
