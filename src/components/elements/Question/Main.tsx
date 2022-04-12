import React from 'react'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

type Question = {
  questions: string[]
}

const Main: React.VFC<Question> = ({ questions }) => {
  return (
    <List>
      {questions.map((question, index) => {
        return (
          <ListItem key={index}>
            Q{index + 1}. {question}
          </ListItem>
        )
      })}
    </List>
  )
}

export default Main
