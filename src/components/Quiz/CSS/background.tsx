import { VFC, useState } from 'react'

import QuizMain from 'components/Quiz/sortMain'
import shuffleArray from 'components/Format/shuffleArray'

const Background: VFC = () => {
  const questions: string[] = [
    '背景色の設定',
    '背景画像の表示位置の設定',
    '背景画像の繰り返し設定',
    '背景画像の表示サイズ',
  ]
  const correctAnswers = [
    'background-color',
    'background-position',
    'background-repeat',
    'background-size',
  ]
  const [answers, setAnswers] = useState<string[]>(
    shuffleArray(correctAnswers.concat()),
  )

  return (
    <>
      <QuizMain
        language={'CSS'}
        title={'Background'}
        questions={questions}
        answers={answers}
        setAnswers={setAnswers}
        yourAnswers={answers}
        correctAnswers={correctAnswers}
      />
    </>
  )
}

export default Background
