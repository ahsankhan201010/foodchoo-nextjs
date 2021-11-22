
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
const Paragraph = (props) => {
  var {
    children: content = "Heading",
    fontSize = 14,
    color = "#000000",
    fontWeight = "regular",
    style = {},
    customClass = ""
  } = props;
  var fontWeightValue = fontWeightComputation(fontWeight);
  var fontSizeValue = fontSize / 10;
  return (
    <p
      className={`paraStyle ${customClass}`}
      style={{
        fontSize: `${fontSizeValue}em`,
        color,
        fontWeight: fontWeightValue,
        ...style,
      }}
    >
      {content}
    </p>
  );
};
export default Paragraph;