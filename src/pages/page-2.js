import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { useStaticQuery, graphql } from "gatsby"

// https://www.gatsbyjs.org/blog/2019-02-20-introducing-use-static-query/

const SecondPage = () => {
  const { site } = useStaticQuery(graphql`
    query TestQuery {
      site {
        siteMetadata {
          testProp
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <h2>Here's a prop from useStaticQuery: {site.siteMetadata.testProp}</h2>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage
