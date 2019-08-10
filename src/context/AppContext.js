import React, { Component } from "react"

const AppContext = React.createContext()

class AppProvider extends Component {
  state = {
    num: 1
  }

  addOne = () => {
    console.log('addOne');
    let num = this.state.num + 1;
    this.setState({ num });
  }

  render() {
    const { children } = this.props

    return (
      <AppContext.Provider
        value={{
          state: this.state,
          addOne: this.addOne,
        }}
      >
        {children}
      </AppContext.Provider>
    )
  }
}

export default AppContext

export { AppProvider }
