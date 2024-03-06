import React from 'react'
import Head from 'next/head'

const Tests = (props) => {
  return (
    <>
      <div className="tests-container">
        <Head>
          <title>tests - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="tests - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/bd438ef8-05f7-4c29-9c01-eea7ae17edea/54924954-5c3a-4ae6-9277-e76b2fdbc592?org_if_sml=1&amp;force_format=original"
          />
        </Head>
      </div>
      <style jsx>
        {`
          .tests-container {
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

export default Tests
