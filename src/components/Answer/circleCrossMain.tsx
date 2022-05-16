import { VFC, useContext, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'

import { ADD_QUIZ_LOG } from 'store/actions/quizLogsReducer'
import QuizLogsReducerContext from 'components/Context/quizLogsReducer'
import circleCrossQuizReducer from 'store/reducers/circleCrossQuiz'
import formatDate from 'components/Format/formatDate'
import Swal from 'sweetalert2'

type CircleCrossAnswerMainProps = {
  activeStep: number
  setActiveStep: any
  answerList: string[]
  language: string
  title: string
}

const CircleCrossAnswerMain: VFC<CircleCrossAnswerMainProps> = ({
  activeStep,
  setActiveStep,
  answerList,
  language,
  title,
}) => {
  const initialStates = { correctCount: 0, circleCrossQuizLogs: [] }
  const [states, dispatch] = useReducer(circleCrossQuizReducer, initialStates)
  const { quizLogsDispatch } = useContext(QuizLogsReducerContext)
  const navigate = useNavigate()

  const displayResult = () => {
    Swal.fire({
      title: `お疲れ様でした！ あなたの点数は、100点満点中${Math.round(
        (100 / answerList.length) * states.correctCount,
      )}点です。`,
      cancelButtonText: '結果を保存しない',
      confirmButtonText: '結果を保存する',
    }).then((result) => {
      if (result.value) {
        saveResult()
      } else {
        navigate(`/${language.toLowerCase()}`)
      }
    })
  }

  const saveResult = () => {
    quizLogsDispatch({
      type: ADD_QUIZ_LOG,
      category: `${language} ${title}`,
      result: Math.round((100 / answerList.length) * states.correctCount),
      dateTime: formatDate(new Date(), 'YYYY/MM/DD hh:mm:ss'),
    })
    navigate('/user/logs')
  }

  const handleNext = (userAnswer: '○' | '×') => {
    if (activeStep === answerList.length - 1) {
      displayResult()
    }
    const isCorrect = answerList[activeStep] === userAnswer
    dispatch({
      type: 'SET_USER_CORRECT_COUNT_AND_ANSWER',
      questionNumber: activeStep + 1,
      userAnswer: userAnswer,
      isCorrect: isCorrect,
    })
    setActiveStep((prevActiveStep: number) => prevActiveStep + 1)
  }

  return (
    <>
      <div className="flex mt-4 space-x-12">
        <button
          className="inline-flex items-center py-2 px-12 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
          onClick={() => {
            handleNext('○')
          }}
        >
          ○
        </button>
        <button
          className="inline-flex items-center py-2 px-12 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
          onClick={() => {
            handleNext('×')
          }}
        >
          ×
        </button>
      </div>
    </>
  )
}

export default CircleCrossAnswerMain
