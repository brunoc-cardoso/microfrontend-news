import React from 'react'
import { Title } from './components/title'
import './styles/global.css'

function App() {
  return (
    <div className="App">
      <div className="container">This is my news!</div>
      <Title size="large" variant="primary" />
    </div>
  )
}

export default App
