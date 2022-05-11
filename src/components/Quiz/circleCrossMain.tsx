import { VFC, useReducer, useState } from 'react'

import CircleCrossAnswerMain from 'components/Answer/circleCrossMain'
import CircleCrossQuestionMain from 'components/Question/circleCrossMain'
import QuizStartButton from 'components/Button/quizStart'
import circleCrossQuizReducer from 'store/reducers/circleCrossQuiz'

// const CIRCLE_CROSS_QUIZ_REDUCER_KEY = 'circleCrossQuizReducer'

const CircleCrossQuizMain: VFC = () => {
  const [quizStartFlag, setQuizStartFlag] = useState(false)
  const [activeStep, setActiveStep] = useState(0)

  const [states, dispatch] = useReducer(circleCrossQuizReducer, [])
  console.log(states)

  return (
    <>
      <div className="grid grid-cols-12 mt-4">
        {!quizStartFlag && (
          <div className="col-span-12 text-center">
            <QuizStartButton setQuizStartFlag={setQuizStartFlag} />
          </div>
        )}
        {quizStartFlag && (
          <div className="relative col-start-3 col-span-8">
            <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center">
                {activeStep < 2 ? (
                  <>
                    <CircleCrossQuestionMain activeStep={activeStep} />
                    <CircleCrossAnswerMain
                      activeStep={activeStep}
                      setActiveStep={setActiveStep}
                      dispatch={dispatch}
                    />
                  </>
                ) : (
                  <>
                    <div className="font-normal text-gray-700 text-center dark:text-gray-400 whitespace-pre-line">
                      お疲れ様でした！
                      <br /> あなたの点数は○点です。
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default CircleCrossQuizMain
