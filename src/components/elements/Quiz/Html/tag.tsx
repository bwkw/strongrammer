import { VFC } from 'react'

import AnswerHtmlTag from 'components/elements/Answer/Html/tag'
import QuestionHtmlTag from 'components/elements/Question/Html/tag'
import QuizMain from 'components/elements/Quiz/main'

const Tag: VFC = () => {
  return (
    <>
      <QuizMain
        title="タグ"
        question={<QuestionHtmlTag />}
        answer={<AnswerHtmlTag />}
      />
    </>
  )
}

export default Tag
