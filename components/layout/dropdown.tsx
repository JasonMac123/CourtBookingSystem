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
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button>{name}</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-40">
      <DropdownMenuLabel>{description}</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuRadioGroup value={value} onValueChange={setValue}>
        {options.map((option) => (
          <DropdownMenuRadioItem value={option}>{option}</DropdownMenuRadioItem>
        ))}
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>;
};
