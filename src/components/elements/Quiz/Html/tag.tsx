import { VFC, useState } from 'react'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import AnswerMain from 'components/elements/Answer/main'
import BackButton from 'components/elements/Button/back'
import CheckAnswerButton from 'components/elements/Button/checkAnswer'
import QuestionMain from 'components/elements/Question/main'
import QuizMain from 'components/elements/Quiz/main'
import shuffleArray from 'components/elements/Format/shuffleArray'

const Tag: VFC = () => {
  const questions: string[] = [
    '見出し用のタグは？',
    '段落を指定するためのタグは？',
    'リンクを作成するためのタグは？',
  ]
  const correctAnswers = ['<h1>', '<p>', '<a>']
  const [answers, setAnswers] = useState<string[]>(
    shuffleArray(correctAnswers.concat()),
  )

  return (
    <>
      <BackButton url={'/html'} />
      <QuizMain
        title="タグ"
        question={<QuestionMain questions={questions} />}
        answer={<AnswerMain answers={answers} setAnswers={setAnswers} />}
      />
      <Box mt={5} />
      <Grid item container xs={12}>
        <Grid item xs={5} />
        <CheckAnswerButton answers={answers} correctAnswers={correctAnswers} />
      </Grid>
    </>
  )
}

export default Tag
