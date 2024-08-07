import React, { useContext, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem } from '@mui/material';
import { GrTransaction } from 'react-icons/gr';
import { SettingContext } from '../Context/SettingsContext';
import { LanguagesContext } from '../Context/LanguageContext';
import { TransactionContext } from '../Context/TransactionContext';

const Transactions = () => {
  const { darkMode } = useContext(SettingContext);
  const { language, translations } = useContext(LanguagesContext);
  const { transactions, updateBalance } = useContext(TransactionContext);
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);
  const [newTransaction, setNewTransaction] = useState({ sender: '', receiver: '', amount: '', category: '', purpose: '', remark: '' });

  const handleAdd = () => {
    const amount = parseFloat(newTransaction.amount);

    if (editMode) {
      const updatedTransaction = { ...currentRow, ...newTransaction, amount };
      updateBalance(updatedTransaction, false);
    } else {
      const newId = transactions.length > 0 ? transactions[transactions.length - 1].id + 1 : 1;
      const newRow = { id: newId, ...newTransaction, amount };
      updateBalance(newRow, false);
    }
    setOpen(false);
    setNewTransaction({ sender: '', receiver: '', amount: '', category: '', purpose: '', remark: '' });
    setEditMode(false);
  };

  const handleDelete = (id) => {
    const rowToDelete = transactions.find(row => row.id === id);
    if (rowToDelete) {
      updateBalance(rowToDelete, true);
    }
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
        <div className={`transaction-title-trans ${darkMode ? 'dark-mode' : ''}`}>{translations[language].transactions} <GrTransaction /></div>
        <div className="transaction-table">
          <Button onClick={() => setOpen(true)}>{translations[language].addTransaction}</Button>
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
            rows={transactions}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            components={{ Toolbar: GridToolbar }}
            sx={{
              '& .MuiDataGrid-cell': {
                color: darkMode ? 'white' : 'black',
              },
              '& .MuiDataGrid-columnHeaders': {
                backgroundColor: darkMode ? '#333' : '#fff',
                color: 'black',
              },
              '& .MuiDataGrid-virtualScroller': {
                backgroundColor: darkMode ? '#222' : '#f5f5f5',
              },
              '& .MuiDataGrid-footerContainer': {
                backgroundColor: darkMode ? '#333' : '#fff',
                color: darkMode ? 'white' : 'black',
              },
              '& .MuiTablePagination-root': {
                color: darkMode ? 'white' : 'black',
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Transactions;
