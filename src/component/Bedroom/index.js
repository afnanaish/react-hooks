import { useBedroom } from "./useBedroom";

const Bedroom = () => {
  const {
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
  } = useBedroom();

  return (
    <div className="App" style={{ backgroundColor: bgcolor, color: color }}>
      <button
        onClick={() => {
          onClickSetNum();
        }}
      >
        Increment Number
      </button>
      <div>{num}</div>

      <button
        onClick={() => {
          onClickSetText();
        }}
      >
        Change Text To Hello
      </button>
      <div>{text}</div>

      <button
        onClick={() => {
          onClickSetState();
        }}
      >
        Change State
      </button>

      <div>{state ? "True" : "False"}</div>

      <input
        type="text"
        onChange={(e) => {
          onChangeSetBgColor(e.target.value);
        }}
        placeholder="Write a Color"
      />
      <hr />
      <button
        onClick={() => {
          onChangeSetRandomBgColor();
        }}
      >
        Change BG Color Random
      </button>
      <button
        onClick={() => {
          onClickSetColor();
        }}
      >
        Change Color Random
      </button>
    </div>
  );
};
export { Bedroom };
