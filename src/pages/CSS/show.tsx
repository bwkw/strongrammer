import { VFC } from 'react'
import { useParams } from 'react-router-dom'

import QuizCssComponent from 'components/Quiz/CSS/component'
import QuizCssFontProperty from 'components/Quiz/CSS/fontProperty'

const Show: VFC = () => {
  const { category } = useParams<{ category: string }>()

  return (
    <>
      {category === 'component' && <QuizCssComponent />}
      {category === 'font-property' && <QuizCssFontProperty />}
    </>
  )
}

export default Show
