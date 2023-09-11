import Document, { Html, Head, Main, NextScript } from 'next/document'
class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <meta charSet="utf-8"></meta>
          <meta property="twitter:card" content="summary_large_image"></meta>
          <style
            dangerouslySetInnerHTML={{
              __html:
                'html {  line-height: 1.15;}body {  margin: 0;}* {  box-sizing: border-box;  border-width: 0;  border-style: solid;}p,li,ul,pre,div,h1,h2,h3,h4,h5,h6,figure,blockquote,figcaption {  margin: 0;  padding: 0;}button {  background-color: transparent;}button,input,optgroup,select,textarea {  font-family: inherit;  font-size: 100%;  line-height: 1.15;  margin: 0;}button,select {  text-transform: none;}button,[type="button"],[type="reset"],[type="submit"] {  -webkit-appearance: button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner {  border-style: none;  padding: 0;}button:-moz-focus,[type="button"]:-moz-focus,[type="reset"]:-moz-focus,[type="submit"]:-moz-focus {  outline: 1px dotted ButtonText;}a {  color: inherit;  text-decoration: inherit;}input {  padding: 2px 4px;}img {  display: block;}html { scroll-behavior: smooth  }',
            }}
            data-tag="reset-style-sheet"
          ></style>
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n  html {\n    font-family: Inter;\n    font-size: 16px;\n  }\n\n  body {\n    font-weight: 400;\n    font-style:normal;\n    text-decoration: none;\n    text-transform: none;\n    letter-spacing: normal;\n    line-height: 1.15;\n    color: var(--dl-color-gray-black);\n    background-color: var(--dl-color-gray-white);\n    \n  }\n\n  \n\n  ',
            }}
            data-tag="default-style-sheet"
          ></style>
          <link
            rel="shortcut icon"
            href="/favicon.png"
            type="icon/png"
            sizes="32x32"
          ></link>
          <link
            rel="stylesheet"
            href="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/bd438ef8-05f7-4c29-9c01-eea7ae17edea/ee087bae-3add-4f3e-8ab3-8e746093c7ca"
            data-tag="font"
          ></link>
          <link
            rel="stylesheet"
            href="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/bd438ef8-05f7-4c29-9c01-eea7ae17edea/50f1e84b-2ce6-4dbd-8de1-2814ed91f705"
            data-tag="font"
          ></link>
          <link
            rel="stylesheet"
            href="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/bd438ef8-05f7-4c29-9c01-eea7ae17edea/b742d646-6083-4670-9d53-2f6d8055824f"
            data-tag="font"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"
            data-tag="font"
          ></link>
          <link
            rel="stylesheet"
            href="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/bd438ef8-05f7-4c29-9c01-eea7ae17edea/d28a4301-0975-405a-a337-efa106995180"
            data-tag="font"
          ></link>
          <link
            rel="stylesheet"
            href="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/bd438ef8-05f7-4c29-9c01-eea7ae17edea/ef3c6140-520d-4c44-b8fb-c42982aa23d1"
            data-tag="font"
          ></link>
          <link
            rel="stylesheet"
            href="https://011.ninja/fonts/carasso/ploni/stylesheet.css"
            data-tag="font"
          ></link>
          <noscript
            dangerouslySetInnerHTML={{
              __html:
                '</noscript><!--This is the head section-->\n<style>  \n* {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n</style><noscript>',
            }}
          ></noscript>
        </Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
        </body>
      </Html>
    )
  }
}
export default CustomDocument
