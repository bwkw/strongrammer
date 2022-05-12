import React, { VFC, useState } from 'react'

import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'

import { ColumnsType, StateType, StatesType } from 'type/quizLogsReducerType'

const QuizLogsTable: VFC<StatesType> = ({ states }) => {
  const columns: ColumnsType[] = [
    { id: 'category', label: 'カテゴリ', minWidth: 150 },
    {
      id: 'result',
      label: '結果',
      minWidth: 150,
    },
    { id: 'dateTime', label: '日付', minWidth: 150 },
  ]

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number,
  ) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: any | null) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 3000 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    style={{ minWidth: column.minWidth }}
                    align={'center'}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {states
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((state: StateType, index: number) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      <TableCell key={state.category} align={'center'}>
                        {state.category}
                      </TableCell>
                      <TableCell key={state.result} align={'center'}>
                        {typeof state.result === 'number'
                          ? `${state.result}点`
                          : state.result}
                      </TableCell>
                      <TableCell align={'center'}>{state.dateTime}</TableCell>
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={states.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  )
}

export default QuizLogsTable
