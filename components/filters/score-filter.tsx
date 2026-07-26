import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type ScoreFilterValue =
  | "all"
  | "85+"
  | "70-84"
  | "below70";

interface ScoreFilterProps {
  value: ScoreFilterValue;
  onChange: (value: ScoreFilterValue) => void;
}

export default function ScoreFilter({
  value,
  onChange,
}: ScoreFilterProps) {
  return (
    <Select
      value={value}
      onValueChange={(value) =>
        onChange(value as ScoreFilterValue)
      }
    >
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="all">All Scores</SelectItem>

        <SelectItem value="85+">
          85+
        </SelectItem>

        <SelectItem value="70-84">
          70–84
        </SelectItem>

        <SelectItem value="below70">
          Below 70
        </SelectItem>
      </SelectContent>
    </Select>
  );
}