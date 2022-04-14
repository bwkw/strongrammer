import { VFC, useState } from 'react'

import AnswerMain from 'components/elements/Answer/Main'

const Tag: VFC = () => {
  const [answers, setAnswers] = useState<string[]>(['<h1>', '<p>']);
  return (
    <>
      <AnswerMain answers={answers} setAnswers={setAnswers} />
    </>
  )
}

export default Tag
