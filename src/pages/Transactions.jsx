import React, { useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem } from '@mui/material';
import { GrTransaction } from 'react-icons/gr';

const initialRows = [
  { id: 1, sender: 'Alice', receiver: 'Bob', amount: 100, category: 'Expense', purpose: 'Birthday', remark: 'Happy Birthday!' },
  { id: 2, sender: 'Alice', receiver: 'Bob', amount: 100, category: 'Income', purpose: 'Birthday', remark: 'Happy Birthday!' },
  { id: 3, sender: 'Alice', receiver: 'Bob', amount: 100, category: 'Income', purpose: 'Birthday', remark: 'Happy Birthday!' },
  { id: 4, sender: 'Alice', receiver: 'Bob', amount: 100, category: 'Expense', purpose: 'Birthday', remark: 'Happy Birthday!' },
  // Add more initial rows here
];

const Transactions = () => {
  const [rows, setRows] = useState(initialRows);
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);
  const [newTransaction, setNewTransaction] = useState({ sender: '', receiver: '', amount: '', category: '', purpose: '', remark: '' });

  const handleAdd = () => {
    if (editMode) {
      setRows(rows.map((row) => (row.id === currentRow.id ? { ...currentRow, ...newTransaction } : row)));
    } else {
      setRows([...rows, { id: rows.length + 1, ...newTransaction }]);
    }
    setOpen(false);
    setNewTransaction({ sender: '', receiver: '', amount: '', category: '', purpose: '', remark: '' });
    setEditMode(false);
  };

  const handleDelete = (id) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

  const handleEdit = (row) => {
    setNewTransaction(row);
    setCurrentRow(row);
    setEditMode(true);
    setOpen(true);
  };

  const columns = [
    { field: 'sender', headerName: 'Sender', width: 150 },
    { field: 'receiver', headerName: 'Receiver', width: 150 },
    { field: 'amount', headerName: 'Amount', width: 100 },
    { field: 'category', headerName: 'Category', width: 150 },
    { field: 'purpose', headerName: 'Purpose', width: 200 },
    { field: 'remark', headerName: 'Remark', width: 250 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <>
          <Button onClick={() => handleEdit(params.row)}>Edit</Button>
          <Button onClick={() => handleDelete(params.id)}>Delete</Button>
        </>
      ),
    },
  ];

  return (
    <div className="transactions-container">
      <div className="transactions-content">
        <div className="transaction-title">Transaction <GrTransaction /></div>
        <div className="transaction-table">
          <Button onClick={() => setOpen(true)}>Add Transaction</Button>
          <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>{editMode ? 'Edit Transaction' : 'Add Transaction'}</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                label="Sender"
                fullWidth
                value={newTransaction.sender}
                onChange={(e) => setNewTransaction({ ...newTransaction, sender: e.target.value })}
              />
              <TextField
                margin="dense"
                label="Receiver"
                fullWidth
                value={newTransaction.receiver}
                onChange={(e) => setNewTransaction({ ...newTransaction, receiver: e.target.value })}
              />
              <TextField
                margin="dense"
                label="Amount"
                fullWidth
                type="number"
                value={newTransaction.amount}
                onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })}
              />
              <TextField
                select
                margin="dense"
                label="Category"
                fullWidth
                value={newTransaction.category}
                onChange={(e) => setNewTransaction({ ...newTransaction, category: e.target.value })}
              >
                <MenuItem value="Income">Income</MenuItem>
                <MenuItem value="Expense">Expense</MenuItem>
                <MenuItem value="Savings">Savings</MenuItem>
              </TextField>
              <TextField
                margin="dense"
                label="Purpose"
                fullWidth
                value={newTransaction.purpose}
                onChange={(e) => setNewTransaction({ ...newTransaction, purpose: e.target.value })}
              />
              <TextField
                margin="dense"
                label="Remark"
                fullWidth
                value={newTransaction.remark}
                onChange={(e) => setNewTransaction({ ...newTransaction, remark: e.target.value })}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={handleAdd}>{editMode ? 'Save' : 'Add'}</Button>
            </DialogActions>
          </Dialog>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            components={{ Toolbar: GridToolbar }}
            sx={{
              '& .MuiDataGrid-cell': {
                color: 'white',
              },
              '& .MuiDataGrid-columnHeaders': {
                backgroundColor: '#333', // Optional: Change header background color
                color: 'black', // Change header text color
              },
              '& .MuiDataGrid-virtualScroller': {
                backgroundColor: '#222', // Optional: Change background color of the table
              },
              '& .MuiDataGrid-footerContainer': {
                backgroundColor: '#333', // Optional: Change footer background color
                color: 'white', // Change footer text color
              },
              '& .MuiTablePagination-root': {
                color: 'white', // Change pagination text color
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Transactions;
