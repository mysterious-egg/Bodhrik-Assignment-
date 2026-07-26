"use client";

import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DateFilterProps {
  value: Date | undefined;
  onChange: (date: Date | undefined) => void;
}

export default function DateFilter({
  value,
  onChange,
}: DateFilterProps) {
  return (
    <Popover>
<PopoverTrigger
  className={cn(
    buttonVariants({ variant: "outline" }),
    "w-full justify-start text-left font-normal"
  )}
>
  <CalendarIcon className="mr-2 h-4 w-4" />
  {value ? format(value, "PPP") : "Pick a date"}
</PopoverTrigger>

      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={value}
          onSelect={onChange}
        />
      </PopoverContent>
    </Popover>
  );
}