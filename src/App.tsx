import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { createTheme, ThemeProvider } from '@mui/material'

import HtmlIndex from 'components/html/index'
import HtmlShow from 'components/html/show'
import myTheme from 'components/theme'
import Top from 'components/top'

const App: React.VFC = () => {
  const theme = createTheme(myTheme)
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />}></Route>
          <Route path="/html" element={<HtmlIndex />}></Route>
          <Route path="/html/:category" element={<HtmlShow />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
