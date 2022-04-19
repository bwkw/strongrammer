import { VFC } from 'react'
import { useParams } from 'react-router-dom'

import QuizHtmlInput from 'components/elements/Quiz/Html/input'
import QuizHtmlTag from 'components/elements/Quiz/Html/tag'

const Show: VFC = () => {
  const { category } = useParams<{ category: string }>()

  return (
    <>
      {category === 'tag' && <QuizHtmlTag />}
      {category === 'input' && <QuizHtmlInput />}
    </>
  )
}

export default Show
