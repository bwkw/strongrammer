import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HtmlIndex from 'components/html/index'
import HtmlShow from 'components/html/show'
import Top from 'components/top'

const App: React.VFC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />}></Route>
        <Route path="/html" element={<HtmlIndex />}></Route>
        <Route path="/html/:category" element={<HtmlShow />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
