import React from 'react'
import App from 'next/app'
import Head from 'next/head'

export default class Root extends App {
  render () {
    const { Component, pageProps } = this.props

    return (
      <React.Fragment>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />

          <title>Muriel Silveira</title>
        </Head>

        <Component {...pageProps} />
      </React.Fragment>
    )
  }
}
