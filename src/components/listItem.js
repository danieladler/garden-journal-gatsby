import React from "react"
import AppContext from "../context/AppContext"

const ListItem = (props) => {

  const { node } = props.data;

  return (
    <AppContext.Consumer>
      {context => (
        <>
          <button onClick={() => {context.setFeaturedPost(node.frontmatter)}}>
            {node.frontmatter.title}
          </button>
        </>
      )}
    </AppContext.Consumer>
  )
}

export default ListItem
