import { VFC } from 'react'
import { Link } from 'react-router-dom'

import Button from '@mui/material/Button'

type LinkProps = {
  url: string
  letter: string
}

const LinkButton: VFC<LinkProps> = ({ url, letter }) => {
  return (
    <Button variant="outlined" color="primary" component={Link} to={url}>
      {letter}
    </Button>
  )
}

export default LinkButton
