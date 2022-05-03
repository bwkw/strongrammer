import { VFC, useContext } from 'react'

import Grid from '@mui/material/Grid'

import BackButton from 'components/Button/back'
import QuizLogsTable from 'components/Table/quizLogs'
import QuizLogsReducerContext from 'components/Context/quizLogsReducer'

const Log: VFC = () => {
  const { states } = useContext(QuizLogsReducerContext)
  return (
    <>
      <div className={'mt-3 ml-2'}>
        <BackButton url={'/'} letter={'Homeへ'} />
      </div>
      <Grid item container xs={12}>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <p className={'text-2xl mt-3 mb-5'}>あなたのQuizログ</p>
          <QuizLogsTable states={states} />
        </Grid>
      </Grid>
    </>
  )
}

export default Log
