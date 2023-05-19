import { useState } from "react";
import Component from "./Component";

const Nameprops = () => {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [isValidColor, setIsValidColor] = useState(true);

  const handleColorChange = (event) => {
    const color = event.target.value;
    setBackgroundColor(color);

    if (color.trim() === "") {
      setIsValidColor(true); // Empty input, no error
    } else {
      setIsValidColor(isValidHexColor(color));
    }
  };

  const isValidHexColor = (color) => {
    const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    return hexColorRegex.test(color);
  };

  return (
    <div>
      <input type="text" value={backgroundColor} onChange={handleColorChange} />
      {!isValidColor && (
        <p>
          {backgroundColor.trim() !== "" && "The input is not a valid color."}
        </p>
      )}
      <Component name="Johan" backgroundColor={backgroundColor} />
      <Component name="Gösta" backgroundColor={backgroundColor} />
    </div>
  );
};

export default Nameprops;
