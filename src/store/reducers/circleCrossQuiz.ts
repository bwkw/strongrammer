import { Reducer } from 'react'

import { SET_USER_CORRECT_COUNT_AND_ANSWER } from 'store/actions/circleCrossQuiz'
import { StateType, ActionType } from 'type/circleCrossQuizReducer'

const circleCrossQuizReducer: Reducer<StateType, ActionType> = (
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
      const quizLogs = [...states.circleCrossQuizLogs, quizLog]
      let correctCount = 0
      quizLogs.forEach((quizLog) => {
        Object.keys(quizLog).forEach((key) => {
          if (key === 'isCorrect' && quizLog[key] === true) {
            correctCount += 1
          }
        })
      })
      states = {
        correctCount: correctCount,
        circleCrossQuizLogs: quizLogs,
      }
      return states

    default:
      return states
  }
}

export default circleCrossQuizReducer
