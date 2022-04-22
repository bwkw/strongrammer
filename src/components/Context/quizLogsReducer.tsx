import { createContext } from 'react'

import { ADD_QUIZ_LOG } from 'store/actions/quizLogsReducer'

type StateType = {
  category: string
  correctWrongJudgement: '○' | '×' | ''
  dateTime: Date | ''
}
type ActionType = StateType & {
  type: typeof ADD_QUIZ_LOG
}

const QuizLogsReducerContext = createContext(
  {} as {
    states: StateType[]
    dispatch: React.Dispatch<ActionType>
  },
)
export default QuizLogsReducerContext
