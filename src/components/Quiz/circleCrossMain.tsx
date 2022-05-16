import { VFC, useState } from 'react'

import CircleCrossAnswerMain from 'components/Answer/circleCrossMain'
import CircleCrossQuestionMain from 'components/Question/circleCrossMain'
import QuizStartButton from 'components/Button/quizStart'

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

  return (
    <>
      <div className="grid grid-cols-12 mt-4">
        {!quizStartFlag && (
          <div className="col-span-12 text-center">
            <QuizStartButton setQuizStartFlag={setQuizStartFlag} />
          </div>
        )}
        {quizStartFlag && (
          <>
            {activeStep < quizList.length && (
              <div className="relative col-start-3 col-span-8">
                <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex flex-col items-center">
                    <CircleCrossQuestionMain
                      activeStep={activeStep}
                      quizList={quizList}
                    />
                    <CircleCrossAnswerMain
                      activeStep={activeStep}
                      setActiveStep={setActiveStep}
                      answerList={answerList}
                      language={language}
                      title={title}
                    />
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  )
}

export default CircleCrossQuizMain
