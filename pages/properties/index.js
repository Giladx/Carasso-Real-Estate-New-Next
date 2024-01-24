import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import propertiesPageInitialPropsBb83aResource from '../../resources/properties-page-initial-props-bb83a'

const Properties = (props) => {
  return (
    <>
      <div className="properties-container">
        <Head>
          <title>Properties - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta
            property="og:title"
            content="Properties - Carasso Real Estate"
          />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(PropertiesEntities) => (
                  <>
                    <div className="properties-container1">
                      <span>{PropertiesEntities?.Internal_Property_ID__c}</span>
                      <span>{PropertiesEntities?.Apartment_Model_text__c}</span>
                      <span>
                        {PropertiesEntities?.Building_Number_for_formula__c}
                      </span>
                    </div>
                  </>
                )}
              />
            </>
          )}
          initialData={props.propertiesEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .properties-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .properties-container1 {
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

Properties.defaultProps = {
  propertiesEntities: [],
}

Properties.propTypes = {
  propertiesEntities: PropTypes.array,
}

export default Properties

export async function getStaticProps(context) {
  try {
    const response = await propertiesPageInitialPropsBb83aResource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        propertiesEntities: response,
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
