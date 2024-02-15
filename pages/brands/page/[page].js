import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import brandsPageInitialPathsTqQ4Resource from '../../../resources/brands-page-initial-paths-tq_q4'
import brandsPageInitialPropsTqQtResource from '../../../resources/brands-page-initial-props-tq_qt'

const Brands1 = (props) => {
  return (
    <>
      <div className="brands1-container">
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
                    <div className="brands1-container1">
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
          .brands1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .brands1-container1 {
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

Brands1.defaultProps = {
  brandsEntities: [],
}

Brands1.propTypes = {
  brandsEntities: PropTypes.array,
}

export default Brands1

export async function getStaticPaths() {
  try {
    const response = await brandsPageInitialPathsTqQ4Resource({})
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
    const response = await brandsPageInitialPropsTqQtResource({
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
