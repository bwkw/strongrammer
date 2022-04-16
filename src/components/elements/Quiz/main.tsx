import { VFC } from 'react'

import Grid from '@mui/material/Grid'

type QuizProps = {
  title: string
  question: JSX.Element
  answer: JSX.Element
}

const Main: VFC<QuizProps> = ({ title, question, answer }) => {
  return (
    <>
      <Grid item container xs={12}>
        <Grid item xs={1} />
        <h2>{title}編</h2>
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={1} />
        <Grid item xs={7}>
          {question}
        </Grid>
        <Grid item xs={3}>
          {answer}
        </Grid>
      </Grid>
    </>
  )
}

export default Main
