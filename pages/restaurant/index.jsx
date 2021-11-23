import restaurantFC from "./../../assets/images/icons/restaurantFC.png";
import DownloadActions from "../../uiComponents/downloadBtns/DownloadActions";
import DetailedDescription from "../../uiComponents/DetailedDescription/DetailedDescription";

const Restaurant = () => {
    const content = [
        "FoodChoo created the world’s first On Demand! Now! Food Delivery Platform with the goal to help small restaurants deliver more food to more people in the shortest amount of time possible. The FoodChoo universe cannot exist without small restaurants ",
        "We are taking the challenge of introducing the world to our concept head on with our pioneer program. You are here because you are a small restaurant owner who wants to turbo charge their delivery operation and ultimately unleash the potential that the FoodChoo On Demand! Now Food Delivery Platform has to offer.",
        "By joining the pioneer program you get all the benefits of being the first business in your area to sign up and use the Platform without any of the headaches of marketing and promoting, as we handle everything.",
        "The first step to joining the FoodChoo Pioneer Program is to submit your email here. We will send you and introductory email that explains in detail everything about the pioneer program and FoodChoo in general and allows a simple, short, and easy to follow sign up process.",
    ];
    return (
        <div className="i-am-pioneer-program layout">
            <div className="container">
                    <DetailedDescription description={content} heading={"RESTAURANT"} bannerImage={restaurantFC}/>
                <DownloadActions />
            </div>
        </div>
    );
};

export default Restaurant;
