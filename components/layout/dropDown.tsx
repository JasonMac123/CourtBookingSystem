import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface DropDownProps {
  name: string;
  description: string;
  options: string[];
  value: string;
  setValue: (value: string) => void;
}

export const DropDown = ({
  name,
  description,
  options,
  value,
  setValue,
}: DropDownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>{name}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60 bg-slate-700">
        <DropdownMenuLabel className="text-white">
          {description}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={value} onValueChange={setValue}>
          {options.map((option) => (
            <DropdownMenuRadioItem
              value={option}
              key={option}
              className="text-white hover:cursor-pointer hover:bg-slate-500 transition-all"
            >
              {option}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
