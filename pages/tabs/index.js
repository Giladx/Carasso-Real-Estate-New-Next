import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import tabsPageInitialPropsTqN6Resource from '../../resources/tabs-page-initial-props-tq_n6'

const Tabs = (props) => {
  return (
    <>
      <div className="tabs-container">
        <Head>
          <title>Tabs - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Tabs - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(TabsEntities) => (
                  <>
                    <div className="tabs-container1">
                      <span>{TabsEntities?.tab_name_type_a}</span>
                      <span>{TabsEntities?.Tab_subtitle_a}</span>
                      <span>{TabsEntities?.Tab_description_a}</span>
                    </div>
                  </>
                )}
              />
            </>
          )}
          initialData={props.tabsEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .tabs-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .tabs-container1 {
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

Tabs.defaultProps = {
  tabsEntities: [],
}

Tabs.propTypes = {
  tabsEntities: PropTypes.array,
}

export default Tabs

export async function getStaticProps(context) {
  try {
    const response = await tabsPageInitialPropsTqN6Resource({
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
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
