import { VFC } from 'react'
import { Link } from 'react-router-dom'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Button from '@mui/material/Button'

type BackButtonProps = {
  url: string
  letter: string
}

const ForwardButton: VFC<BackButtonProps> = ({ url, letter }) => {
  return (
    <>
      <Button
        color={'secondary'}
        component={Link}
        to={url}
        startIcon={<ArrowForwardIcon />}
        style={{ textTransform: 'none' }}
      >
        {letter}
      </Button>
    </>
  )
}

export default ForwardButton
