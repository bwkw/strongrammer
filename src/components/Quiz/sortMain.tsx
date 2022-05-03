import { VFC } from 'react'

import Grid from '@mui/material/Grid'

import AnswerMain from 'components/Answer/sortMain'
import BackButton from 'components/Button/back'
import CheckAnswerButton from 'components/Button/checkAnswer'
import ForwardButton from 'components/Button/forward'
import QuestionMain from 'components/Question/sortMain'

type SortQuizMainProps = {
  language: string
  title: string
  questions: string[]
  answers: string[]
  setAnswers: any
  yourAnswers: string[]
  correctAnswers: string[]
}

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
        <Grid item xs={2}>
          <div className={'mt-3 ml-2'}>
            <BackButton url={`/${language}`} letter={'戻る'} />
          </div>
        </Grid>
        <Grid item xs={8} />
        <Grid item xs={2}>
          <div className={'mt-3'}>
            <ForwardButton url={'/user/logs'} letter={'Quizログへ'} />
          </div>
        </Grid>
      </Grid>

      <Grid item container xs={12}>
        <Grid item xs={1} />
        <p className={'text-3xl mt-3 mb-4'}>{title} 編</p>
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
