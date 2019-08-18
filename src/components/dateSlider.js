import React from "react"
import AppContext from "../context/AppContext"

const DateSlider = () => {

  return (
    <AppContext.Consumer>
      {context => (
        <>
          <input
            id="date-slider-input"
            type="range"
            min="1"
            max="365"
            onChange={(e) => {context.handleSliderChange(e.target.value)}}
          />
          <h1>{context.state.dateFormatted}</h1>
          <h1>{context.state.dateInt}</h1>
        </>
      )}
    </AppContext.Consumer>
  )
}

export default DateSlider
