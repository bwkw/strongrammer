import { VFC, useState } from 'react'

import QuizMain from 'components/Quiz/sortMain'
import shuffleArray from 'components/Format/shuffleArray'

const InlineBlock: VFC = () => {
  const questions: string[] = [
    '横幅と高さの指定が不可能である',
    '他の要素と並べると改行が入る',
    '横幅の初期値が親要素と一緒になる',
    '上下のmarginがつけられない',
    '<div>',
    '<a>',
    '<button>',
    '<p>',
  ]
  const correctAnswers = [
    'インライン',
    'ブロック',
    'ブロック',
    'インライン',
    'ブロック',
    'インライン',
    'インライン',
    'ブロック',
  ]
  const [answers, setAnswers] = useState<string[]>(
    shuffleArray(correctAnswers.concat()),
  )

  return (
    <>
      <QuizMain
        language={'HTML'}
        title={'Inline/Block'}
        questions={questions}
        answers={answers}
        setAnswers={setAnswers}
        yourAnswers={answers}
        correctAnswers={correctAnswers}
      />
    </>
  )
}

export default InlineBlock
