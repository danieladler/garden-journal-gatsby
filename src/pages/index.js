import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import FeaturedPost from "../components/FeaturedPost"
import DateSlider from "../components/DateSlider"
import Listing from "../components/listing"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <FeaturedPost />
    <DateSlider />
    <Listing />
  </Layout>
)

export default IndexPage
