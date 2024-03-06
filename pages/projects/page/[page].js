import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import projectsPageInitialPropsTqOkResource from '../../../resources/projects-page-initial-props-tq_ok'
import projectsPageInitialPathsTqByResource from '../../../resources/projects-page-initial-paths-tq_by'

const Projects1 = (props) => {
  return (
    <>
      <div className="projects1-container">
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
                      <div className="projects1-container2">
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
          .projects1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .projects1-container2 {
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
    const response = await projectsPageInitialPropsTqOkResource({
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
    const response = await projectsPageInitialPathsTqByResource({})
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
