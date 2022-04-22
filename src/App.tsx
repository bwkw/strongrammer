import React, { useReducer } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { createTheme, ThemeProvider } from '@mui/material'

import HtmlIndex from 'pages/Html/index'
import HtmlShow from 'pages/Html/show'
import myTheme from 'components/theme'
import Top from 'pages/top'
import UserLogs from 'pages/User/log'
import QuizLogsReducerContext from 'components/Context/quizLogsReducer'
import quizLogsReducer from 'store/reducers/quizLogs'

type StateType = {
  category: string
  correctWrongJudgement: '○' | '×' | ''
  dateTime: Date | ''
}

const App: React.VFC = () => {
  const initialStates: StateType[] = [
    { category: '', correctWrongJudgement: '', dateTime: '' },
  ]
  const [states, dispatch] = useReducer(quizLogsReducer, initialStates)

  const theme = createTheme(myTheme)
  return (
    <ThemeProvider theme={theme}>
      <QuizLogsReducerContext.Provider value={{ states, dispatch }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Top />}></Route>
            <Route path="/user/logs" element={<UserLogs />}></Route>
            <Route path="/html" element={<HtmlIndex />}></Route>
            <Route path="/html/:category" element={<HtmlShow />}></Route>
          </Routes>
        </BrowserRouter>
      </QuizLogsReducerContext.Provider>
    </ThemeProvider>
  )
}

export default App
