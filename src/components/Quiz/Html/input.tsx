import { VFC, useState } from 'react'

import QuizCommonPart from 'components/Quiz/commonPart'
import SortQuizMain from 'components/Quiz/sortMain'
import shuffleArray from 'components/Format/shuffleArray'

const Input: VFC = () => {
  const questions: string[] = [
    '既定の動作を持たないボタンを作る',
    'チェックボックスを作る',
    '日付入力を作る',
    'メールアドレス入力を作る',
    'ファイル選択を可能にする',
    '表示はされないものの値がサーバーに送信される',
    '入力値を隠すテキストフィールドを作る',
    'ラジオボタンを作る',
    'フォームを送信するボタンを作る',
  ]
  const correctAnswers = [
    'button',
    'checkbox',
    'date',
    'email',
    'file',
    'hidden',
    'password',
    'radio',
    'submit',
  ]
  const [answers, setAnswers] = useState<string[]>(
    shuffleArray(correctAnswers.concat()),
  )

  return (
    <>
      <QuizCommonPart language={'HTML'} title={'Input'} />
      <SortQuizMain
        language={'HTML'}
        title={'Input'}
        questions={questions}
        answers={answers}
        setAnswers={setAnswers}
        yourAnswers={answers}
        correctAnswers={correctAnswers}
      />
    </>
  )
}

export default Input
