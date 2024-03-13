import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import apartmentsPageInitialPropsTqGmResource from '../../resources/apartments-page-initial-props-tq_gm'
import apartmentsPageInitialPathsTqRKResource from '../../resources/apartments-page-initial-paths-tq_r-k'

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
          renderSuccess={(ApartmentsEntity) => (
            <>
              <div className="apartments11-container1">
                <span>{ApartmentsEntity?.Description_c}</span>
                <span>{ApartmentsEntity?.Number_of_Rooms__c}</span>
                <span>{ApartmentsEntity?.Model_Code_Label__c}</span>
              </div>
            </>
          )}
          initialData={props.apartmentsEntity}
          persistDataDuringLoading={true}
          key={props?.apartmentsEntity?.id}
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
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Apartments11.defaultProps = {
  apartmentsEntity: [],
}

Apartments11.propTypes = {
  apartmentsEntity: PropTypes.array,
}

export default Apartments11

export async function getStaticProps(context) {
  try {
    const response = await apartmentsPageInitialPropsTqGmResource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        apartmentsEntity: response?.data?.[0],
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
    const response = await apartmentsPageInitialPathsTqRKResource({})
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
