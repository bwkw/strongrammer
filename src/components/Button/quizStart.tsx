import { VFC } from 'react'

import Button from '@mui/material/Button'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

type QuizStartButtonProps = {
  setOpen: any
}

const QuizStartButton: VFC<QuizStartButtonProps> = ({ setOpen }) => {
  const displayModal = () => setOpen(true)

  return (
    <>
      <Button
        color={'error'}
        startIcon={<KeyboardArrowRightIcon />}
        style={{ textTransform: 'none' }}
        onClick={displayModal}
      >
        Quizを開始する
      </Button>
    </>
  )
}

export default QuizStartButton
