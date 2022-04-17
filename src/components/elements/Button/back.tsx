import { VFC } from 'react'
import { Link } from 'react-router-dom'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Button from '@mui/material/Button'

type BackButtonProps = {
  url: string
}

const BackButton: VFC<BackButtonProps> = ({ url }) => {
  return (
    <>
      <Button
        component={Link}
        to={url}
        startIcon={<ArrowBackIcon />}
      >
        戻る
      </Button>
    </>
  )
}

export default BackButton
