import { VFC } from 'react'

import Grid from '@mui/material/Grid'

import AnswerMain from 'components/Answer/sortMain'
import CheckAnswerButton from 'components/Button/checkAnswer'
import QuestionMain from 'components/Question/sortMain'
import { SortQuizMainProps } from 'type/quiz'

const SortQuizMain: VFC<SortQuizMainProps> = ({
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
        <Grid item xs={1} />
        <Grid item xs={7}>
          <QuestionMain questions={questions} />
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={2}>
          <AnswerMain answers={answers} setAnswers={setAnswers} />
        </Grid>
      </Grid>
      <div className={'mt-5'} />
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

export default SortQuizMain
