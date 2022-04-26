import { VFC, useState } from 'react'

import QuizMain from 'components/Quiz/main'
import shuffleArray from 'components/Format/shuffleArray'

const Component: VFC = () => {
  const questions: string[] = [
    'スタイルを適用するHTMLのタグ要素を指定する',
    '具体的な変更対象となる要素で用いる属性を指定する',
    '指定するプロパティに設定する',
  ]
  const correctAnswers = ['セレクタ', 'プロパティ', '値']
  const [answers, setAnswers] = useState<string[]>(
    shuffleArray(correctAnswers.concat()),
  )

  return (
    <>
      <QuizMain
        language={'CSS'}
        title={'Component'}
        questions={questions}
        answers={answers}
        setAnswers={setAnswers}
        yourAnswers={answers}
        correctAnswers={correctAnswers}
      />
    </>
  )
}

export default Component
