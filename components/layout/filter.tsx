"use client";

import { DropDown } from "./dropDown";
import { Button } from "../ui/button";
import { useFilters } from "@/hooks/useFilters";

export const courtLocations = [
  "Missisuaga",
  "North York",
  "Markham",
  "Richmond Hill",
  "Scarborough",
];

export const sportList = [
  "Volleyball",
  "Badminton",
  "Basketball",
  "Tennis",
  "Pickleball",
  "Soccer",
];

export const Filter = () => {
  const { sport, location, setLocation, setSport, clearFilters } = useFilters();

  return (
    <div className="flex flex-row items-center justify-center w-full space-x-4">
      <DropDown
        name="Location"
        description="Filter for a location in this area"
        value={location}
        setValue={setLocation}
        options={courtLocations}
      />
      <DropDown
        name="Sports"
        description="Filter for a court that supports this sport"
        value={sport}
        setValue={setSport}
        options={sportList}
      />
      <Button
        onClick={() => clearFilters()}
        className="hover:bg-slate-700 hover:bg-opacity-70 hover:cusor-pointer transition-all"
      >
        Clear
      </Button>
    </div>
  );
};
