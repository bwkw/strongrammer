import { Reducer } from 'react'

import { SET_USER_CORRECT_COUNT_AND_ANSWER } from 'store/actions/circleCrossQuiz'
import { StateType, ActionType } from 'type/circleCrossQuizReducer'

const circleCrossQuizReducer: Reducer<StateType[], ActionType> = (
  states,
  action,
) => {
  switch (action.type) {
    case SET_USER_CORRECT_COUNT_AND_ANSWER:
      const quizLog = {
        questionNumber: action.questionNumber,
        user_answer: action.user_answer,
      }
      const statesLength: number = states.length
      const quizLogsLength: number =
        states[statesLength].circleCrossQuizLogs.length
      if (quizLogsLength < 5) {
        const quizLogs = [...states[statesLength].circleCrossQuizLogs, quizLog]
        const state: StateType = {
          correct_count: 1,
          circleCrossQuizLogs: quizLogs,
        }

        // states = states.pop()

        return [...states, state]
      } else {
        const quizLogs = []
        quizLogs[0] = quizLog
        const state: StateType = {
          correct_count: 1,
          circleCrossQuizLogs: quizLogs,
        }
        return [...states, state]
      }
    default:
      return states
  }
}

export default circleCrossQuizReducer
