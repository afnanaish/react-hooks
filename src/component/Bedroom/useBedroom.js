import { useDebouncedCallback } from "use-debounce";
import randomColor from "randomcolor";
import { useState } from "react";

const useBedroom = () => {
  const [num, setNum] = useState(0);
  const [text, setText] = useState("");
  const [state, setState] = useState(true);
  const [bgcolor, setBGColor] = useState("");
  const [color, setColor] = useState("");
  const debounced = useDebouncedCallback((value) => {
    setBGColor(value);
  }, 1000);

  function onClickSetNum() {
    setNum(num + 1);
  }

  function onClickSetText() {
    setText("Hello");
  }

  function onClickSetState() {
    setState((prev) => !prev);
  }

  function onChangeSetBgColor(e) {
    debounced(e);
  }

  function onChangeSetRandomBgColor() {
    setBGColor(randomColor());
  }

  function onClickSetColor() {
    setColor(randomColor());
  }

  return {
    num,
    text,
    state,
    bgcolor,
    color,
    onClickSetNum,
    onClickSetText,
    onClickSetState,
    onClickSetColor,
    onChangeSetBgColor,
    onChangeSetRandomBgColor,
  };
};
export { useBedroom };
