import React, { Component } from "react"

const AppContext = React.createContext()

class AppProvider extends Component {
  // TODO: add a gQL query to set a default featuredPost (most recent? random?)
  state = {
    featuredPost: null,
    date: null
  }

  setFeaturedPost = (featuredPost) => {
    this.setState({ featuredPost })
  }

  setDisplayedDate = (date) => {
    this.setState({ date })
  }

  render() {
    const { children } = this.props

    return (
      <AppContext.Provider
        value={{
          state: this.state,
          setFeaturedPost: this.setFeaturedPost,
          setDisplayedDate: this.setDisplayedDate,
        }}
      >
        {children}
      </AppContext.Provider>
    )
  }
}

export default AppContext

export { AppProvider }
