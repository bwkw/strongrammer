import { createContext } from 'react'

import { StateType, ActionType } from 'type/quizLogsReducerType'

const QuizLogsReducerContext = createContext(
  {} as {
    states: StateType[]
    dispatch: React.Dispatch<ActionType>
  },
)
export default QuizLogsReducerContext
