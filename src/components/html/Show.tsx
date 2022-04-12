import React from 'react'
import { useParams } from 'react-router-dom'

import QuizHtmlTag from 'components/elements/Quiz/Html/Tag'

const Show: React.VFC = () => {
  const { category } = useParams<{ category: string }>()

  return <>{category == 'tag' && <QuizHtmlTag />}</>
}

export default Show
