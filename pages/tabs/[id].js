import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import tabsPageInitialPathsTqWnResource from '../../resources/tabs-page-initial-paths-tq_wn'
import tabsPageInitialPropsTqX7Resource from '../../resources/tabs-page-initial-props-tq_x7'

const Tabs11 = (props) => {
  return (
    <>
      <div className="tabs11-container">
        <Head>
          <title>Tabs1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Tabs1 - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(TabsEntity) => (
            <>
              <div className="tabs11-container1">
                <span>{TabsEntity?.tab_name_type_a}</span>
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
          .tabs11-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .tabs11-container1 {
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

Tabs11.defaultProps = {
  tabsEntity: [],
}

Tabs11.propTypes = {
  tabsEntity: PropTypes.array,
}

export default Tabs11

export async function getStaticPaths() {
  try {
    const response = await tabsPageInitialPathsTqWnResource({})
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
    const response = await tabsPageInitialPropsTqX7Resource({
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
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
