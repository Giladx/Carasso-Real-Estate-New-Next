import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import brandsPageInitialPropsTqVvResource from '../../resources/brands-page-initial-props-tq_vv'

const Brands1 = (props) => {
  return (
    <>
      <div className="brands1-container">
        <Head>
          <title>Brands1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Brands1 - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div>
                <Repeater
                  items={params}
                  renderItem={(BrandsEntities) => (
                    <>
                      <Link href={`/brands/${BrandsEntities?.Brand_name}`}>
                        <a>
                          <div className="brands1-container2">
                            <span>{BrandsEntities?.Brand_name}</span>
                            <span>{BrandsEntities?.Brand_Slogan}</span>
                            <span>{BrandsEntities?.City_c}</span>
                          </div>
                        </a>
                      </Link>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.brandsEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .brands1-container {
            width: 100%;
            height: 2208px;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .brands1-container2 {
            gap: 12px;
            width: 100%;
            cursor: pointer;
            margin: var(--dl-space-space-unit);
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius20);
            flex-direction: column;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

Brands1.defaultProps = {
  brandsEntities: [],
}

Brands1.propTypes = {
  brandsEntities: PropTypes.array,
}

export default Brands1

export async function getStaticProps(context) {
  try {
    const response = await brandsPageInitialPropsTqVvResource({
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
      revalidate: 30,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
