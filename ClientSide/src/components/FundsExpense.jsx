import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';
import { TextInput } from '@mantine/core';
import { Textarea } from '@mantine/core'; 
function FundsExpense({ opened, setOpened }) {
  const [formValue, setFormValue] = useState({
    expenses: {
      source: '',
      note: '',
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
      <Modal opened={opened} onClose={() => setOpened(false)} title="Add a new Fund">
        <TextInput
          type="text"
          size="lg"
          label="Source"
          name="source"
          value={formValue.expenses.source}
          onChange={handleChange}
          required
        />
        <TextInput
          type="number"
          size="lg"
          label="Price"
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
        <Textarea
          type="text"
          size="lg"
          label="Note"
          name="note"
          value={formValue.expenses.note}
          onChange={handleChange}
          required
          autosize
          minRows={2}
        />
        <Button variant="outline" size="md" fullWidth sx={{ margin: '20px 0' }}>
          Add to Funds
        </Button>
      </Modal>
    </>
  );
}

export default FundsExpense;
