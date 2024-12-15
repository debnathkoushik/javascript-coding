import StarRating from "./StarRating";
import { useState } from "react";

export default function App() {
  const [filledStars, setFilledStars] = useState(0);

  return (
    <div>
      <StarRating
        totalNoOfStars={5}
        value={filledStars}
        onChange={setFilledStars}
      />
    </div>
  );
}
