import React, { Component } from "react"

const AppContext = React.createContext()

class AppProvider extends Component {
  // TODO: add a gQL query to set a default featuredPost (most recent? random?)
  state = {
    featuredPost: null
  }

  setFeaturedPost = (featuredPost) => {
    console.log(featuredPost);
    this.setState({ featuredPost });
  }

  render() {
    const { children } = this.props

    return (
      <AppContext.Provider
        value={{
          state: this.state,
          setFeaturedPost: this.setFeaturedPost,
        }}
      >
        {children}
      </AppContext.Provider>
    )
  }
}

export default AppContext

export { AppProvider }
