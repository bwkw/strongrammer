import { VFC } from 'react'

import Grid from '@mui/material/Grid'

import BackButton from 'components/Button/back'
import ForwardButton from 'components/Button/forward'
import LinkButton from 'components/Button/link'

const Index: VFC = () => {
  return (
    <>
      <Grid item container xs={12}>
        <Grid item xs={2}>
          <div className={'mt-3 ml-2'}>
            <BackButton url={'/'} letter={'戻る'} />
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
        <Grid item xs={6}>
          <p className={'text-4xl mt-3 mb-4'}>HTML</p>
          <LinkButton url="/html/tag" letter="Tag" />
          &emsp;
          <LinkButton url="/html/input" letter="Input" />
          &emsp;
          <LinkButton url="/html/inline-block" letter="Inline/Block" />
          &emsp;
        </Grid>
      </Grid>
    </>
  )
}

export default Index
