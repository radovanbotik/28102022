import Event from "./Event";
import TravelData from "../../public/data";

export default function Log() {
  const events = TravelData.map((entry, index) => {
    return <Event key={index} {...entry} />;
  });
  return <div className="log">{events}</div>;
}
