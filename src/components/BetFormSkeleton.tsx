import { Skeleton, Button, TextField } from '@mui/material';

export const BetFormSkeleton = () => (
  <div className="bet-form">
    <Skeleton>
      <TextField label="Bet amount" sx={{ marginBottom: 2 }} />
    </Skeleton>
    <Skeleton variant="rectangular" height={350} />
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        width: '100%',
      }}
    >
      <Skeleton sx={{ marginRight: 2 }}>
        <Button>Reset form</Button>
      </Skeleton>
      <Skeleton>
        <Button>Place bet</Button>
      </Skeleton>
    </div>
  </div>
);
