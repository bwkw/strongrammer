import { ADD_ANSWER_LOG } from 'store/actions/answerLogs'

type StateType = {
  category: string
  correctWrongJudgement: '○' | '×'
  dateTime: Date
}
type ActionType = StateType & {
  type: typeof ADD_ANSWER_LOG
}

const answerLogs = (
  state: StateType[],
  action: ActionType,
): StateType[] | never => {
  switch (action.type) {
    case ADD_ANSWER_LOG:
      const answerLog = {
        category: action.category,
        correctWrongJudgement: action.correctWrongJudgement,
        dateTime: action.dateTime,
      }
      return [answerLog, ...state]
    default:
      return state
  }
}
export default answerLogs
