import { VFC } from 'react'

type SortQuestionMainProps = {
  questions: string[]
}

const SortQuestionMain: VFC<SortQuestionMainProps> = ({ questions }) => {
  return (
    <>
      {questions.map((question, index) => {
        return (
          <div key={index} className={'h-20 table'}>
            <span className={'text-xl table-cell align-middle'}>
              Q{index + 1}. {question}
            </span>
          </div>
        )
      })}
    </>
  )
}

export default SortQuestionMain
