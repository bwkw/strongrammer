import React from 'react'

import QuestionMain from 'components/elements/Question/Main'

const Tag: React.VFC = () => {
  const questions: string[] = [
    '見出し用のタグは？',
    '段落を指定するためのタグは？',
    'リンクを作成するためのタグは？'
  ]

  return (
    <>
      <QuestionMain questions={questions}></QuestionMain>
    </>
  )
}

export default Tag
