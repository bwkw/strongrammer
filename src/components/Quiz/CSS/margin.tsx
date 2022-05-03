import { VFC } from 'react'

import CircleCrossQuizMain from 'components/Quiz/circleCrossMain'
import QuizCommonPart from 'components/Quiz/commonPart'

const Margin: VFC = () => {
  return (
    <>
      <QuizCommonPart language={'CSS'} title={'Margin'} />
      <CircleCrossQuizMain />
    </>
  )
}

export default Margin
