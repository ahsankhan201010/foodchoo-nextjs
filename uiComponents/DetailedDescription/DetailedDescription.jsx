import Paragraph from "./../../uiComponents/paragraph/Paragraph";

const DetailedDescription = ({ description, heading, bannerImage }) => {
    return (
        <>
            <div className="row res-btn-gap-y">
            <div className="col-lg-6">
                <h1 className="theme-title theme-title-red theme-title-max">{heading}</h1>
                {description.map((d) => (
                    <Paragraph>{d}</Paragraph>
                ))}
            </div>
            <div className="col-lg-6 FC-image-wrapper">
                <img src={bannerImage.src} alt={`${heading} photo`} />
            </div>
                </div>
        </>
    );
};

export default DetailedDescription;
