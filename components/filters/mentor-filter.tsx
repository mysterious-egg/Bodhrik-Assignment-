import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface MentorFilterProps {
  mentors: string[];
  value: string;
  onChange: (value: string | null) => void;
}
export default function MentorFilter({
  mentors,
  value,
  onChange,
}: MentorFilterProps) {
  return (
<Select
  value={value}
  onValueChange={onChange}
>
      <SelectTrigger>
        <SelectValue placeholder="All Mentors" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="all">All Mentors</SelectItem>

        {mentors.map((mentor) => (
          <SelectItem key={mentor} value={mentor}>
            {mentor}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}