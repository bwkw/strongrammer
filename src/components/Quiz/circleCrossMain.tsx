import { VFC, useState } from 'react'

import Grid from '@mui/material/Grid'

import BackButton from 'components/Button/back'
import CircleCrossQuizModal from 'components/Modal/circleCrossQuiz'
import ForwardButton from 'components/Button/forward'
import StartButton from 'components/Button/quizStart'

type CircleCrossQuizMainProps = {
  language: string
  title: string
}

const CircleCrossQuizMain: VFC<CircleCrossQuizMainProps> = ({
  language,
  title,
}) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Grid item container xs={12}>
        <Grid item xs={2}>
          <BackButton url={`/${language}`} letter={'戻る'} />
        </Grid>
        <Grid item xs={8} />
        <Grid item xs={2}>
          <ForwardButton url={'/user/logs'} letter={'Quizログへ'} />
        </Grid>
      </Grid>

      <Grid item container xs={12}>
        <Grid item xs={1} />
        <h2>{title}編</h2>
      </Grid>

      <Grid item container xs={12}>
        <Grid item xs={5} />
        <StartButton setOpen={setOpen} />
        <CircleCrossQuizModal open={open} setOpen={setOpen} />
      </Grid>
    </>
  )
}

export default CircleCrossQuizMain
