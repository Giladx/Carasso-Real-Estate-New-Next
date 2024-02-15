import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import buildingsPageInitialPathsTqDiResource from '../../resources/buildings-page-initial-paths-tq_di'
import buildingsPageInitialPropsTqUwResource from '../../resources/buildings-page-initial-props-tq_uw'

const Buildings = (props) => {
  return (
    <>
      <div className="buildings-container">
        <Head>
          <title>Buildings - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Buildings - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(BuildingsEntity) => (
            <>
              <div className="buildings-container1">
                <span>{BuildingsEntity?.Building_name}</span>
                <span>{BuildingsEntity?.Building_status}</span>
                <span>{BuildingsEntity?.SF_id}</span>
              </div>
            </>
          )}
          initialData={props.buildingsEntity}
          persistDataDuringLoading={true}
          key={props?.buildingsEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .buildings-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .buildings-container1 {
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

Buildings.defaultProps = {
  buildingsEntity: [],
}

Buildings.propTypes = {
  buildingsEntity: PropTypes.array,
}

export default Buildings

export async function getStaticPaths() {
  try {
    const response = await buildingsPageInitialPathsTqDiResource({})
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
    const response = await buildingsPageInitialPropsTqUwResource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        buildingsEntity: response?.data?.[0],
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
