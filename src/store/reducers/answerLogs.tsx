import { ADD_ANSWER_LOG } from 'store/actions/answerLogs'

type StateType = { category: string; correct_wrong_judgement: boolean }
type ActionType = {
  type: typeof ADD_ANSWER_LOG
  category: string
  correct_wrong_judgement: boolean
}

const answerLogs = (
  state: StateType[],
  action: ActionType,
): StateType[] | never => {
  switch (action.type) {
    case ADD_ANSWER_LOG:
      const answerLog = {
        category: action.category,
        correct_wrong_judgement: action.correct_wrong_judgement,
      }
      return [answerLog, ...state]
    default:
      return state
  }
}
export default answerLogs
