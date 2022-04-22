import { Reducer } from 'react'

import { ADD_QUIZ_LOG } from 'store/actions/quizLogs'

type StateType = {
  category: string
  correctWrongJudgement: '○' | '×' | ''
  dateTime: Date | ''
}
type ActionType = StateType & {
  type: typeof ADD_QUIZ_LOG
}

const quizLogsReducer: Reducer<StateType[], ActionType> = (state, action) => {
  switch (action.type) {
    case ADD_QUIZ_LOG:
      const quizLog = {
        category: action.category,
        correctWrongJudgement: action.correctWrongJudgement,
        dateTime: action.dateTime,
      }
      return [...state, quizLog]
    default:
      return state
  }
}

export default quizLogsReducer
