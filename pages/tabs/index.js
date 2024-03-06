import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import tabsPageInitialPropsTqLuResource from '../../resources/tabs-page-initial-props-tq_lu'

const Tabs1 = (props) => {
  return (
    <>
      <div className="tabs1-container">
        <Head>
          <title>Tabs1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Tabs1 - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div>
                <Repeater
                  items={params}
                  renderItem={(TabsEntities) => (
                    <>
                      <div className="tabs1-container2">
                        <span>{TabsEntities?.Tab_name_type_a}</span>
                        <span>{TabsEntities?.Tab_subtitle_a}</span>
                        <span>{TabsEntities?.Tab_description_a}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.tabsEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .tabs1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .tabs1-container2 {
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

Tabs1.defaultProps = {
  tabsEntities: [],
}

Tabs1.propTypes = {
  tabsEntities: PropTypes.array,
}

export default Tabs1

export async function getStaticProps(context) {
  try {
    const response = await tabsPageInitialPropsTqLuResource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        tabsEntities: response,
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
