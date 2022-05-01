import { VFC, useState } from 'react'

import QuizMain from 'components/Quiz/sortMain'
import shuffleArray from 'components/Format/shuffleArray'

const Text: VFC = () => {
  const questions: string[] = [
    'ブロック要素内の文字の位置を指定する',
    'テキストの行間を調整する',
    '縦方向の文字位置を指定する',
  ]
  const correctAnswers = ['text-align', 'line-height', 'vertical-align']
  const [answers, setAnswers] = useState<string[]>(
    shuffleArray(correctAnswers.concat()),
  )

  return (
    <>
      <QuizMain
        language={'CSS'}
        title={'TextProperty'}
        questions={questions}
        answers={answers}
        setAnswers={setAnswers}
        yourAnswers={answers}
        correctAnswers={correctAnswers}
      />
    </>
  )
}

export default Text
