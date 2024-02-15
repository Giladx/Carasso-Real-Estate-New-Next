import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import tabsPageInitialPathsTqQjResource from '../../../resources/tabs-page-initial-paths-tq_qj'
import tabsPageInitialPropsTqDoResource from '../../../resources/tabs-page-initial-props-tq_do'

const Tabs1 = (props) => {
  return (
    <>
      <div className="tabs1-container">
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
                    <div className="tabs1-container1">
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
          .tabs1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .tabs1-container1 {
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

export async function getStaticPaths() {
  try {
    const response = await tabsPageInitialPathsTqQjResource({})
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
    const response = await tabsPageInitialPropsTqDoResource({
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
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
