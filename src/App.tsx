import { useEffect, useState } from "react";
import handleKeyDown from "./handleKeydown";
import getLabel from "./getLabel";
import { level1 } from "./levels";
import getColor from "./getColor";
export const rowLength = 8;
export const totalLength = 64;
const zerosArray = level1;
const startingIndex = zerosArray.findIndex((spot) => spot === "b");
const endingIndex = zerosArray.findIndex((spot) => spot === "e");
const previousLocations: {
  [key: number]: boolean;
} = {};
function App() {
  const [location, setLocation] = useState(startingIndex);
  const [running, setRunning] = useState(false);
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      if (!running) {
        setRunning(true);
      }
      return handleKeyDown(event, setLocation);
    });

    return () => {
      window.removeEventListener("keydown", (event) =>
        handleKeyDown(event, setLocation)
      );
    };
  }, []);

  useEffect(() => {
    if (location === endingIndex) {
      setRunning(false);
      alert(`You won in ${timer}ms`);
    } else if (zerosArray[location] === 1) {
      setRunning(false);
      alert(`You hit a wall`);
    }
    previousLocations[location] = true;
  }, [location]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (running) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="bg-black h-screen text-white flex flex-row items-center justify-center">
      <div className="absolute top-4 left-4 text-2xl">{timer}s</div>
      <div className="grid grid-cols-8 gap-4">
        {zerosArray.map((spot, index) => {
          const label = getLabel({ index, location, previousLocations, spot });
          const color = getColor(label);
          return (
            <p key={index} className={`text-4xl px-2 ${color}`}>
              {label}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default App;
