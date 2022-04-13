import React from 'react'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

type QuestionProps = {
  questions: string[]
}

const Main: React.VFC<QuestionProps> = ({ questions }) => {
  return (
    <List>
      {questions.map((question, index) => {
        return (
          <ListItem key={index}>
            <h3>
              Q{index + 1}. {question}
            </h3>
          </ListItem>
        )
      })}
    </List>
  )
}

export default Main
