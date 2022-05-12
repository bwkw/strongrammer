// quizLogsReducerに関するtypeを定義

import { ADD_QUIZ_LOG } from 'store/actions/quizLogsReducer'

export type ColumnsType = {
  id: string
  label: string
  minWidth: number
}

export type StateType = {
  category: string
  result: '○' | '×' | number
  dateTime: string
}

export type StatesType = {
  states: StateType[]
}

export type ActionType = StateType & {
  type: typeof ADD_QUIZ_LOG
}
