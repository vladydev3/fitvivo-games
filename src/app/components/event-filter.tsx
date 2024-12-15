import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface EventFilterProps {
  events: string[];
  selectedEvent: string;
  onSelectEvent: (event: string) => void;
}

export default function EventFilter({
  events,
  selectedEvent,
  onSelectEvent,
}: EventFilterProps) {
  return (
    <div className="mb-6">
      <Select value={selectedEvent} onValueChange={onSelectEvent}>
        <SelectTrigger className="w-[120px] bg-gray-700 text-gray-100 border-gray-600">
          <SelectValue placeholder="Seleccionar evento" />
        </SelectTrigger>
        <SelectContent className="bg-gray-700 text-gray-100 border-gray-600">
          {events.map((event) => (
            <SelectItem key={event} value={event} className="hover:bg-gray-600">
              {event}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
