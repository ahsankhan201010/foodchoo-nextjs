import Paragraph from "../../uiComponents/paragraph/Paragraph";
import foodImg from "../../assets/images/sample/food.png";
import appStoreIcon from "../../assets/images/icons/app-store.png";
import playStore from "../../assets/images/icons/playstore.png";
import appImage from "../../assets/images/sample/app-mobile.png";
import bgObject from "../../assets/images/sample/Rectangle-about-bg.png";
import burgerImg from "../../assets/images/sample/cheeseburger-with-french-fries.png";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div className="i-am-about layout layout-gap">
      <div className="container about">
        <div className="row row-gap-b">
          <div className="grid-gap col-lg-6 grid-align direction-column">
            <div>
              <Fade cascade duration={1000} delay={200} top>
                <h1 className="theme-title theme-title-max theme-title-red">
                  Years Ago
                </h1>
              </Fade>
              <Fade duration={1000} delay={500}>
                <Paragraph>
                  the founders of FoodChoo realized that restaurant food
                  delivery had several problems which prevented food delivery
                  from reaching its true potential. FoodChoo was developed to
                  help small restaurants sell more meals, to give customers more
                  options and minimal wait times for delivery and to empower the
                  delivery position as a key component of the modern small
                  restaurant business model.
                </Paragraph>
                <Paragraph>
                  FoodChoo is about making really fast connections.
                </Paragraph>
              </Fade>
            </div>
            <div>
              <Fade bottom delay={1000}>
                <img className="mx-2" src={appStoreIcon.src} alt="" />
                <img className="mx-2" src={playStore.src} alt="" />
              </Fade>
            </div>
          </div>
          <div className="grid-gap col-lg-6 food-image-wrapper">
            <Fade right>
              <img src={foodImg.src} alt="" />
            </Fade>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="grid-gap col-lg-6 center-x">
            <Fade left>
              <img src={appImage.src} alt="" />
            </Fade>
          </div>
          <div className="grid-gap col-lg-6 direction-column min-height">
            <div>
              <Fade top>
                <h1 className="theme-title theme-title-max theme-title-red">
                  The FoodChoo, <br /> OnDemand! Now
                </h1>
              </Fade>
              <Fade bottom>
                <Paragraph>
                  Food Delivery Platform connects people who want food, with
                  people who make food. This connection is convenient,
                  efficient, cost effective and fast.
                </Paragraph>
              </Fade>
              <Fade bottom>
                <Paragraph>
                  FoodChoo is unique and different in that the
                  customer/restaurant relationship starts after the food has
                  been made and is out for delivery.
                </Paragraph>
              </Fade>
              <Fade bottom>
                <Paragraph>
                  platform gives people the ability to have immediate access to
                  a variety of cuisine types from established food producers.
                  With FoodChoo, everyone gets the freshest food experience in
                  the shortest amount of time possible.
                </Paragraph>
              </Fade>
            </div>
            <Fade bottom>
              <div>
                <img className="mx-2" src={appStoreIcon.src} alt="" />
                <img className="mx-2" src={playStore.src} alt="" />
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className="burgur-object-wrapper">
        <div className="bg-object">
          <img className="bg-thumb" src={bgObject.src} alt="" />
          <div className="container">
            <div className="row wrap-rev">
              <div className="grid-gap col-lg-7 col-md-7 burger-thumb ">
                <img className="" src={burgerImg.src} alt="" />
              </div>
              <div className="grid-gap col-lg-5 col-md-5 row-align column-center">
                <Fade top>
                  <h1 className="theme-title text-center theme-title-max theme-title-white">
                    DOWNLOAD THE <br /> APP NOW
                  </h1>
                </Fade>
                <Fade bottom>
                  <div>
                    <img className="mx-2" src={appStoreIcon.src} alt="" />
                    <img className="mx-2" src={playStore.src} alt="" />
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
