import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import apartmentsPageInitialPropsTqGtResource from '../../resources/apartments-page-initial-props-tq_gt'

const Apartments = (props) => {
  return (
    <>
      <div className="apartments-container">
        <Head>
          <title>Apartments - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta
            property="og:title"
            content="Apartments - Carasso Real Estate"
          />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div>
                <Repeater
                  items={params}
                  renderItem={(ApartmentsEntities) => (
                    <>
                      <div className="apartments-container2">
                        <span>{ApartmentsEntities?.Description_c}</span>
                        <span>{ApartmentsEntities?.Number_of_Rooms__c}</span>
                        <span>{ApartmentsEntities?.Model_Code_Label__c}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.apartmentsEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .apartments-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .apartments-container2 {
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

Apartments.defaultProps = {
  apartmentsEntities: [],
}

Apartments.propTypes = {
  apartmentsEntities: PropTypes.array,
}

export default Apartments

export async function getStaticProps(context) {
  try {
    const response = await apartmentsPageInitialPropsTqGtResource({
      ...context?.params,
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
      revalidate: 30,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
