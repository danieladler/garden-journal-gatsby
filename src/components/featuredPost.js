import React, { useContext } from "react"
import AppContext from "../context/AppContext"

const FeaturedPost = () => {
  const appContext = useContext(AppContext)
  const { featuredPost } = appContext.state

  return (
    <>
      {featuredPost &&
        <h2>Featured Post: {featuredPost.title}</h2>
      }
    </>
  )
}

export default FeaturedPost
