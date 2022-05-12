import { VFC } from 'react'

type CircleCrossQuestionMainProps = {
  activeStep: number
  quizList: string[]
}
const CircleCrossQuestionMain: VFC<CircleCrossQuestionMainProps> = ({
  activeStep,
  quizList,
}) => {
  return (
    <>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Q{activeStep + 1}.
      </h5>
      <div className="mb-7 font-normal text-gray-700 text-center dark:text-gray-400 whitespace-pre-line">
        <p className="text-left inline-block">{quizList[activeStep]}</p>
      </div>
    </>
  )
}

export default CircleCrossQuestionMain
