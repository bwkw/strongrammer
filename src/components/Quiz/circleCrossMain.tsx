import { VFC, useState } from 'react'

import QuizStartButton from 'components/Button/quizStart'

const CircleCrossQuizMain: VFC = () => {
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
          <div className="relative col-start-3 col-span-8">
            <div className="absolute inset-x-0 top-0 h-16 bg-gray-600">Q1.</div>
            <div className="absolute inset-x-0 top-16 h-64 bg-gray-200">
              テスト
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default CircleCrossQuizMain
