import { VFC } from 'react'

import Grid from '@mui/material/Grid'

import BackButton from 'components/Button/back'
import ForwardButton from 'components/Button/forward'
import LinkButton from 'components/Button/link'

const Index: VFC = () => {
  return (
    <>
      <Grid item container xs={12}>
        <Grid item xs={1}>
          <BackButton url={'/'} />
        </Grid>
        <Grid item xs={9} />
        <Grid item xs={2}>
          <ForwardButton url={'/user/logs'} letter={'Quizログへ'} />
        </Grid>
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={1} />
        <Grid item xs={6}>
          <h1>HTML</h1>
          <LinkButton url="/html/tag" letter="Tag" />
          &emsp;
          <LinkButton url="/html/input" letter="Input" />
          &emsp;
        </Grid>
      </Grid>
    </>
  )
}

export default Index
