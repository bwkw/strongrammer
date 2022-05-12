import { VFC } from 'react'

import CircleCrossQuizMain from 'components/Quiz/circleCrossMain'
import QuizCommonPart from 'components/Quiz/commonPart'

const Margin: VFC = () => {
  const quizList = [
    'marginとは要素の内側の余白を指定するものである。',
    'marginを上30px, 下20px, 左15px, 右15px作る指定方法は、\n「margin: 30px 15px 20px」である。',
  ]
  const answerList = ['×', '○']
  return (
    <>
      <QuizCommonPart language={'CSS'} title={'Margin'} />
      <CircleCrossQuizMain
        language={'CSS'}
        title={'Margin'}
        quizList={quizList}
        answerList={answerList}
      />
    </>
  )
}

export default Margin
