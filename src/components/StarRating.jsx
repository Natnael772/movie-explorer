import React, { useState } from "react";
import Star from "./Star";

//set default value not to encounter error due to unpassed prop
function StarRating() {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  return (
    <div style={contaierStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star />
        ))}
      </div>
      <p style={textStyle}>{rating}</p>
    </div>
  );
}
export default StarRating;
