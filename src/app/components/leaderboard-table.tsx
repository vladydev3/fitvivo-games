import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Athlete {
  id: number;
  name: string;
  totalScore: number;
  eventScores: {
    [key: string]: number;
  };
}

interface LeaderboardTableProps {
  athletes: Athlete[];
  selectedEvent: string;
}

export default function LeaderboardTable({
  athletes,
  selectedEvent,
}: LeaderboardTableProps) {
  const sortedAthletes = [...athletes].sort((a, b) => {
    const scoreA = selectedEvent === "General" ? a.totalScore : a.eventScores[selectedEvent] || 0;
    const scoreB = selectedEvent === "General" ? b.totalScore : b.eventScores[selectedEvent] || 0;
    return scoreA - scoreB;
  });

  return (
    <Table className="bg-gray-800 text-gray-100">
      <TableHeader className="bg-gray-700">
        <TableRow>
          <TableHead className="w-12">Posición</TableHead>
          <TableHead>Atleta</TableHead>
          <TableHead className="text-right">Puntuación</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedAthletes.map((athlete, index) => (
          <TableRow key={athlete.id}>
            <TableCell className="font-medium text-blue-300">
              {index + 1}
            </TableCell>
            <TableCell className="border-b border-gray-700">
              {athlete.name}
            </TableCell>
            <TableCell className="text-right border-b border-gray-700">
              {selectedEvent === "General" ? athlete.totalScore : athlete.eventScores[selectedEvent] || 0}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}