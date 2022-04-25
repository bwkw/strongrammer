import { VFC } from 'react'
import { Link } from 'react-router-dom'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Button from '@mui/material/Button'

type BackButtonProps = {
  url: string
  letter: string
}

const BackButton: VFC<BackButtonProps> = ({ url, letter }) => {
  return (
    <>
      <Button
        color={'secondary'}
        component={Link}
        to={url}
        startIcon={<ArrowBackIcon />}
        style={{ textTransform: 'none' }}
      >
        {letter}
      </Button>
    </>
  )
}

export default BackButton
