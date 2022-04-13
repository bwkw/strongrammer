import { VFC } from 'react'

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

type AnswerProps = {
  answers: string[]
}

const Main: VFC<AnswerProps> = ({ answers }) => {
  const onDragEnd = () => {}
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="dropList">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {answers.map((answer, index) => (
                <Draggable
                  draggableId={String(index)}
                  index={index}
                  key={index}
                >
                  {(provided) => (
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
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
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
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  )
}

export default Main
