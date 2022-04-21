import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { createTheme, ThemeProvider } from '@mui/material'

import HtmlIndex from 'pages/Html/index'
import HtmlShow from 'pages/Html/show'
import myTheme from 'components/theme'
import UserLogs from 'pages/User/log'
import Top from 'pages/top'

const App: React.VFC = () => {
  const theme = createTheme(myTheme)
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />}></Route>
          <Route path="/user/logs" element={<UserLogs />}></Route>
          <Route path="/html" element={<HtmlIndex />}></Route>
          <Route path="/html/:category" element={<HtmlShow />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
