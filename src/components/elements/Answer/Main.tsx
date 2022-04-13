import { VFC } from 'react'

type AnswerProps = {
  answers: string[]
}

const Main: VFC<AnswerProps> = ({ answers }) => {
  return (
    <>
      {answers.map((answer) => {
        return (
          <div
            style={{
              position: 'relative',
              borderRadius: 4,
              width: '100px',
              height: '60px',
              border: '1px solid gray',
              margin: '18px 0px',
              boxShadow: '0 3px 4px rgba(0, 0, 0, 0.32)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              {answer}
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Main
