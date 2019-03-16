import React from 'react'
import { Helmet } from 'react-helmet'
import { MDXStyle, BlocksProvider } from '../index'
import pkg from '../package.json'
import { Link } from './components'
import Header from './header.mdx'
import Banner from './banner.mdx'
import Intro from './intro.mdx'
import Features from './features.mdx'
import Cards from './cards.mdx'
import Centered from './centered.mdx'
import Split from './split.mdx'
import Columns from './columns.mdx'
import PhotoCredits from './photo-credits.mdx'
import Footer from './footer.mdx'

import { funk as theme } from '../themes'

const components = {
  a: Link,
  button: Link,
}

export default props =>
  // todo: figure out a better way to provide Link etc
  <MDXStyle components={components}>
    <BlocksProvider {...theme}>
      <Helmet>
        <title>MDX Blocks</title>
        <meta
          name='description'
          content={pkg.description}
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Poppins400:700:900|Roboto+Mono|Roboto400:600:700'
        />
      </Helmet>
      <Header />
      <Banner />
      <Intro />
      <Features />
      <Cards />
      <Centered />
      <Split />
      <Columns />
      <PhotoCredits />
      <Footer />
    </BlocksProvider>
  </MDXStyle>
