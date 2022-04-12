import React from 'react'
import { Link } from 'react-router-dom'

import Button from '@mui/material/Button'

type LinkButton = {
  url: string
  letter: string
}

const LinkButton: React.VFC<LinkButton> = ({ url, letter }) => {
  return (
    <Button variant="outlined" color="primary" component={Link} to={url}>
      {letter}
    </Button>
  )
}

export default LinkButton
