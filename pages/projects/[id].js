import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import projectsPageInitialPaths3adeeResource from '../../resources/projects-page-initial-paths-3adee'
import projectsPageInitialPropsFae08Resource from '../../resources/projects-page-initial-props-fae08'

const Projects11 = (props) => {
  return (
    <>
      <div className="projects11-container">
        <Head>
          <title>Projects1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Projects1 - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(ProjectsEntity) => (
            <>
              <div className="projects11-container1">
                <span>{ProjectsEntity?.Brand_name}</span>
                <span>{ProjectsEntity?.Brand_Slogan}</span>
                <span>{ProjectsEntity?.City__c}</span>
              </div>
            </>
          )}
          initialData={props.projectsEntity}
          persistDataDuringLoading={true}
          key={props?.projectsEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .projects11-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .projects11-container1 {
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

Projects11.defaultProps = {
  projectsEntity: [],
}

Projects11.propTypes = {
  projectsEntity: PropTypes.array,
}

export default Projects11

export async function getStaticPaths() {
  try {
    const response = await projectsPageInitialPaths3adeeResource({})
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
    const response = await projectsPageInitialPropsFae08Resource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        projectsEntity: response?.data?.[0],
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
