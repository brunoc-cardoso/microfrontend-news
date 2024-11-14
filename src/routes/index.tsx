import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { News } from '../pages/News'
import { NewsDetails } from '../pages/NewsDetails'

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetails />} />
      </Routes>
    </Router>
  )
}
