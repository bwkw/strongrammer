import { VFC, useState } from 'react'

import Grid from '@mui/material/Grid'

import BackButton from 'components/Button/back'
import ForwardButton from 'components/Button/forward'
import QuizStartButton from 'components/Button/quizStart'

type CircleCrossQuizMainProps = {
  language: string
  title: string
}

const CircleCrossQuizMain: VFC<CircleCrossQuizMainProps> = ({
  language,
  title,
}) => {
  const [quizStartFlag, setQuizStartFlag] = useState(false)
  return (
    <>
      <Grid item container xs={12}>
        <Grid item xs={2}>
          <div className={'mt-3 ml-2'}>
            <BackButton url={`/${language}`} letter={'戻る'} />
          </div>
        </Grid>
        <Grid item xs={8} />
        <Grid item xs={2}>
          <div className={'mt-3'}>
            <ForwardButton url={'/user/logs'} letter={'Quizログへ'} />
          </div>
        </Grid>
      </Grid>

      <Grid item container xs={12}>
        <Grid item xs={1} />
        <p className={'text-3xl mt-3 mb-4'}>{title} 編</p>
      </Grid>

      <Grid item container xs={12}>
        <Grid item xs={5} />
        {!quizStartFlag && (
          <QuizStartButton setQuizStartFlag={setQuizStartFlag} />
        )}
        {quizStartFlag && <div>test</div>}
      </Grid>
    </>
  )
}

export default CircleCrossQuizMain
