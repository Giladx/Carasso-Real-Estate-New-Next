import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import tabsPageInitialPropsTqY7Resource from '../../../resources/tabs-page-initial-props-tq_y7'
import tabsPageInitialPathsTqNmResource from '../../../resources/tabs-page-initial-paths-tq_nm'

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
          renderSuccess={(params) => (
            <>
              <div>
                <Repeater
                  items={params}
                  renderItem={(TabsEntities) => (
                    <>
                      <div className="tabs11-container2">
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
          .tabs11-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .tabs11-container2 {
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

Tabs11.defaultProps = {
  tabsEntities: [],
}

Tabs11.propTypes = {
  tabsEntities: PropTypes.array,
}

export default Tabs11

export async function getStaticProps(context) {
  try {
    const response = await tabsPageInitialPropsTqY7Resource({
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

export async function getStaticPaths() {
  try {
    const response = await tabsPageInitialPathsTqNmResource({})
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
