import { VFC } from 'react'

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

type AnswerProps = {
  answers: string[]
  setAnswers: any
}

const Main: VFC<AnswerProps> = ({ answers, setAnswers }) => {
  const onDragEnd = (result: any) => {
    const items = Array.from(answers)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    setAnswers(items)
  }

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="dropList">
          {(provided) => (
            <List
              className="droplist"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {answers.map((answer, index) => (
                <Draggable
                  draggableId={String(index)}
                  index={index}
                  key={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <ListItem key={index}>
                        <div
                          style={{
                            position: 'relative',
                            borderRadius: 10,
                            width: '100px',
                            height: '63px',
                            border: '1px solid gray',
                            boxShadow: '0 3px 4px rgba(0, 0, 0, 0.32)',
                          }}
                        >
                          <div
                            style={{
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              transform: 'translate(-50%, -50%)',
                              userSelect: 'none',
                            }}
                          >
                            {answer}
                          </div>
                        </div>
                      </ListItem>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </DragDropContext>
    </>
  )
}

export default Main
