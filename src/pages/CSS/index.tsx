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
        <Grid item xs={10}>
          <p className={'text-4xl mt-3 mb-4'}>CSS</p>
          <LinkButton url="/css/component" letter="Component" />
          &emsp;
          <LinkButton url="/css/font" letter="Font" />
          &emsp;
          <LinkButton url="/css/text" letter="Text" />
          &emsp;
          <LinkButton url="/css/background" letter="Background" />
          &emsp;
          <LinkButton url="/css/margin" letter="Margin" />
        </Grid>
      </Grid>
    </>
  )
}

export default Index
