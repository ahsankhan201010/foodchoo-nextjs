import Paragraph from "../../uiComponents/paragraph/Paragraph";
import foodImg from "../../assets/images/sample/food.png";
import appStoreIcon from "../../assets/images/icons/app-store.png";
import playStore from "../../assets/images/icons/playstore.png";
import appImage from "../../assets/images/sample/app-mobile.png";
const About = () => {
  return (
    <div className="i-am-about layout layout-gap">
      <div className="container">
        <div className="row row-gap-b">
          <div className="col-lg-6 direction-column">
            <div>
              <h1 className="theme-title theme-title-max theme-title-black">
                Years Ago
              </h1>
              <Paragraph>
                the founders of FoodChoo realized that restaurant food delivery
                had several problems which prevented food delivery from reaching
                its true potential. FoodChoo was developed to help small
                restaurants sell more meals, to give customers more options and
                minimal wait times for delivery and to empower the delivery
                position as a key component of the modern small restaurant
                business model. <br /> <br /> FoodChoo is about making really
                fast connections.
              </Paragraph>
            </div>
            <div>
              <img src={appStoreIcon.src} alt="" />
              <img src={playStore.src} alt="" />
            </div>
          </div>
          <div className="col-lg-6 food-image-wrapper">
            <img src={foodImg.src} alt="" />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 center-x">
            <img src={appImage.src} alt="" />
          </div>
          <div className="col-lg-6 direction-column min-height">
            <div>
              <h1 className="theme-title theme-title-max theme-title-black">
                Years Ago
              </h1>
              <Paragraph>
                Food Delivery Platform connects people who want food, with
                people who make food. This connection is convenient, efficient,
                cost effective and fast.
              </Paragraph>
              <Paragraph>
                FoodChoo is unique and different in that the customer/restaurant
                relationship starts after the food has been made and is out for
                delivery.
              </Paragraph>
              <Paragraph>
                platform gives people the ability to have immediate access to a
                variety of cuisine types from established food producers. With
                FoodChoo, everyone gets the freshest food experience in the
                shortest amount of time possible.
              </Paragraph>
            </div>
            <div>
              <img src={appStoreIcon.src} alt="" />
              <img src={playStore.src} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src="" alt="" />
            </div>
            <div className="col-lg-6">
              <h1 className="">
                DOWNLOAD THE <br /> APP NOW
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
