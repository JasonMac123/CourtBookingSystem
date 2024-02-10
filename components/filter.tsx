import { useState } from "react";

import { DropDown } from "./layout/dropDown";

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
  const [location, setLocation] = useState("");
  const [sport, setSport] = useState("");

  return (
    <div className="flex flex-row items-center justify-center w-full space-x-4">
      <DropDown
        name="location"
        description="filter for a location in this area"
        value={location}
        setValue={setLocation}
        options={courtLocations}
      />
      <DropDown
        name="sports"
        description="filter for a court that supports this sport"
        value={sport}
        setValue={setSport}
        options={sportList}
      />
    </div>
  );
};
