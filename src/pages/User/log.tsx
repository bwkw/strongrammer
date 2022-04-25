import { VFC, useContext } from 'react'

import Grid from '@mui/material/Grid'

import BackButton from 'components/Button/back'
import QuizLogsTable from 'components/Table/quizLogs'
import QuizLogsReducerContext from 'components/Context/quizLogsReducer'

const Log: VFC = () => {
  const { states } = useContext(QuizLogsReducerContext)
  return (
    <>
      <BackButton url={'/'} letter={'Homeへ'} />
      <Grid item container xs={12}>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <h1>あなたのQuizログ</h1>
          <QuizLogsTable states={states} />
        </Grid>
      </Grid>
    </>
  )
}

export default Log
