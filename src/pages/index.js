import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import FeaturedPost from "../components/featuredPost";
import Listing from "../components/listing"
import Archive from "../components/archive"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <FeaturedPost />
    <Listing />
    <Archive />
  </Layout>
)

export default IndexPage
