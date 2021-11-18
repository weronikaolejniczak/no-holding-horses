import { Card, Chip, Skeleton } from '@mui/material';

export const RacesListSkeleton = () => {
  const placeholders = new Array(5).fill(null);

  return (
    <div className="races-list">
      <Chip sx={{ marginRight: 1, width: 100 }} />
      <Chip sx={{ marginRight: 1, width: 100 }} />
      <Chip sx={{ width: 100 }} />
      {placeholders.map(() => (
        <Skeleton width="100%" variant="rectangular">
          <Card raised sx={{ marginLeft: 3, padding: 2, margin: 2 }}>
            <Chip sx={{ marginRight: 1 }} />
          </Card>
        </Skeleton>
      ))}
    </div>
  );
};
