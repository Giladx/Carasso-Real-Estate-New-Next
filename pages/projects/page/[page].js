import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import projectsPageInitialPathsTqN9Resource from '../../../resources/projects-page-initial-paths-tq_n9'
import projectsPageInitialPropsTq0jResource from '../../../resources/projects-page-initial-props-tq_0j'

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
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(ProjectsEntities) => (
                  <>
                    <div className="projects11-container1">
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
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Projects11.defaultProps = {
  projectsEntities: [],
}

Projects11.propTypes = {
  projectsEntities: PropTypes.array,
}

export default Projects11

export async function getStaticPaths() {
  try {
    const response = await projectsPageInitialPathsTqN9Resource({})
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
    const response = await projectsPageInitialPropsTq0jResource({
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
