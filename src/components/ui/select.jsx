import { useState } from "react";
import Select from "react-select";

const options = [
  { value: "action", label: "Action" },
  { value: "comedy", label: "Comedy" },
  { value: "drama", label: "Drama" },
  { value: "horror", label: "Horror" },
];

export default function GenreSelect() {
  const [genre, setGenre] = useState(null);

  return (
    <Select
      value={genre}
      onChange={setGenre}
      options={options}
      placeholder="Select Genre"
      styles={{
        control: (provided) => ({
          ...provided,
          backgroundColor: "#1a1a1a",
          borderColor: "#4b5563",
          color: "white",
        }),
        singleValue: (provided) => ({ ...provided, color: "white" }),
        menu: (provided) => ({ ...provided, backgroundColor: "#1a1a1a" }),
        option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isFocused ? "#333" : "#1a1a1a",
          color: "white",
        }),
      }}
    />
  );
}
