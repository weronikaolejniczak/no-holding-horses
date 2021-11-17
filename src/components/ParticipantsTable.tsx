import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Radio,
} from '@mui/material';

export const ParticipantsTable = () => {
  const rows = [
    { name: 'Hello', winner: false, secondPlace: false, thirdPlace: false },
    { name: 'Hello', winner: false, secondPlace: false, thirdPlace: false },
    { name: 'Hello', winner: false, secondPlace: false, thirdPlace: false },
    { name: 'Hello', winner: false, secondPlace: false, thirdPlace: false },
  ];

  const toggleRadio = (
    participant: string,
    betPlace: 'winner' | 'secondPlace' | 'thirdPlace',
  ) => {
    console.log(participant);
    console.log(betPlace);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Winner</TableCell>
            <TableCell>Second place</TableCell>
            <TableCell>Third place</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell>
                <Radio
                  onChange={() => toggleRadio(row.name, 'winner')}
                  checked={row.winner}
                />
              </TableCell>
              <TableCell>
                <Radio
                  onChange={() => toggleRadio(row.name, 'secondPlace')}
                  checked={row.secondPlace}
                />
              </TableCell>
              <TableCell>
                <Radio
                  onChange={() => toggleRadio(row.name, 'thirdPlace')}
                  checked={row.thirdPlace}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
