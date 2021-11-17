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
import { useSelector } from 'react-redux';

import { selectRaceDataParticipants } from 'redux/race/raceSelectors';
import { selectParticipantsWithIds } from 'redux/participants/participantsSelectors';

export const ParticipantsTable = () => {
  const participantIds = useSelector(selectRaceDataParticipants);
  const participants = useSelector(selectParticipantsWithIds(participantIds));

  const rows = participants.map(({ id, body }) => ({
    id,
    name: body,
    winner: false,
    secondPlace: false,
    thirdPlace: false,
  }));

  const toggleRadio = (
    participant: string,
    betPlace: 'winner' | 'secondPlace' | 'thirdPlace',
  ) => {
    // TODO: handle Participants Table
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
            <TableRow key={row.id}>
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
