import React from 'react'
import './styles/global.css'
import { AppRoutes } from './routes'

function App() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <AppRoutes />
    </div>
  )
}

export default App
