import { VFC } from 'react'
import { useParams } from 'react-router-dom'

import QuizHtmlInput from 'components/Quiz/HTML/input'
import QuizHtmlInlineBlock from 'components/Quiz/HTML/inlineBlock'
import QuizHtmlTag from 'components/Quiz/HTML/tag'

const Show: VFC = () => {
  const { category } = useParams<{ category: string }>()

  return (
    <>
      {category === 'tag' && <QuizHtmlTag />}
      {category === 'input' && <QuizHtmlInput />}
      {category === 'inline-block' && <QuizHtmlInlineBlock />}
    </>
  )
}

export default Show
