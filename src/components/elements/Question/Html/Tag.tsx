import React from 'react'

import QuestionMain from 'components/elements/Question/Main'

const Tag: React.VFC = () => {
  const questions: string[] = [
    '見出し用のタグは？',
    '段落を指定するためのタグは？',
  ]

  return (
    <>
      <h1>タグ編</h1>
      <QuestionMain questions={questions} />
    </>
  )
}

export default Tag
