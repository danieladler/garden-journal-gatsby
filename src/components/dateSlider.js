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
            min="0"
            max="20"
            onChange={(e) => {context.setDisplayedDate(e.target.value)}}
          />
        </>
      )}
    </AppContext.Consumer>
  )
}

export default DateSlider
