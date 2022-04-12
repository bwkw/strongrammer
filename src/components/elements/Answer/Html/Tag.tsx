import React from 'react'

import AnswerMain from 'components/elements/Answer/Main'
const Tag: React.VFC = () => {
  const answers: string[] = ['<h1>', '<p>']
  return (
    <>
      <AnswerMain answers={answers} />
    </>
  )
}

export default Tag
