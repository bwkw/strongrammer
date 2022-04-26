import { VFC } from 'react'

import Grid from '@mui/material/Grid'

import LinkButton from 'components/Button/link'
import ForwardButton from 'components/Button/forward'

const Top: VFC = () => {
  return (
    <>
      <Grid item container xs={12}>
        <Grid item xs={10} />
        <ForwardButton url={'/user/logs'} letter={'Quizログへ'} />
      </Grid>

      <Grid item container xs={12}>
        <Grid item xs={1} />
        <Grid item xs={6}>
          <h1>Strongrammer</h1>
          <LinkButton url="/html" letter="HTML" />
          &emsp;
          <LinkButton url="/css" letter="CSS" />
        </Grid>
      </Grid>
    </>
  )
}

export default Top
