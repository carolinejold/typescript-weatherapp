import React, { useState } from "react";
import Select from "react-select";
import Button from "../../node_modules/@material-ui/core/Button";
import Container from "../../node_modules/@material-ui/core/Container";

interface SearchBarProps {
  setUserInputData: Function;
}

export const SearchBar: React.FC<SearchBarProps> = ({ setUserInputData }) => {
  const [selectedLocation, setSelectedLocation] = useState<any>("");

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (selectedLocation !== undefined) {
      setUserInputData([selectedLocation.label]);
    }
  };

  return (
    <div>
      <Container
        maxWidth="sm"
        style={{
          borderTop: "solid 1px rgba(200, 200, 200, 0.8)",
          borderLeft: "solid 1px rgba(200, 200, 200, 0.8)",
          borderRight: "solid 1px rgba(200, 200, 200, 0.8)",
          borderRadius: "32px",
          padding: "2em",
          boxShadow: "0px 2px 5px 0px rgba(235, 235, 235, 0.5)",
          backgroundColor: "rgba(250, 250, 250, 1)",
        }}
      >
        <h1 style={{ marginBottom: '0.5em'}}>Weather</h1>
        <form onSubmit={onSubmit}>
          <div className="dropdown-bar" style={{ marginBottom: "0.5em" }}>
            <Select
              isSearchable
              autoFocus
              defaultValue={selectedLocation}
              onChange={setSelectedLocation}
              options={locations}
            />
          </div>
          <Button
            variant="outlined"
            color="default"
            className="dropdown-submit"
            type="submit"
            value="Search"
          >
            Search
          </Button>
        </form>
        <p
          style={{
            visibility: selectedLocation.length === 0 ? "visible" : "hidden",
            marginTop: "0.4em",
            marginBottom: "0em",
          }}
        >
          Please select a location!
        </p>
      </Container>
    </div>
  );
};

// DATA

const locations = [
  { value: "amsterdam", label: "Amsterdam" },
  { value: "athens", label: "Athens" },
  { value: "baku", label: "Baku" },
  { value: "belgrade", label: "Belgrade" },
  { value: "berlin", label: "Berlin" },
  { value: "bern", label: "Bern" },
  { value: "bratislava", label: "Bratislava" },
  { value: "brussels", label: "Brussels" },
  { value: "bucharest", label: "Bucharest" },
  { value: "budapest", label: "Budapest" },
  { value: "chisnau", label: "Chisnau" },
  { value: "copenhagen", label: "Copenhagen" },
  { value: "dublin", label: "Dublin" },
  { value: "edinburgh", label: "Edinburgh" },
  { value: "helsinki", label: "Helsinki" },
  { value: "kiev", label: "Kiev" },
  { value: "lisbon", label: "Lisbon" },
  { value: "ljubljana", label: "Ljubljana" },
  { value: "london", label: "London" },
  { value: "madrid", label: "Madrid" },
  { value: "minsk", label: "Minsk" },
  { value: "monaco", label: "Monaco" },
  { value: "oslo", label: "Oslo" },
  { value: "paris", label: "Paris" },
  { value: "podgorica", label: "Podgorica" },
  { value: "prague", label: "Prague" },
  { value: "pristina", label: "Pristina" },
  { value: "reykjavik", label: "Reykjavik" },
  { value: "riga", label: "Riga" },
  { value: "rome", label: "Rome" },
  { value: "sarajevo", label: "Sarajevo" },
  { value: "skopje", label: "Skopje" },
  { value: "sophia", label: "Sophia" },
  { value: "stockholm", label: "Stockholm" },
  { value: "tallinn", label: "Tallinn" },
  { value: "tbilisi", label: "Tbilisi" },
  { value: "tirana", label: "Tirana" },
  { value: "vaduz", label: "Vaduz" },
  { value: "valletta", label: "Valletta" },
  { value: "vienna", label: "Vienna" },
  { value: "vilnius", label: "Vilnius" },
  { value: "warsaw", label: "Warsaw" },
  { value: "zagreb", label: "Zagreb" },
];
