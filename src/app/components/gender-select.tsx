import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface GenderSelectorProps {
  genders: string[];
  selectedGender: string;
  onSelectGender: (gender: string) => void;
}

export default function GenderSelector({
  genders,
  selectedGender,
  onSelectGender,
}: GenderSelectorProps) {
  return (
    <div>
      <Select value={selectedGender} onValueChange={onSelectGender}>
        <SelectTrigger className="w-[120px] bg-gray-700 text-gray-100 border-gray-600">
          <SelectValue placeholder="Seleccionar género" />
        </SelectTrigger>
        <SelectContent className="bg-gray-700 text-gray-100 border-gray-600">
          {genders.map((gender) => (
            <SelectItem
              key={gender}
              value={gender}
              className="hover:bg-gray-600"
            >
              {gender}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
