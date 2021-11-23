import Paragraph from "./../../uiComponents/paragraph/Paragraph";
import restaurantFC from "./../../assets/images/icons/restaurantFC.png";
import appStoreIcon from "../../assets/images/icons/app-store.png";
import playStore from "../../assets/images/icons/playstore.png";
import DownloadActions from "../../uiComponents/downloadBtns/DownloadActions";

const PioneerProgram = () => {
    return (
        <div className="i-am-pioneer-program layout">
            <div className="container">
                <div className="row res-btn-gap-y">
                    <div className="col-lg-6">
                        <h1 className="theme-title theme-title-red theme-title-max">RESTAURANT</h1>
                        <Paragraph>
                            FoodChoo created the world’s first On Demand! Now! Food Delivery Platform with the goal to help small
                            restaurants deliver more food to more people in the shortest amount of time possible. The FoodChoo universe
                            cannot exist without small restaurants <br /> We are taking the challenge of introducing the world to our
                            concept head on with our pioneer program. You are here because you are a small restaurant owner who wants to
                            turbo charge their delivery operation and ultimately unleash the potential that the FoodChoo On Demand! Now Food
                            Delivery Platform has to offer. <br /> By joining the pioneer program you get all the benefits of being the
                            first business in your area to sign up and use the Platform without any of the headaches of marketing and
                            promoting, as we handle everything. <br />
                            The first step to joining the FoodChoo Pioneer Program is to submit your email here. We will send you and
                            introductory email that explains in detail everything about the pioneer program and FoodChoo in general and
                            allows a simple, short, and easy to follow sign up process.
                        </Paragraph>
                    </div>
                    <div className="col-lg-6 FC-image-wrapper">
                        <img src={restaurantFC.src} alt="Restaurant Food Choo" />
                    </div>
                </div>
                <div className="row download-btn-gap-y">
                    <DownloadActions />
                </div>
            </div>
        </div>
    );
};

export default PioneerProgram;
