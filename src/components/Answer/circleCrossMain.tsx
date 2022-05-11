import { VFC } from 'react'
import { ActionType } from 'type/circleCrossQuizReducer'

type CircleCrossAnswerMainProps = {
  activeStep: number
  setActiveStep: any
  dispatch: React.Dispatch<ActionType>
}

const CircleCrossAnswerMain: VFC<CircleCrossAnswerMainProps> = ({
  activeStep,
  setActiveStep,
  dispatch,
}) => {
  const handleNext = (userAnswer: '○' | '×') => {
    dispatch({
      type: 'SET_USER_CORRECT_COUNT_AND_ANSWER',
      questionNumber: activeStep + 1,
      userAnswer: userAnswer,
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
