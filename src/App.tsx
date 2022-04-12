import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HtmlIndex from 'components/html/Index'
import HtmlShow from 'components/html/Show'

const App: React.VFC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/html" element={<HtmlIndex />}></Route>
        <Route path="/html/:category" element={<HtmlShow />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
