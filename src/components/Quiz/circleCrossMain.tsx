import { VFC, useState } from 'react'

import StartButton from 'components/Button/quizStart'
import CircleCrossQuizModal from 'components/Modal/circleCrossQuiz'

type CircleCrossQuizMainProps = {}

const CircleCrossQuizMain: VFC<CircleCrossQuizMainProps> = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <StartButton setOpen={setOpen} />
      <CircleCrossQuizModal open={open} setOpen={setOpen} />
    </>
  )
}

export default CircleCrossQuizMain
