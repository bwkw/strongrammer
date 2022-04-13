import Grid from '@mui/material/Grid'

import QuestionHtmlTag from 'components/elements/Question/Html/Tag'
import AnswerHtmlTag from 'components/elements/Answer/Html/Tag'

const Tag: React.VFC = () => {
  return (
    <>
      <Grid item container xs={12}>
        <Grid item xs={1} />
        <h2>タグ編</h2>
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={1} />
        <Grid item xs={5}>
          <QuestionHtmlTag />
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}>
          <AnswerHtmlTag />
        </Grid>
      </Grid>
    </>
  )
}

export default Tag
