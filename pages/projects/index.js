import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import projectsPageInitialPropsTqMlResource from '../../resources/projects-page-initial-props-tq_ml'

const Projects1 = (props) => {
  return (
    <>
      <div className="projects1-container">
        <Head>
          <title>Projects1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Projects1 - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(ProjectsEntities) => (
                  <>
                    <div className="projects1-container1">
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
          .projects1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .projects1-container1 {
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

Projects1.defaultProps = {
  projectsEntities: [],
}

Projects1.propTypes = {
  projectsEntities: PropTypes.array,
}

export default Projects1

export async function getStaticProps(context) {
  try {
    const response = await projectsPageInitialPropsTqMlResource({
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
