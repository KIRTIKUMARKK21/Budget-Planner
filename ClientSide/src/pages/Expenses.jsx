import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ExpensesTable from '../components/ExpensesTable';
import StocksTable from '../components/StocksTable';
import FundsTable from '../components/FundsTable';
import { Container } from '@mui/material';
import BudgetProfile from '../components/BudgetProfile';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import ModalExpense from '../components/ModalExpense';
import FundsExpense from '../components/FundsExpense';
import StocksExpense from '../components/StocksExpense';
import { useState } from 'react';

export default function Expenses() {
  const [value, setValue] = React.useState(0);
  const [opened, setOpened] = useState(false);
  const Modals = [
    <ModalExpense opened={opened} setOpened={setOpened} />,
    <FundsExpense opened={opened} setOpened={setOpened} />,
    <StocksExpense opened={opened} setOpened={setOpened} />,
  ];
  const Components = [<ExpensesTable />, <FundsTable />, <StocksTable />, <BudgetProfile />];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleModalOpen = () => {
    setOpened(true);
  };
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Expenses" />
        <Tab label="Funds" />
        <Tab label="Stocks" />
        <Tab label="Budget Profile" />
      </Tabs>

      <Container>
        {value < 3 && (
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', mt: 2, mb: 2 }}>
            <Fab color="primary" variant="extended" aria-label="add" onClick={handleModalOpen} sx={{ zIndex: 1 }}>
              <AddIcon />
              Add New
            </Fab>
          </Box>
        )}
        {Components[value]}
      </Container>
      {Modals[value]}
    </Box>
  );
}
