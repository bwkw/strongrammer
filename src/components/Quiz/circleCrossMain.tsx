import { VFC, useContext, useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ADD_QUIZ_LOG } from 'store/actions/quizLogsReducer'
import CircleCrossAnswerMain from 'components/Answer/circleCrossMain'
import CircleCrossQuestionMain from 'components/Question/circleCrossMain'
import QuizStartButton from 'components/Button/quizStart'
import QuizLogsReducerContext from 'components/Context/quizLogsReducer'
import circleCrossQuizReducer from 'store/reducers/circleCrossQuiz'
import formatDate from 'components/Format/formatDate'

type CircleCrossQuizMainProps = {
  language: string
  title: string
  quizList: string[]
  answerList: string[]
}
const CircleCrossQuizMain: VFC<CircleCrossQuizMainProps> = ({
  language,
  title,
  quizList,
  answerList,
}) => {
  const [activeStep, setActiveStep] = useState(0)
  const [quizStartFlag, setQuizStartFlag] = useState(false)
  const navigate = useNavigate()

  const initialStates = { correctCount: 0, circleCrossQuizLogs: [] }
  const [states, dispatch] = useReducer(circleCrossQuizReducer, initialStates)

  const { quizLogsDispatch } = useContext(QuizLogsReducerContext)

  const saveResult = () => {
    quizLogsDispatch({
      type: ADD_QUIZ_LOG,
      category: `${language} ${title}`,
      result: (100 / quizList.length) * states.correctCount,
      dateTime: formatDate(new Date(), 'YYYY/MM/DD hh:mm:ss'),
    })
    navigate('/user/logs')
  }

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
                    <CircleCrossQuestionMain
                      activeStep={activeStep}
                      quizList={quizList}
                    />
                    <CircleCrossAnswerMain
                      activeStep={activeStep}
                      setActiveStep={setActiveStep}
                      dispatch={dispatch}
                      answerList={answerList}
                    />
                  </>
                ) : (
                  <>
                    <div className="font-normal text-gray-700 text-center dark:text-gray-400 whitespace-pre-line">
                      お疲れ様でした！
                      <br /> あなたの点数は 100点満点中
                      {(100 / quizList.length) * states.correctCount}点です。
                    </div>
                    <div className="flex mt-4 space-x-12">
                      <button
                        className="inline-flex items-center py-2 px-12 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                        onClick={() => navigate(`/${language.toLowerCase()}`)}
                      >
                        結果を保存しない
                      </button>
                      <button
                        className="inline-flex items-center py-2 px-12 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                        onClick={saveResult}
                      >
                        結果を保存する
                      </button>
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
