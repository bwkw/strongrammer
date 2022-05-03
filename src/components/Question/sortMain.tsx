import { VFC } from 'react'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

type SortQuestionMainProps = {
  questions: string[]
}

const SortQuestionMain: VFC<SortQuestionMainProps> = ({ questions }) => {
  return (
    <List>
      {questions.map((question, index) => {
        return (
          <ListItem key={index}>
            <p className={'text-xl mt-5 mb-4'}>
              Q{index + 1}. {question}
            </p>
          </ListItem>
        )
      })}
    </List>
  )
}

export default SortQuestionMain
