import { VFC } from 'react'

import Button from '@mui/material/Button'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

type QuizStartButtonProps = {
  setQuizStartFlag: any
}

const QuizStartButton: VFC<QuizStartButtonProps> = ({ setQuizStartFlag }) => {
  const quizStart = () => setQuizStartFlag(true)

  return (
    <>
      <Button
        color={'error'}
        startIcon={<KeyboardArrowRightIcon />}
        style={{ textTransform: 'none' }}
        onClick={quizStart}
      >
        Quizを開始する
      </Button>
    </>
  )
}

export default QuizStartButton
