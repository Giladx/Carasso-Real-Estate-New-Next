import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import pageResource from '../resources/page'

const Page = (props) => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Page - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Page - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(context_an0dco) => (
                  <>
                    <span>{context_an0dco?.Brand_Slogan}</span>
                    <Repeater
                      items={context_an0dco?.tags || []}
                      renderItem={(context_wu4npm) => (
                        <>
                          <span>Text</span>
                        </>
                      )}
                    />
                  </>
                )}
              />
            </>
          )}
          initialData={props.contextAn0dcoProp}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Page

export async function getStaticProps(context) {
  try {
    const contextAn0dcoProp = await pageResource({
      ...context?.params,
    })
    return {
      props: {
        contextAn0dcoProp: contextAn0dcoProp,
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
