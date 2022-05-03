import { VFC } from 'react'

import Grid from '@mui/material/Grid'

import LinkButton from 'components/Button/link'
import ForwardButton from 'components/Button/forward'

const Top: VFC = () => {
  return (
    <>
      <Grid item container xs={12}>
        <Grid item xs={10} />
        <div className={'mt-3'}>
          <ForwardButton url={'/user/logs'} letter={'Quizログへ'} />
        </div>
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={1} />
        <Grid item xs={6}>
          <p className={'text-4xl mt-3 mb-4'}>Strongrammer</p>
          <LinkButton url="/html" letter="HTML" />
          &emsp;
          <LinkButton url="/css" letter="CSS" />
        </Grid>
      </Grid>
    </>
  )
}

export default Top
