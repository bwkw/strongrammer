import { VFC } from 'react'

import CircleCrossQuizMain from 'components/Quiz/circleCrossMain'
import QuizCommonPart from 'components/Quiz/commonPart'

const Margin: VFC = () => {
  const quizList = [
    'marginとは要素の内側の余白を指定するものである。',
    'marginとpaddingはどちらを用いても同じ余白を作る',
    'marginの値が2つ指定された場合、1つ目のmarginは左右、1つ目のmarginは上下に適用される。',
    'marginを上30px, 下20px, 左15px, 右15px作る指定方法は、\n「margin: 30px 15px 20px」である。',
  ]
  const answerList = ['×', '×', '×', '○']
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
