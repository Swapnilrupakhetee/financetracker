/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
    { id: 'sender', label: 'Sender', minWidth: 170 },
    { id: 'receiver', label: 'Receiver', minWidth: 170 },
    {
      id: 'amount',
      label: 'Amount',
      minWidth: 100,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'category',
      label: 'Category',
      minWidth: 170,
    },
    {
      id: 'purpose',
      label: 'Purpose',
      minWidth: 170,
    },
    {
      id: 'remark',
      label: 'Remark',
      minWidth: 170,
    },
  ];

  function createData(sender, receiver, amount, category, purpose, remark) {
    return { sender, receiver, amount, category, purpose, remark };
  }
  
  const rows = [
    createData('Alice', 'Bob', 1000, 'Gift', 'Birthday', 'None'),
    createData('John', 'Doe', 1500, 'Loan', 'Personal', 'Repay next month'),
    createData('Anna', 'Smith', 2000, 'Salary', 'Monthly', 'On time'),
    createData('James', 'Brown', 2500, 'Rent', 'Monthly', 'Paid'),
    createData('David', 'Wilson', 3000, 'Donation', 'Charity', 'Generous'),
    createData('Alice', 'Bob', 1000, 'Gift', 'Birthday', 'None'),
    createData('John', 'Doe', 1500, 'Loan', 'Personal', 'Repay next month'),
    createData('Anna', 'Smith', 2000, 'Salary', 'Monthly', 'On time'),
    createData('James', 'Brown', 2500, 'Rent', 'Monthly', 'Paid'),
    createData('David', 'Wilson', 3000, 'Donation', 'Charity', 'Generous'),
    createData('Alice', 'Bob', 1000, 'Gift', 'Birthday', 'None'),
    createData('John', 'Doe', 1500, 'Loan', 'Personal', 'Repay next month'),
    createData('Anna', 'Smith', 2000, 'Salary', 'Monthly', 'On time'),
    createData('James', 'Brown', 2500, 'Rent', 'Monthly', 'Paid'),
    createData('David', 'Wilson', 3000, 'Donation', 'Charity', 'Generous'),
    // Add more rows as needed
  ];

const scrollbarStyles = css`
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #2c2c2c;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #555;
    border-radius: 10px;
    border: 2px solid #2c2c2c;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #888;
  }
`;

export default function TransactionTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', backgroundColor: '#121212', color: '#fff',borderRadius:'10px' }}>
      <TableContainer sx={{ maxHeight: 440 }} css={scrollbarStyles}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, backgroundColor: '#000', color: '#fff', borderBottom: '1px solid rgb(49, 49, 49)' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code} sx={{ backgroundColor: '#1c1c1c', color: '#fff' }}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} sx={{ color: '#fff', borderBottom: '1px solid rgb(49, 49, 49)' }}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ backgroundColor: '#121212', color: '#fff' }}
      />
    </Paper>
  );
}
