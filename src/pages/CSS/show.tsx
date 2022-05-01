import { VFC } from 'react'
import { useParams } from 'react-router-dom'

import QuizCssBackground from 'components/Quiz/CSS/background'
import QuizCssComponent from 'components/Quiz/CSS/component'
import QuizCssFont from 'components/Quiz/CSS/font'
import QuizCssText from 'components/Quiz/CSS/text'
import QuizCssMargin from 'components/Quiz/Css/Margin'

const Show: VFC = () => {
  const { category } = useParams<{ category: string }>()

  return (
    <>
      {category === 'component' && <QuizCssComponent />}
      {category === 'font' && <QuizCssFont />}
      {category === 'text' && <QuizCssText />}
      {category === 'background' && <QuizCssBackground />}
      {category === 'margin' && <QuizCssMargin />}
    </>
  )
}

export default Show
