import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import apartmentsPageInitialPathsTqZ4Resource from '../../../resources/apartments-page-initial-paths-tq_z4'
import apartmentsPageInitialPropsTqWxResource from '../../../resources/apartments-page-initial-props-tq_wx'

const Apartments11 = (props) => {
  return (
    <>
      <div className="apartments11-container">
        <Head>
          <title>Apartments1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta
            property="og:title"
            content="Apartments1 - Carasso Real Estate"
          />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(ApartmentsEntities) => (
                  <>
                    <div className="apartments11-container1">
                      <span>{ApartmentsEntities?.Description_c}</span>
                      <span>{ApartmentsEntities?.Number_of_Rooms__c}</span>
                      <span>{ApartmentsEntities?.Model_Code_Label__c}</span>
                    </div>
                  </>
                )}
              />
            </>
          )}
          initialData={props.apartmentsEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .apartments11-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .apartments11-container1 {
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

Apartments11.defaultProps = {
  apartmentsEntities: [],
}

Apartments11.propTypes = {
  apartmentsEntities: PropTypes.array,
}

export default Apartments11

export async function getStaticPaths() {
  try {
    const response = await apartmentsPageInitialPathsTqZ4Resource({})
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
    const response = await apartmentsPageInitialPropsTqWxResource({
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
        apartmentsEntities: response,
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
