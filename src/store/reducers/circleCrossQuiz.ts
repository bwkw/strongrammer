import { Reducer } from 'react'

import { SET_USER_CORRECT_COUNT_AND_ANSWER } from 'store/actions/circleCrossQuiz'
import { StateType, ActionType } from 'type/circleCrossQuizReducer'

const circleCrossQuizReducer: Reducer<StateType[] | [], ActionType> = (
  states,
  action,
) => {
  switch (action.type) {
    case SET_USER_CORRECT_COUNT_AND_ANSWER:
      let quizLog = {
        questionNumber: action.questionNumber,
        userAnswer: action.userAnswer,
        isCorrect: action.isCorrect,
      }
      let statesLength: number = states.length
      if (statesLength === 0) {
        let quizLogs = []
        quizLogs[0] = quizLog
        let state: StateType = {
          correctCount: 1,
          circleCrossQuizLogs: quizLogs,
        }
        return [...states, state]
      } else {
        const quizLogsLength: number =
          states[statesLength - 1].circleCrossQuizLogs.length
        if (quizLogsLength < 5) {
          let quizLogs = [
            ...states[statesLength - 1].circleCrossQuizLogs,
            quizLog,
          ]
          let state: StateType = {
            correctCount: 1,
            circleCrossQuizLogs: quizLogs,
          }
          const removeStates = states.splice(statesLength - 1, 1)
          console.log(removeStates)
          return [...states, state]
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
