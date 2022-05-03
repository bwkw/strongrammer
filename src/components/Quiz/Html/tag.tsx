import { VFC, useState } from 'react'

import QuizCommonPart from 'components/Quiz/commonPart'
import SortQuizMain from 'components/Quiz/sortMain'
import shuffleArray from 'components/Format/shuffleArray'

const Tag: VFC = () => {
  const questions: string[] = [
    '見出し用のタグは？',
    '段落を指定するためのタグは？',
    'リンクを作成するためのタグは？',
    '指定した文書を参照するタグは？',
    '画像を貼り付ける際に使用するタグは？',
  ]
  const correctAnswers = ['<h1>', '<p>', '<a>', '<link>', '<img>']
  const [answers, setAnswers] = useState<string[]>(
    shuffleArray(correctAnswers.concat()),
  )

  return (
    <>
      <QuizCommonPart language={'HTML'} title={'Tag'} />
      <SortQuizMain
        language={'HTML'}
        title={'Tag'}
        questions={questions}
        answers={answers}
        setAnswers={setAnswers}
        yourAnswers={answers}
        correctAnswers={correctAnswers}
      />
    </>
  )
}

export default Tag
