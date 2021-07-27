import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'


class App extends React.Component {
  render() {

    const name = 'Jason'
    return (
      <React.Fragment>
        <h1>👋 Hello {name}!</h1>
        <p>Today is {new Date().toLocaleString()}</p>
      </React.Fragment>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)