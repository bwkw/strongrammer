import { VFC } from 'react'

import Button from '@mui/material/Button'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import Swal from 'sweetalert2'

type CheckAnswerProps = {
  yourAnswers: string[]
  correctAnswers: string[]
}

const CheckAnswerButton: VFC<CheckAnswerProps> = ({
  yourAnswers,
  correctAnswers,
}) => {
  const checkCorrectWrong = (): void => {
    if (JSON.stringify(yourAnswers) === JSON.stringify(correctAnswers)) {
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
      <Button
        color={'warning'}
        size={'large'}
        startIcon={<CheckCircleIcon />}
        style={{ textTransform: 'none' }}
        onClick={checkCorrectWrong}
      >
        答え合わせ
      </Button>
    </>
  )
}

export default CheckAnswerButton
