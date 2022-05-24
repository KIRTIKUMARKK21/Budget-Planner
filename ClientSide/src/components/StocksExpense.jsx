import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';
import { TextInput } from '@mantine/core';
import { Textarea } from '@mantine/core';
function StocksExpense({ opened, setOpened }) {
  const [formValue, setFormValue] = useState({
    expenses: {
      symbol: '',
      quantity: '',
      price: '',
      date: '',
    },
  });
  console.log(formValue);
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setFormValue({
      ...formValue,
      expenses: {
        ...formValue.expenses,
        [e.target.name]: e.target.value,
      },
    });
  };
  return (
    <>
      <Modal opened={opened} onClose={() => setOpened(false)} title="Add a new Stocks">
        <TextInput
          type="text"
          size="lg"
          label="Symbol"
          name="symbol"
          value={formValue.expenses.source}
          onChange={handleChange}
          required
        />
        <TextInput
          type="number"
          size="lg"
          label="Price of one Share"
          name="price"
          value={formValue.expenses.price}
          onChange={handleChange}
          required
        />
        <TextInput
          type="date"
          size="lg"
          label="Date"
          name="date"
          value={formValue.expenses.date}
          onChange={handleChange}
          required
        />
        <TextInput
          type="number"
          size="lg"
          label="Quantity"
          name="quantity"
          value={formValue.expenses.note}
          onChange={handleChange}
          required 
        
        />
        <Button variant="outline" size="md" fullWidth sx={{ margin: '20px 0' }}>
          Add to Stocks
        </Button>
      </Modal>
    </>
  );
}

export default StocksExpense;
