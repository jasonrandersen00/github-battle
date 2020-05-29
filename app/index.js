import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/popular'
import Battle from './components/Battle'

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Battle />
      </div>
    )
  }
}


ReactDOM.render(
  // React Element,
  <App />,
  // Where to render the Element to
  document.getElementById('app')
)
