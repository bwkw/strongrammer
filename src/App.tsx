import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HtmlIndex from 'components/html/Index'

const App: React.VFC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/html" element={<HtmlIndex />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
