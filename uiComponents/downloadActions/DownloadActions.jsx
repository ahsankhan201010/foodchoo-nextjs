import appStoreIcon from "../../assets/images/icons/app-store.png";
import playStore from "../../assets/images/icons/playstore.png";
const DownloadActions = () => {
    return (
        <>
            <div className="mb-3 mt-7 col-lg-12 d-flex justify-content-center download-our-app">
                <h1 className="theme-title theme-title-red theme-title-max">DOWNLOAD THE APP NOW</h1>
            </div>
            <div className=" mb-5 download-icons col-lg-12 d-flex justify-content-center">
                <img src={appStoreIcon.src} alt="" />
                <img src={playStore.src} alt="" />
            </div>
        </>
    );
};

export default DownloadActions;
