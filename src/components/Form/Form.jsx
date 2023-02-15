import { useState } from 'react';
import { nanoid } from 'nanoid';

import { FormControl } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function ContactsForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleStateChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(name, number, nanoid());
  };

  return (
    <FormControl
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      onChange={handleStateChange}
      sx={{
        minWidth: '350px',
        maxWidth: '500px',
        gap: '10px',
        margin: '0 auto',
      }}
    >
      <TextField
        id="outlined-search"
        label="Full Name"
        name="name"
        type="search"
      />
      <TextField
        id="outlined-search"
        label="Number"
        name="number"
        type="search"
      />
      <Button variant="contained" size="small" type="submit">
        Add contact
      </Button>
    </FormControl>
  );
}
