import React from "react";

var fontWeightComputation = (weight) => {
  var value = 300;
  switch (weight) {
    case "light":
      value = 300;
      break;
    case "regular":
      value = 400;
      break;
    case "medium":
      value = 500;
      break;
    case "semi-bold":
      value = 600;
      break;
    case "bold":
      value = 700;
      break;
    default:
      break;
  }
  return value;
};

const Header = (props) => {
  var {
    children: content = "Heading",
    fontSize = 32,
    color = "var(--heading-color)",
    fontWeight = "regular",
    style = {},
    customClass = "",
    ...restProps
  } = props;
  var fontWeightValue = fontWeightComputation(fontWeight);
  var fontSizeValue = fontSize / 10;
  return (
    <div>
      <div
        className={`headingStyle ${customClass}`}
        style={{
          fontSize: `${fontSizeValue}em`,
          color,
          fontWeight: fontWeightValue,
          ...style,
        }}
        {...restProps}>
        {content}
      </div>
    </div>
  );
};

export default Header;
