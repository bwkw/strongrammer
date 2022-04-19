import { VFC } from 'react'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import AnswerMain from 'components/elements/Answer/main'
import BackButton from 'components/elements/Button/back'
import CheckAnswerButton from 'components/elements/Button/checkAnswer'
import QuestionMain from 'components/elements/Question/main'

type QuizProps = {
  title: string
  questions: string[]
  answers: string[]
  setAnswers: any
  yourAnswers: string[]
  correctAnswers: string[]
}

const Main: VFC<QuizProps> = ({
  title,
  questions,
  answers,
  setAnswers,
  yourAnswers,
  correctAnswers,
}) => {
  return (
    <>
      <BackButton url={'/html'} />
      <Grid item container xs={12}>
        <Grid item xs={1} />
        <h2>{title}編</h2>
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={1} />
        <Grid item xs={7}>
          <QuestionMain questions={questions} />
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={2}>
          <AnswerMain answers={answers} setAnswers={setAnswers} />
        </Grid>
      </Grid>
      <Box mt={5} />
      <Grid item container xs={12}>
        <Grid item xs={5} />
        <CheckAnswerButton
          yourAnswers={yourAnswers}
          correctAnswers={correctAnswers}
        />
      </Grid>
    </>
  )
}

export default Main
