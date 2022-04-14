import { VFC } from 'react'
import Grid from '@mui/material/Grid'

import { Button } from '@mui/material'
import { Box } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

import QuestionHtmlTag from 'components/elements/Question/Html/tag'
import AnswerHtmlTag from 'components/elements/Answer/Html/tag'

const Tag: VFC = () => {
  return (
    <>
      <Grid item container xs={12}>
        <Grid item xs={1} />
        <h2>タグ編</h2>
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={1} />
        <Grid item xs={7}>
          <QuestionHtmlTag />
        </Grid>
        <Grid item xs={3}>
          <AnswerHtmlTag />
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

export default Tag
