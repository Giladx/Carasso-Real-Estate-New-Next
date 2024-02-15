import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import projectsPageInitialPathsTqOnResource from '../../resources/projects-page-initial-paths-tq_on'
import projectsPageInitialPropsTqIXResource from '../../resources/projects-page-initial-props-tq_i-x'

const Projects = (props) => {
  return (
    <>
      <div className="projects-container">
        <Head>
          <title>Projects - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Projects - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(ProjectsEntity) => (
            <>
              <div className="projects-container1">
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
          .projects-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .projects-container1 {
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

Projects.defaultProps = {
  projectsEntity: [],
}

Projects.propTypes = {
  projectsEntity: PropTypes.array,
}

export default Projects

export async function getStaticPaths() {
  try {
    const response = await projectsPageInitialPathsTqOnResource({})
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
    const response = await projectsPageInitialPropsTqIXResource({
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
