interface labelProps {
  index: number;
  location: number;
  previousLocations: {
    [key: number]: boolean;
  };
  spot: number | string;
}

export default function getLabel({
  index,
  location,
  previousLocations,
  spot,
}: labelProps) {
  if (index === location) {
    return "F";
  } else if (previousLocations[index]) {
    return ".";
  } else if (spot === 1) {
    return "x";
  } else if (spot === "b") {
    return "B";
  } else if (spot === "e") {
    return "E";
  }

  return "0";
}
