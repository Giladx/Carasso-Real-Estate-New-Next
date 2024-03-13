import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import tabsPageInitialPropsTqEfResource from '../../resources/tabs-page-initial-props-tq_ef'
import tabsPageInitialPathsTqByResource from '../../resources/tabs-page-initial-paths-tq_by'

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
          renderSuccess={(TabsEntity) => (
            <>
              <div className="tabs-container1">
                <span>{TabsEntity?.Tab_name_type_a}</span>
                <span>{TabsEntity?.Tab_subtitle_a}</span>
                <span>{TabsEntity?.Tab_description_a}</span>
              </div>
            </>
          )}
          initialData={props.tabsEntity}
          persistDataDuringLoading={true}
          key={props?.tabsEntity?.id}
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
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Tabs.defaultProps = {
  tabsEntity: [],
}

Tabs.propTypes = {
  tabsEntity: PropTypes.array,
}

export default Tabs

export async function getStaticProps(context) {
  try {
    const response = await tabsPageInitialPropsTqEfResource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        tabsEntity: response?.data?.[0],
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
    const response = await tabsPageInitialPathsTqByResource({})
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
