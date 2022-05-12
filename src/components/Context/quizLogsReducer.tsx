import { createContext } from 'react'

import { StateType, ActionType } from 'type/quizLogsReducerType'

const QuizLogsReducerContext = createContext(
  {} as {
    quizLogsStates: StateType[]
    quizLogsDispatch: React.Dispatch<ActionType>
  },
)
export default QuizLogsReducerContext
