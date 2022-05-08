import { VFC } from 'react'

const CircleCrossQuestionMain: VFC = () => {
  const quizList = [
    'marginを上30px, 下20px, 左15px, 右15px作る指定方法は、\n「margin: 30px 15px 20px」である。',
  ]

  return (
    <>
      <h5 className="mb-2 text-left text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Q1.
      </h5>
      <div className="mb-7 font-normal text-gray-700 text-center dark:text-gray-400 whitespace-pre-line">
        <p className="text-left inline-block">{quizList[0]}</p>
      </div>
    </>
  )
}

export default CircleCrossQuestionMain
