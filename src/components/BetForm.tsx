import { Button, TextField } from '@mui/material';

import { ParticipantsTable } from 'components/ParticipantsTable';

export const BetForm = () => {
  // TODO: fix any type
  const handleOnChange = (event: any) => {
    console.log(event.target.value);
  };

  return (
    <div className="bet-form">
      <TextField
        label="Bet amount"
        color="primary"
        onChange={handleOnChange}
        type="number"
        required
        aria-required
        sx={{ marginBottom: 2 }}
      />
      <ParticipantsTable />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 30,
          width: '100%',
        }}
      >
        <Button variant="text" sx={{ marginRight: 2 }}>
          Reset form
        </Button>
        <Button variant="contained">Place bet</Button>
      </div>
    </div>
  );
};
