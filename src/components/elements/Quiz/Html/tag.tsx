import { VFC, useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import Grid from '@mui/material/Grid'
import Swal from 'sweetalert2'

import AnswerMain from 'components/elements/Answer/main'
import BackButton from 'components/elements/Button/back'
import QuestionMain from 'components/elements/Question/main'
import QuizMain from 'components/elements/Quiz/main'
import shuffleArray from 'components/elements/Format/shuffleArray'

const Tag: VFC = () => {
  const [answers, setAnswers] = useState<string[]>(
    shuffleArray(['<h1>', '<p>', '<a>']),
  )

  const questions: string[] = [
    '見出し用のタグは？',
    '段落を指定するためのタグは？',
    'リンクを作成するためのタグは？',
  ]

  const checkCorrectWrong = (): void => {
    if (JSON.stringify(answers) === '["<h1>","<p>","<a>"]') {
      Swal.fire({
        icon: 'success',
        title: 'You are Correct !',
        showConfirmButton: false,
        timer: 1500,
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'You are Wrong !',
        showConfirmButton: false,
        timer: 1500,
      })
    }
  }

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
        <Button
          size="large"
          startIcon={<CheckCircleIcon />}
          onClick={checkCorrectWrong}
        >
          答え合わせ
        </Button>
      </Grid>
    </>
  )
}

export default Tag
