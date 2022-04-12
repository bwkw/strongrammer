import React from 'react'
import { useParams } from 'react-router-dom'

import Grid from '@mui/material/Grid'

import HtmlTag from 'components/elements/Question/Html/Tag'

const Show: React.VFC = () => {
  const { category } = useParams<{ category: string }>()

  return (
    <Grid item container xs={12}>
      <Grid item xs={1} />
      <Grid item xs={6}>
        {category == 'tag' && <HtmlTag />}
      </Grid>
    </Grid>
  )
}

export default Show
