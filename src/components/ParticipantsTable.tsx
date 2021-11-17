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

interface IBets {
  winner: string;
  secondPlace: string;
  thirdPlace: string;
}

interface IParticipantsTableProps {
  bets: IBets;
  setBets: (value: IBets | ((bets: IBets) => IBets)) => void;
}

export const ParticipantsTable = ({
  bets,
  setBets,
}: IParticipantsTableProps) => {
  const participantIds = useSelector(selectRaceDataParticipants);
  const participants = useSelector(selectParticipantsWithIds(participantIds));

  const rows = participants.map(({ id, body }) => ({
    id,
    name: body,
  }));

  const toggleRadio = (
    participant: string,
    betPlace: 'winner' | 'secondPlace' | 'thirdPlace',
  ) => {
    const entryForParticipant = Object.entries(bets).find(bet => bet[1] === participant);
    const betForParticipant = entryForParticipant ? entryForParticipant[0] : undefined;
    setBets((prevBets) =>
      betForParticipant
        ? { ...prevBets, [betForParticipant]: '', [betPlace]: participant }
        : { ...prevBets, [betPlace]: participant },
    );
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
                  checked={bets.winner === row.name}
                />
              </TableCell>
              <TableCell>
                <Radio
                  onChange={() => toggleRadio(row.name, 'secondPlace')}
                  checked={bets.secondPlace === row.name}
                />
              </TableCell>
              <TableCell>
                <Radio
                  onChange={() => toggleRadio(row.name, 'thirdPlace')}
                  checked={bets.thirdPlace === row.name}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
