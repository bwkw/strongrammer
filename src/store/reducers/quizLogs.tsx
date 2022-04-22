import { Reducer } from 'react'

import { ADD_QUIZ_LOG } from 'store/actions/quizLogsReducer'

type StateType = {
  category: string
  correctWrongJudgement: '○' | '×' | ''
  dateTime: Date | ''
}
type ActionType = StateType & {
  type: typeof ADD_QUIZ_LOG
}

const quizLogsReducer: Reducer<StateType[], ActionType> = (states, action) => {
  switch (action.type) {
    case ADD_QUIZ_LOG:
      const quizLog = {
        category: action.category,
        correctWrongJudgement: action.correctWrongJudgement,
        dateTime: action.dateTime,
      }
      return [...states, quizLog]
    default:
      return states
  }
}

export default quizLogsReducer
