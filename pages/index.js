import { useState, useEffect } from "react";
import Button from "../uiComponents/button/Button";
import Fade from "react-reveal/Fade";
import Section01 from "../assets/images/sample/Section-01.png";
import Paragraph from "../uiComponents/paragraph/Paragraph";
import Device_Mokup from "../assets/images/sample/Metal_Device_Mockup.png";
import mokApp from "../assets/images/sample/mok-app.png";
import LocationMarker from "../uiComponents/locationMarker/LocationMarker";
import johnDoeIcon from "../assets/images/icons/location-icon.png";
import FoodMenu from "../uiComponents/foodMenu/FoodMenu";
import DeliveryServices from "../uiComponents/deliveryServices/DeliveryServices";
import heroBg from "../assets/images/sample/hero-section.png";
import mapBg from "../assets/images/sample/map-background.png";
import mokAppBg from "../assets/images/sample/mok-app-bg.png";
import mikeLocationIcon from "../assets/images/icons/mike-location.png";
import abrahamLocationIcon from "../assets/images/icons/abraham-location.png";

const Home = () => {
  const [foodMenuModal, setFoodMenuModal] = useState(false);
  const [cuisines, setCuisines] = useState([]);
  useEffect(() => {
    const fn = async () => {
      try {
        const res = await fetch(
          "https://api.foodchoo.com/api/v1/establishments/cuisines"
        );
        const {
          data: { cuisine },
        } = await res.json();
        setCuisines(cuisine);
      } catch (error) {
        console.log(error);
      }
    };
    fn();
  }, []);
  return (
    <div className="i-am-home layout">
      <div
        style={{ backgroundImage: `url(${mapBg.src})` }}
        className={`h-group ${foodMenuModal && "scal-home-bg"}`}>
        <LocationMarker
          image={mikeLocationIcon}
          top={foodMenuModal ? "650px" : "550px"}
          left={foodMenuModal ? "2%" : "4%"}
        />

        <LocationMarker
          image={johnDoeIcon}
          bottom={foodMenuModal ? "100px" : "30px"}
          left={foodMenuModal ? "1.5%" : "3%"}
        />
        <LocationMarker
          image={abrahamLocationIcon}
          top={foodMenuModal ? "350px" : "450px"}
          right={foodMenuModal ? "15%" : "25%"}
        />
        <LocationMarker
          image={johnDoeIcon}
          bottom={foodMenuModal ? "400px" : "300px"}
          right={foodMenuModal ? "4%" : "8%"}
        />
        <LocationMarker
          image={johnDoeIcon}
          bottom={foodMenuModal ? "10px" : "30px"}
          right={foodMenuModal ? "18%" : "25%"}
        />
        <div
          style={{ backgroundImage: `url(${heroBg.src})` }}
          className="hero-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <Fade duration={2000} delay={200} top>
                  <h1 className="theme-title-white theme-title">
                    A complete food and grocery delivery system
                  </h1>
                </Fade>
                <Fade duration={1500} delay={2000}>
                  <Paragraph color={"#fff"}>
                    Hungry but tired? Need an ingredient but busy with
                    something? Our Food Delivery system is here to help you with
                    last-minute recipe ingredients and food. Simply choose the
                    desired restaurant or grocery store, place the order and let
                    our self-sufficient delivery management system take it from
                    there. Enjoy food and grocery at your doorsteps with minimum
                    delivery charges.
                  </Paragraph>
                </Fade>
                <Fade bottom delay={1500}>
                  <Button className="h-btn">Get Started</Button>
                </Fade>
              </div>
              <div className="col-lg-7 food-van">
                <img src={Section01.src} alt="van" />
              </div>
            </div>
          </div>
        </div>
        <div className="container food-menu-wrapper">
          <Button onClick={() => setFoodMenuModal(true)} className="m-auto" red>
            I AM HUNGRY
          </Button>
        </div>
        <div className="delivery-details container">
          <div className="row">
            <div className="col-lg-6">
              <Fade left>
                <img src={Device_Mokup.src} alt="" />
              </Fade>
            </div>
            <div className="col-lg-6">
              <Fade right>
                <h1 className="theme-title theme-title-red my-3">
                  A complete food and grocery delivery system
                </h1>
                <Paragraph className="h-desc my-3">
                  Hungry but tired? Need an ingredient but busy with something?
                  Our Food Delivery system is here to help you with last-minute
                  recipe ingredients and food. Simply choose the desired
                  restaurant or grocery store, place the order and let our
                  self-sufficient delivery management system take it from there.
                  Enjoy food and grocery at your doorsteps with minimum delivery
                  charges.
                </Paragraph>
                <Button className="h-btn" red>
                  Get Started
                </Button>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div>
        <DeliveryServices />
      </div>
      <div className="container app-mok">
        <Fade duration={2000} top>
          <h1 className="text-center my-5 theme-head-x-lg">
            A complete food and grocery delivery system
          </h1>
        </Fade>

        <Fade top>
          <img className="mok-thumb" src={mokApp.src} alt="" />
        </Fade>
      </div>
      <div
        style={{ backgroundImage: `url(${mokAppBg.src})` }}
        className="container bottom-section my-5">
        <Fade left>
          <div className="items">
            <h1 className="theme-title theme-title-black">
              A complete food and grocery delivery system
            </h1>
            <Paragraph className="h-desc">
              Hungry but tired? Need an ingredient but busy with something? Our
              Food Delivery system is here to help you with last-minute recipe
              ingredients and food. Simply choose the desired restaurant or
              grocery store, place the order and let our self-sufficient
              delivery management system take it from there. Enjoy food and
              grocery at your doorsteps with minimum delivery charges.
            </Paragraph>
            <Button className="h-btn" red>
              Get Started
            </Button>
          </div>
        </Fade>
      </div>
      <div
        className={`food-menu-modal ${
          (foodMenuModal && "open-food-menu") || ""
        }`}>
        <FoodMenu cuisines={cuisines} onHide={() => setFoodMenuModal(false)} />
      </div>
    </div>
  );
};

export default Home;
