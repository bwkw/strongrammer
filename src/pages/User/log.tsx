import { VFC, useReducer } from 'react'

import Grid from '@mui/material/Grid'

import answerLogsReducer from 'store/reducers/answerLogs'
import AnswerLogsTable from 'components/Table/answerLogs'
import BackButton from 'components/Button/back'

type StateType = {
  category: string
  correctWrongJudgement: '○' | '×' | ''
  dateTime: Date | ''
}

const Log: VFC = () => {
  const initialStates: StateType[] = [
    { category: '', correctWrongJudgement: '', dateTime: '' },
  ]
  const [states] = useReducer(answerLogsReducer, initialStates)

  return (
    <>
      <BackButton url={'/'} />
      <Grid item container xs={12}>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <h1>あなたのQuizログ</h1>
          <AnswerLogsTable states={states} />
        </Grid>
      </Grid>
    </>
  )
}

export default Log
