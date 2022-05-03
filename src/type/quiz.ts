// Quizに関するtypeを定義

export type QuizCommonPartProps = {
  language: string
  title: string
}

export type SortQuizMainProps = {
  language: string
  title: string
  questions: string[]
  answers: string[]
  setAnswers: any
  yourAnswers: string[]
  correctAnswers: string[]
}
