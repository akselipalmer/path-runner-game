import { rowLength, totalLength } from "./App";

export default function handleKeyDown(
  event: KeyboardEvent,
  setLocation: React.Dispatch<React.SetStateAction<number>>
) {
  if (event.key === "ArrowRight") {
    setLocation((prevLocation) => (prevLocation + 1) % totalLength);
  } else if (event.key === "ArrowLeft") {
    setLocation(
      (prevLocation) => (prevLocation - 1 + totalLength) % totalLength
    );
  } else if (event.key === "ArrowUp") {
    setLocation(
      (prevLocation) => (prevLocation - rowLength + totalLength) % totalLength
    );
  } else if (event.key === "ArrowDown") {
    setLocation(
      (prevLocation) => (prevLocation + rowLength + totalLength) % totalLength
    );
  }
}
