import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import brandsPageInitialPropsTqN7Resource from '../../../resources/brands-page-initial-props-tq_n7'
import brandsPageInitialPathsTqNTResource from '../../../resources/brands-page-initial-paths-tq_n-t'

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
          renderSuccess={(params) => (
            <>
              <div>
                <Repeater
                  items={params}
                  renderItem={(BrandsEntities) => (
                    <>
                      <Link href={`/brands/${BrandsEntities?.Brand_name}`}>
                        <a>
                          <div className="brands11-container2">
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
          .brands11-container {
            width: 100%;
            height: 2208px;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .brands11-container2 {
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

Brands11.defaultProps = {
  brandsEntities: [],
}

Brands11.propTypes = {
  brandsEntities: PropTypes.array,
}

export default Brands11

export async function getStaticProps(context) {
  try {
    const response = await brandsPageInitialPropsTqN7Resource({
      ...context?.params,
      start: (context.params.page - 1) * 50,
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

export async function getStaticPaths() {
  try {
    const response = await brandsPageInitialPathsTqNTResource({})
    const totalCount = response?.meta?.pagination?.total
    const pagesCount = Math.ceil(totalCount / 50)
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
