import { Reducer } from 'react'

import { ADD_ANSWER_LOG } from 'store/actions/answerLogs'

type StateType = {
  category: string
  correctWrongJudgement: '○' | '×' | ''
  dateTime: Date | ''
}
type ActionType = StateType & {
  type: typeof ADD_ANSWER_LOG
}

const answerLogsReducer: Reducer<StateType[], ActionType> = (state, action) => {
  switch (action.type) {
    case ADD_ANSWER_LOG:
      const answerLog = {
        category: action.category,
        correctWrongJudgement: action.correctWrongJudgement,
        dateTime: action.dateTime,
      }
      return [...state, answerLog]
    default:
      return state
  }
}

export default answerLogsReducer
