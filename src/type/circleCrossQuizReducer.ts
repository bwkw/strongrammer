// circleCrossQuizReducerに関するtypeを定義

import { SET_USER_CORRECT_COUNT_AND_ANSWER } from 'store/actions/circleCrossQuiz'

export type circleCrossQuizLog = {
  questionNumber: number
  user_answer: '○' | '×'
}
export type StateType = {
  correct_count: number
  circleCrossQuizLogs: circleCrossQuizLog[]
}

export type StatesType = {
  states: StateType[]
}

export type ActionType = StateType & {
  type: typeof SET_USER_CORRECT_COUNT_AND_ANSWER
}
