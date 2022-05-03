import { VFC } from 'react'

import Grid from '@mui/material/Grid'

import BackButton from 'components/Button/back'
import ForwardButton from 'components/Button/forward'
import { QuizCommonPartProps } from 'type/quiz'

const QuizCommonPart: VFC<QuizCommonPartProps> = ({ language, title }) => {
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
    </>
  )
}

export default QuizCommonPart
