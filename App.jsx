import css from "./App.module.css";
import Display from "./Components/Display";
import Container from "./Components/Container";
import { useState } from "react";
const App = () => {
  const [calValue, setCalValue] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalValue("");
    } else if (buttonText === "=") {
      const result = eval(calValue);
      setCalValue(result);
    } else {
      const newDisplayValue = calValue + buttonText;
      setCalValue(newDisplayValue);
    }
  };
  return (
    <div className={css.calculator}>
      <Display displayValue={calValue}></Display>
      <Container onButtonClicked={onButtonClick}></Container>
    </div>
  );
};

export default App;
