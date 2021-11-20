
import Button from "../../uiComponents/button/Button";
import Fade from "react-reveal/Fade";
import Section01 from "../../assets/images/sample/Section-01.png"
import Device_Mokup from "../../assets/images/sample/Metal_Device_Mockup.png"
import foodPack from "../../assets/images/icons/food-pack.png"
import rectAngleMokup from "../../assets/images/sample/Rectangle 7.png"
import trackLocation  from "../../assets/images/icons/track-location.png"
const Home = () => {
  return (
    <div className="i-am-home">
      <div className="h-group">
        <div className="hero-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <Fade duration={2000} delay={200} top>
                  <h1 className="h-title h-title-white">
                    A complete food and grocery delivery system
                  </h1>
                </Fade>
                <Fade duration={1500} delay={2000}>
                  <p className="h-desc clr-white">
                    Hungry but tired? Need an ingredient but busy with
                    something? Our Food Delivery system is here to help you with
                    last-minute recipe ingredients and food. Simply choose the
                    desired restaurant or grocery store, place the order and let
                    our self-sufficient delivery management system take it from
                    there. Enjoy food and grocery at your doorsteps with minimum
                    delivery charges.
                  </p>
                </Fade>
                <Fade bottom delay={1500}>
                  <Button>Get Started</Button>
                </Fade>
              </div>
              <div className="col-lg-7 food-van">
                <img
                  src={
                    Section01.src
                  }
                  alt="van"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="delivery-details container">
          <div className="row">
            <div className="col-lg-6">
              <Fade left>
                <img
                  src={
                    Device_Mokup.src
                  }
                  alt=""
                />
              </Fade>
            </div>
            <div className="col-lg-6">
              <Fade right>
                <h1 className="h-title h-title-red my-3">
                  A complete food and grocery delivery system
                </h1>
                <p className="h-desc my-3">
                  Hungry but tired? Need an ingredient but busy with something?
                  Our Food Delivery system is here to help you with last-minute
                  recipe ingredients and food. Simply choose the desired
                  restaurant or grocery store, place the order and let our
                  self-sufficient delivery management system take it from there.
                  Enjoy food and grocery at your doorsteps with minimum delivery
                  charges.
                </p>
                <Button red>Get Started</Button>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div className="delivery-system">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Fade duration={2000} top>
                <h1 className="text-center mb-5">
                  A complete food and grocery delivery system
                </h1>
              </Fade>
            </div>
            <div className="col-lg-3 p-0">
              <Fade top>
                <div className="d-items">
                  <div className="d-inner-items">
                    <img
                      src={
                        foodPack.src
                      }
                      alt=""
                    />
                    <h3 className="mt-3">Grocery</h3>
                  </div>
                  <p className="text-center mt-3">
                    Hungry but tired? Need an ingredient but busy with
                    something? Our Food Delivery system is here to help you with
                    last-minute recipe ingredients and food. Simply choose the
                    desired restaurant or grocery store, place
                  </p>
                </div>
              </Fade>
            </div>
            <div className="col-lg-6">
              <Fade delay={500} bottom>
                <div className="d-thumb">
                  <img
                    src={
                      rectAngleMokup.src
                    }
                    alt=""
                  />
                </div>
              </Fade>
            </div>
            <div className="col-lg-3 p-0">
              <Fade top>
                <div className="d-items">
                  <div className="d-inner-items">
                    <img
                      src={
                        trackLocation.src
                      }
                      alt=""
                    />
                    <h3 className="mt-3">Delivery</h3>
                  </div>
                  <p className="text-center mt-3">
                    Hungry but tired? Need an ingredient but busy with
                    something? Our Food Delivery system is here to help you with
                    last-minute recipe ingredients and food. Simply choose the
                    desired restaurant or grocery store, place
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div className="container app-mok">
        <Fade duration={2000} top>
          <h1 className="text-center mb-5">
            A complete food and grocery delivery system
          </h1>
        </Fade>

        <Fade top>
          <img
            className="mok-thumb"
            src={require("../../assets/images/sample/mok-app.png").default}
            alt=""
          />
        </Fade>
      </div>
      <div className="container bottom-section my-5">
        <Fade left>
          <div className="items">
            <h1 className="h-title h-title-black">
              A complete food and grocery delivery system
            </h1>
            <p className="h-desc">
              Hungry but tired? Need an ingredient but busy with something? Our
              Food Delivery system is here to help you with last-minute recipe
              ingredients and food. Simply choose the desired restaurant or
              grocery store, place the order and let our self-sufficient
              delivery management system take it from there. Enjoy food and
              grocery at your doorsteps with minimum delivery charges.
            </p>
            <Button red>Get Started</Button>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Home;
