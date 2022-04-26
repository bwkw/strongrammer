import { VFC } from 'react'
import { useParams } from 'react-router-dom'

import QuizCssComponent from 'components/Quiz/CSS/component'

const Show: VFC = () => {
  const { category } = useParams<{ category: string }>()

  return <>{category === 'component' && <QuizCssComponent />}</>
}

export default Show
