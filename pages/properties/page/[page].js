import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import propertiesPageInitialPaths9f66eResource from '../../../resources/properties-page-initial-paths-9f66e'
import propertiesPageInitialPropsF7599Resource from '../../../resources/properties-page-initial-props-f7599'

const Properties1 = (props) => {
  return (
    <>
      <div className="properties1-container">
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
                    <div className="properties1-container1">
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
          .properties1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .properties1-container1 {
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

Properties1.defaultProps = {
  propertiesEntities: [],
}

Properties1.propTypes = {
  propertiesEntities: PropTypes.array,
}

export default Properties1

export async function getStaticPaths() {
  try {
    const response = await propertiesPageInitialPaths9f66eResource({})
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
    const response = await propertiesPageInitialPropsF7599Resource({
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
