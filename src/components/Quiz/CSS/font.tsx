import { VFC, useState } from 'react'

import QuizMain from 'components/Quiz/sortMain'
import shuffleArray from 'components/Format/shuffleArray'

const Font: VFC = () => {
  const questions: string[] = [
    '文字サイズを指定する',
    '文字の太さを指定する',
    'フォントの種類を変更する',
  ]
  const correctAnswers = ['font-size', 'font-weight', 'font-family']
  const [answers, setAnswers] = useState<string[]>(
    shuffleArray(correctAnswers.concat()),
  )

  return (
    <>
      <QuizMain
        language={'CSS'}
        title={'Font'}
        questions={questions}
        answers={answers}
        setAnswers={setAnswers}
        yourAnswers={answers}
        correctAnswers={correctAnswers}
      />
    </>
  )
}

export default Font
