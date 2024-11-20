export default function getColor(label: string | number) {
  if (label === "0") {
    return "text-green-500";
  } else if (label === "F") {
    return "text-red-500";
  }
}
