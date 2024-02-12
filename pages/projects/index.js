import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import projectsPageInitialPropsTqHpResource from '../../resources/projects-page-initial-props-tq_hp'

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
              <Repeater
                items={params}
                renderItem={(ProjectsEntities) => (
                  <>
                    <div className="projects-container1">
                      <span>{ProjectsEntities?.Brand_name}</span>
                      <span>{ProjectsEntities?.Brand_Slogan}</span>
                      <span>{ProjectsEntities?.City__c}</span>
                    </div>
                  </>
                )}
              />
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
          .projects-container1 {
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
    const response = await projectsPageInitialPropsTqHpResource({
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
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
