import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps {
  className?: string;
  onChangeHandler?: (date: Date | undefined) => void;
  disabled?: boolean;
}

export function DatePicker({ className, onChangeHandler, disabled }: DatePickerProps) {
  const [date, setDate] = React.useState<Date>();

  const handleDateChange = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    if (onChangeHandler) {
      onChangeHandler(selectedDate);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal mb-6 text-white bg-black border-2 border-white rounded-md p-1 border-solid border-zinc-500/25",
            !date && "text-muted-foreground",
            className
          )}
          disabled={disabled}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateChange}
          initialFocus
          disabled={disabled}
        />
      </PopoverContent>
    </Popover>
  );
}