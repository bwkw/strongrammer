import { VFC } from 'react'
import { useParams } from 'react-router-dom'

import QuizHtmlTag from 'components/elements/Quiz/Html/tag'

const Show: VFC = () => {
  const { category } = useParams<{ category: string }>()

  return <>{category === 'tag' && <QuizHtmlTag />}</>
}

export default Show
