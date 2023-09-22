export function isInvalidInput(keyInput) {
    return (
      (!isNumber(keyInput) && keyInput !== "Backspace") || keyInput === " "
    );
  }
  export function isNumber(input) {
    return !isNaN(Number(input));
  }
  export function addSpaces(arg) {
    let spaced = [...arg]
      .map((e, i) => (i % 4 === 0 && i !== 0 ? " " + e : e))
      .join("");
    return spaced;
  }