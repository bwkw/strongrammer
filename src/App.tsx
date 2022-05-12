import React, { useEffect, useReducer } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { createTheme, ThemeProvider } from '@mui/material'

import CssIndex from 'pages/CSS/index'
import CssShow from 'pages/CSS/show'
import HtmlIndex from 'pages/HTML/index'
import HtmlShow from 'pages/HTML/show'
import myTheme from 'components/theme'
import Top from 'pages/top'
import UserLogs from 'pages/User/log'
import QuizLogsReducerContext from 'components/Context/quizLogsReducer'
import quizLogsReducer from 'store/reducers/quizLogs'
import { StateType } from 'type/quizLogsReducerType'

const QUIZ_LOGS_REDUCER_KEY = 'quizLogsReducer'

const App: React.VFC = () => {
  // localStorage.removeItem(QUIZ_LOGSCER_KEY)_REDU
  const storageInitialStates = localStorage.getItem(QUIZ_LOGS_REDUCER_KEY)
  const initialStates: StateType[] = storageInitialStates
    ? JSON.parse(storageInitialStates)
    : []

  const [quizLogsStates, quizLogsDispatch] = useReducer(
    quizLogsReducer,
    initialStates,
  )

  useEffect(() => {
    localStorage[QUIZ_LOGS_REDUCER_KEY] = JSON.stringify(quizLogsStates)
  }, [quizLogsStates])

  const theme = createTheme(myTheme)

  return (
    <ThemeProvider theme={theme}>
      <QuizLogsReducerContext.Provider
        value={{ quizLogsStates, quizLogsDispatch }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Top />}></Route>
            <Route path="/user/logs" element={<UserLogs />}></Route>
            <Route path="/html" element={<HtmlIndex />}></Route>
            <Route path="/html/:category" element={<HtmlShow />}></Route>
            <Route path="/css" element={<CssIndex />}></Route>
            <Route path="/css/:category" element={<CssShow />}></Route>
          </Routes>
        </BrowserRouter>
      </QuizLogsReducerContext.Provider>
    </ThemeProvider>
  )
}

export default App
