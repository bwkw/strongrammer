import { VFC, useContext } from 'react'

import Button from '@mui/material/Button'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import Swal from 'sweetalert2'

import { ADD_QUIZ_LOG } from 'store/actions/quizLogs'
import formatDate from 'components/Format/formatDate'
import QuizLogsReducerContext from 'components/Context/quizLogsReducer'

type CheckAnswerProps = {
  category: string
  yourAnswers: string[]
  correctAnswers: string[]
}

const CheckAnswerButton: VFC<CheckAnswerProps> = ({
  category,
  yourAnswers,
  correctAnswers,
}) => {
  const { dispatch } = useContext(QuizLogsReducerContext)

  const checkCorrectWrong = (): void => {
    if (JSON.stringify(yourAnswers) === JSON.stringify(correctAnswers)) {
      dispatch({
        type: ADD_QUIZ_LOG,
        category: category,
        correctWrongJudgement: '○',
        dateTime: formatDate(new Date(), 'YYYY/MM/DD hh:mm:ss'),
      })
      Swal.fire({
        icon: 'success',
        title: 'You are Correct !',
        showConfirmButton: false,
        timer: 1500,
      })
    } else {
      dispatch({
        type: ADD_QUIZ_LOG,
        category: category,
        correctWrongJudgement: '×',
        dateTime: formatDate(new Date(), 'YYYY/MM/DD hh:mm:ss'),
      })
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
