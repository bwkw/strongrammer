import { Reducer } from 'react'

import { SET_USER_CORRECT_COUNT_AND_ANSWER } from 'store/actions/circleCrossQuiz'
import { StateType, ActionType } from 'type/circleCrossQuizReducer'

const circleCrossQuizReducer: Reducer<StateType[], ActionType> = (
  states,
  action,
) => {
  switch (action.type) {
    case SET_USER_CORRECT_COUNT_AND_ANSWER:
    default:
      return states
  }
}

export default circleCrossQuizReducer
