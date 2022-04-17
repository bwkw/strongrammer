import {VFC} from 'react'

import Grid from '@mui/material/Grid'

import LinkButton from 'components/elements/Button/link'

const Top: VFC = () => {
  return (
    <>
      <Grid item container xs={12}>
        <Grid item xs={1} />
        <Grid item xs={6}>
          <h1>Strongrammer</h1>
          <LinkButton url="/html" letter="HTML" />
        </Grid>
      </Grid>
    </>
  )
}

export default Top