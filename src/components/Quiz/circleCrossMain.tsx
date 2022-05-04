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
            <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Q1.
              </h5>
              <p className="mb-7 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>

              <div className="flex flex-col items-center">
                <div className="flex mt-4 space-x-12">
                  <button className="inline-flex items-center py-2 px-8 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
                    ○
                  </button>
                  <button className="inline-flex items-center py-2 px-8 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
                    ×
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default CircleCrossQuizMain
