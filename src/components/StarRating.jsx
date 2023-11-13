import React, { useState } from "react";
import Star from "./Star";

//set default value not to encounter error due to unpassed prop
function StarRating() {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
    onSetRating(rating);
  }

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size}px`,
  };

  const starContainerStyle = {
    display: "flex",
    //   gap: "4px",
  };

  return (
    <div style={contaierStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star />
        ))}
      </div>
      <p style={textStyle}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p>
    </div>
  );
}
export default StarRating;
