import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <link
            rel="shortcut icon"
            href='/favicon.ico'
          />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700g" />
        </Head>
        <body className="antialiased text-gray-800">
          <div id="page-transition"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
