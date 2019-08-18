import React, { Component } from "react"
import moment from "moment"

const AppContext = React.createContext()

class AppProvider extends Component {
  // TODO:
  // - add a gQL query to set a default featuredPost (most recent? random?)
  // - set dateFormatted to today using moment(); pass this value to DateSlider as range starting value
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

  getPlantGrowth = (node) => {
    let plantedDateInt = moment(node.frontmatter.plantedDate).format('DDD')
    let pctGrowth = ((this.state.dateInt - plantedDateInt) / node.frontmatter.daysToHarvest).toFixed(2)
    if (pctGrowth <= 0) {
      return 0
    } else if (pctGrowth >= 1) {
      return 1
    }
    return pctGrowth
  }

  render() {
    const { children } = this.props

    return (
      <AppContext.Provider
        value={{
          state: this.state,
          setFeaturedPost: this.setFeaturedPost,
          handleSliderChange: this.handleSliderChange,
          getPlantGrowth: this.getPlantGrowth,
        }}
      >
        {children}
      </AppContext.Provider>
    )
  }
}

export default AppContext

export { AppProvider }
