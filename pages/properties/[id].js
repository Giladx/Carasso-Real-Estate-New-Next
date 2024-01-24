import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import propertiesPageInitialPaths92a7aResource from '../../resources/properties-page-initial-paths-92a7a'
import propertiesPageInitialProps7384dResource from '../../resources/properties-page-initial-props-7384d'

const Properties11 = (props) => {
  return (
    <>
      <div className="properties11-container">
        <Head>
          <title>Properties1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta
            property="og:title"
            content="Properties1 - Carasso Real Estate"
          />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(PropertiesEntity) => (
            <>
              <div className="properties11-container1">
                <span>{PropertiesEntity?.Internal_Property_ID__c}</span>
                <span>{PropertiesEntity?.Apartment_Model_text__c}</span>
                <span>{PropertiesEntity?.Building_Number_for_formula__c}</span>
              </div>
            </>
          )}
          initialData={props.propertiesEntity}
          persistDataDuringLoading={true}
          key={props?.propertiesEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .properties11-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .properties11-container1 {
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

Properties11.defaultProps = {
  propertiesEntity: [],
}

Properties11.propTypes = {
  propertiesEntity: PropTypes.array,
}

export default Properties11

export async function getStaticPaths() {
  try {
    const response = await propertiesPageInitialPaths92a7aResource({})
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
    const response = await propertiesPageInitialProps7384dResource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        propertiesEntity: response?.data?.[0],
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
