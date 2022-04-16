import { VFC } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

import CheckCircleIcon from '@mui/icons-material/CheckCircle'

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
      <Box mt={5} />
      <Grid item container xs={12}>
        <Grid item xs={5} />
        <Button color="primary" size="large" startIcon={<CheckCircleIcon />}>
          答え合わせ
        </Button>
      </Grid>
    </>
  )
}

export default Main
