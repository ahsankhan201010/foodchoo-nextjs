import Paragraph from "../../uiComponents/paragraph/Paragraph";
import foodImg from "../../assets/images/sample/food.png";
import appStoreIcon from "../../assets/images/icons/app-store.png";
import playStore from "../../assets/images/icons/playstore.png";
const About = () => {
  return (
    <div className="i-am-about layout">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
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
              business model. <br /> <br /> FoodChoo is about making really fast
              connections.
            </Paragraph>
            <div>
              <img src={appStoreIcon.src} alt="" />
              <img src={playStore.src} alt="" />
            </div>
          </div>
          <div className="col-lg-6 food-image-wrapper">
            <img src={foodImg.src} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
