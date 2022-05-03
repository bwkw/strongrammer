import { VFC, useState } from 'react'

import Grid from '@mui/material/Grid'

import QuizStartButton from 'components/Button/quizStart'

const CircleCrossQuizMain: VFC = () => {
  const [quizStartFlag, setQuizStartFlag] = useState(false)
  return (
    <>
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
