// circleCrossQuizReducerに関するtypeを定義

import { SET_USER_CORRECT_COUNT_AND_ANSWER } from 'store/actions/circleCrossQuiz'

export type CircleCrossQuizLog = {
  questionNumber: number
  userAnswer: '○' | '×'
  isCorrect: boolean
}
export type StateType = {
  correctCount: number
  circleCrossQuizLogs: CircleCrossQuizLog[]
}

export type ActionType = CircleCrossQuizLog & {
  type: typeof SET_USER_CORRECT_COUNT_AND_ANSWER
}
