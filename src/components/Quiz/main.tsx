import { VFC } from 'react'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import AnswerMain from 'components/Answer/main'
import BackButton from 'components/Button/back'
import CheckAnswerButton from 'components/Button/checkAnswer'
import ForwardButton from 'components/Button/forward'
import QuestionMain from 'components/Question/main'

type QuizProps = {
  language: string
  title: string
  questions: string[]
  answers: string[]
  setAnswers: any
  yourAnswers: string[]
  correctAnswers: string[]
}

const Main: VFC<QuizProps> = ({
  language,
  title,
  questions,
  answers,
  setAnswers,
  yourAnswers,
  correctAnswers,
}) => {
  return (
    <>
      <Grid item container xs={12}>
        <Grid item xs={1}>
          <BackButton url={`/${language}`} />
        </Grid>
        <Grid item xs={9} />
        <Grid item xs={2}>
          <ForwardButton url={'/user/logs'} letter={'Quizログへ'} />
        </Grid>
      </Grid>

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
          category={`${language} ${title}`}
        />
      </Grid>
    </>
  )
}

export default Main
