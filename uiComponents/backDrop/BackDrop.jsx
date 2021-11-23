import rightDropImg from "../../assets/images/sample/left-drop.png";
import leftDropImg from "../../assets/images/sample/right-drop.png";
const BackDrop = (props) => {
  const { leftDrop, rightDrop, top, bottom, left, right } = props;
  return (
    <>
      {(leftDrop && (
        <img
          style={{ top: top, left: left }}
          className="backdrop-left"
          src={leftDropImg.src}
          alt=""
        />
      )) ||
        (rightDrop && (
          <img
            style={{ bottom: bottom, right: right }}
            className="backdrop-right"
            src={rightDropImg.src}
            alt=""
          />
        ))}
    </>
  );
};

export default BackDrop;
