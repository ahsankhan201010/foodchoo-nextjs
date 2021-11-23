import appStoreIcon from "../../assets/images/icons/app-store.png";
import playStore from "../../assets/images/icons/playstore.png";
import Fade from "react-reveal/Fade";

const DownloadActions = () => {
  return (
    <>
      <Fade duration={2000} delay={1000} bottom>
        <div className="row download-btn-gap-y">
          <div className="mb-3 col-lg-12 d-flex justify-content-center">
            <h1 className="theme-title theme-title-red theme-title-max">
              DOWNLOAD THE APP NOW
            </h1>
          </div>
          <div className=" download-icons col-lg-12 d-flex justify-content-center">
            <img src={appStoreIcon.src} alt="" />
            <img src={playStore.src} alt="" />
          </div>
        </div>
      </Fade>
    </>
  );
};

export default DownloadActions;
