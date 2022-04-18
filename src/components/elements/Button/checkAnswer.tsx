import { VFC } from 'react'

import Button from '@mui/material/Button'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

import checkCorrectWrong from 'components/elements/Answer/checkCorrectWrong'

type CheckAnswerProps = {
  yourAnswers: string[]
  correctAnswers: string[]
}

const CheckAnswerButton: VFC<CheckAnswerProps> = ({
  yourAnswers,
  correctAnswers,
}) => {
  return (
    <>
      <Button
        color={'warning'}
        size={'large'}
        startIcon={<CheckCircleIcon />}
        style={{ textTransform: 'none' }}
        onClick={() => checkCorrectWrong(yourAnswers, correctAnswers)}
      >
        答え合わせ
      </Button>
    </>
  )
}

export default CheckAnswerButton
