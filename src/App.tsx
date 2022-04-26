import React, { useEffect, useReducer } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { createTheme, ThemeProvider } from '@mui/material'

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
  // localStorage.removeItem(QUIZ_LOGS_REDUCER_KEY)
  const storageInitialStates = localStorage.getItem(QUIZ_LOGS_REDUCER_KEY)
  const initialStates: StateType[] = storageInitialStates
    ? JSON.parse(storageInitialStates)
    : []

  const [states, dispatch] = useReducer(quizLogsReducer, initialStates)

  useEffect(() => {
    localStorage[QUIZ_LOGS_REDUCER_KEY] = JSON.stringify(states)
  }, [states])

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
