import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import projectsPageInitialPropsTqO6Resource from '../../resources/projects-page-initial-props-tq_o6'

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
          renderSuccess={(params) => (
            <>
              <div>
                <Repeater
                  items={params}
                  renderItem={(ProjectsEntities) => (
                    <>
                      <div className="projects-container2">
                        <span>{ProjectsEntities?.Brand_name}</span>
                        <span>{ProjectsEntities?.Brand_Slogan}</span>
                        <span>{ProjectsEntities?.City__c}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.projectsEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
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
          .projects-container2 {
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

Projects.defaultProps = {
  projectsEntities: [],
}

Projects.propTypes = {
  projectsEntities: PropTypes.array,
}

export default Projects

export async function getStaticProps(context) {
  try {
    const response = await projectsPageInitialPropsTqO6Resource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        projectsEntities: response,
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
