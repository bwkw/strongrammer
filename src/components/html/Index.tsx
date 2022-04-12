import React from 'react'

import Grid from '@mui/material/Grid'

import LinkButton from 'components/elements/Button/Link'

const Index: React.VFC = () => {
  return (
    <Grid item container xs={12}>
      <Grid item xs={1} />
      <Grid item xs={6}>
        <h1>HTMLマスター</h1>
        <LinkButton url="/html/tag" letter="タグ" />
      </Grid>
    </Grid>
  )
}

export default Index
