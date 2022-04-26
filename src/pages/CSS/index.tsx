import { VFC } from 'react'

import Grid from '@mui/material/Grid'

import BackButton from 'components/Button/back'
import ForwardButton from 'components/Button/forward'
import LinkButton from 'components/Button/link'

const Index: VFC = () => {
  return (
    <>
      <Grid item container xs={12}>
        <Grid item xs={2}>
          <BackButton url={'/'} letter={'戻る'} />
        </Grid>
        <Grid item xs={8} />
        <Grid item xs={2}>
          <ForwardButton url={'/user/logs'} letter={'Quizログへ'} />
        </Grid>
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={1} />
        <Grid item xs={6}>
          <h1>CSS</h1>
          <LinkButton url="/css/component" letter="Component" />
        </Grid>
      </Grid>
    </>
  )
}

export default Index
