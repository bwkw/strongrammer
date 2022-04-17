import { VFC } from 'react'

import Button from '@mui/material/Button'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

import checkCorrectWrong from 'components/elements/Answer/checkCorrectWrong'

type CheckAnswerProps = {
  answers: string[]
  correctAnswers: string[]
}

const CheckAnswerButton: VFC<CheckAnswerProps> = ({
  answers,
  correctAnswers,
}) => {
  return (
    <>
      <Button
        color={'warning'}
        size={'large'}
        startIcon={<CheckCircleIcon />}
        onClick={() => checkCorrectWrong(answers, correctAnswers)}
      >
        答え合わせ
      </Button>
    </>
  )
}

export default CheckAnswerButton
