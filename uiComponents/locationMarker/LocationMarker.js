const LocationMarker = (props) => {
  const { top, left, right, bottom, customClass, image } = props;
  return (
    <img
      className={`${customClass} location-mark`}
      style={{ top: top, left: left, right: right, bottom: bottom }}
      src={image?.src}
      alt=""
    />
  );
};

export default LocationMarker;
