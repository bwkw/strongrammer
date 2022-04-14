import { VFC, useState } from 'react'

import AnswerMain from 'components/elements/Answer/Main'

import shuffleArray from 'components/elements/Format/shuffleArray'

const Tag: VFC = () => {
  const [answers, setAnswers] = useState<string[]>(shuffleArray(['<h1>', '<p>', '<a>']));
  return (
    <>
      <AnswerMain answers={answers} setAnswers={setAnswers} />
    </>
  )
}

export default Tag
