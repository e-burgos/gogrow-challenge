import { FunctionComponent, useEffect, useState } from "react";
import { ILogin, LANGUAGES } from "../../utils/languages";
import { StyledSelect } from "./Dropdown.styles";

interface Props {
  setLanguage: (value: ILogin) => void;
}

const Dropdown: FunctionComponent<Props> = ({ setLanguage }) => {
  const [currentOption, setCurrentOption] = useState<string>("english");

  useEffect(() => {
    if (setLanguage) {
      if (currentOption === "english") setLanguage(LANGUAGES.english);
      if (currentOption === "spanish") setLanguage(LANGUAGES.spanish);
    }
  }, [currentOption, setLanguage]);

  return (
    <StyledSelect
      defaultValue={"english"}
      data-testid="Dropdown"
      onChange={(e) => setCurrentOption(e.target.value)}
    >
      <option value="english">{"English (UK)"}</option>
      <option value="spanish">{"Español"}</option>
    </StyledSelect>
  );
};

export default Dropdown;
