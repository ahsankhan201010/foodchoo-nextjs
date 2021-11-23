import Paragraph from "./../../uiComponents/paragraph/Paragraph";
import Fade from "react-reveal/Fade";

const DetailedDescription = ({ description, heading, bannerImage }) => {
  return (
    <>
      <div className="row res-btn-gap-y">
        <div className="col-lg-6">
          <Fade top cascade>
            <h1 className="theme-title theme-title-red theme-title-max">
              {heading}
            </h1>
          </Fade>
          <Fade left duration={2000}>
            {description.map((d) => (
              <Paragraph>{d}</Paragraph>
            ))}
          </Fade>
        </div>
        <Fade right duration={2000} delay={1000}>
          <div className="col-lg-6 FC-image-wrapper">
            <img
              className="w-100"
              src={bannerImage.src}
              alt={`${heading} photo`}
            />
          </div>
        </Fade>
      </div>
    </>
  );
};

export default DetailedDescription;
