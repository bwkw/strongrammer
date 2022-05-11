import { Reducer } from 'react'

import { SET_USER_CORRECT_COUNT_AND_ANSWER } from 'store/actions/circleCrossQuiz'
import { StateType, ActionType } from 'type/circleCrossQuizReducer'

const circleCrossQuizReducer: Reducer<StateType[] | [], ActionType> = (
  states,
  action,
) => {
  switch (action.type) {
    case SET_USER_CORRECT_COUNT_AND_ANSWER:
      const quizLog = {
        questionNumber: action.questionNumber,
        userAnswer: action.userAnswer,
      }
      const statesLength: number = states.length
      if (statesLength === 0) {
        const quizLogs = []
        quizLogs[0] = quizLog
        const state: StateType = {
          correctCount: 1,
          circleCrossQuizLogs: quizLogs,
        }
        return [...states, state]
      } else {
        const quizLogsLength: number =
          states[statesLength - 1].circleCrossQuizLogs.length
        if (quizLogsLength < 5) {
          const quizLogs = [
            ...states[statesLength - 1].circleCrossQuizLogs,
            quizLog,
          ]
          const state: StateType = {
            correctCount: 1,
            circleCrossQuizLogs: quizLogs,
          }
          states[statesLength - 1] = state
          return states
        } else {
          const quizLogs = []
          quizLogs[0] = quizLog
          const state: StateType = {
            correctCount: 1,
            circleCrossQuizLogs: quizLogs,
          }
          return [...states, state]
        }
      }
    default:
      return states
  }
}

export default circleCrossQuizReducer
