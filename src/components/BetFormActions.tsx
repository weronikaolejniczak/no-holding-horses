import throttle from 'lodash.throttle';
import { Button } from '@mui/material';

import { EColors } from 'constants/EColors';

interface IBetFormActionsProps {
  error: string;
  handleOnSubmit: () => void;
  resetForm: () => void;
}

export const BetFormActions = ({
  error,
  handleOnSubmit,
  resetForm,
}: IBetFormActionsProps) => {
  const throttledSubmit = throttle(handleOnSubmit, 1000);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 30,
        width: '100%',
      }}
    >
      <p style={{ color: EColors.error }}>{error}</p>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button variant="text" sx={{ marginRight: 2 }} onClick={resetForm}>
          Reset form
        </Button>
        <Button variant="contained" onClick={throttledSubmit}>
          Place bet
        </Button>
      </div>
    </div>
  );
};
