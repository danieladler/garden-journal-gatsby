import React, { Component } from "react"

const AppContext = React.createContext()

class AppProvider extends Component {
  // TODO: add a gQL query to set a default featuredPost (most recent? random?)
  state = {
    featuredPost: null,
    dateFormatted: null,
    dateInt: null
  }

  setFeaturedPost = (featuredPost) => {
    this.setState({ featuredPost })
  }

  handleSliderChange = (date) => {
    this.convertDateFromInt(date)
    this.setDateInt(date)
  }

  convertDateFromInt = (date) => {
    let dateFromInt = new Date(2019, 0, date).toLocaleDateString()
    this.setFormattedDate(dateFromInt)
  }

  setFormattedDate = (dateFromInt) => {
    this.setState({ dateFormatted: dateFromInt })
  }

  setDateInt = (dateInt) => {
    this.setState({ dateInt })
  }

  render() {
    const { children } = this.props

    return (
      <AppContext.Provider
        value={{
          state: this.state,
          setFeaturedPost: this.setFeaturedPost,
          handleSliderChange: this.handleSliderChange,
        }}
      >
        {children}
      </AppContext.Provider>
    )
  }
}

export default AppContext

export { AppProvider }
