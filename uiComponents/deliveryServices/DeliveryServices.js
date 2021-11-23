import { useRef, useEffect } from "react";

import Fade from "react-reveal/Fade";
import Paragraph from "../../uiComponents/paragraph/Paragraph";
import foodPack from "../../assets/images/icons/food-pack.png";
import rectAngleMokup from "../../assets/images/sample/Rectangle 7.png";
import trackLocation from "../../assets/images/icons/track-location.png";
import bgObject from "../../assets/images/sample/Bg-Object.png";

const DeliveryServices = () => {
  const wrapper = useRef(null);

  // useEffect(() => {
  //   const onScroll = () => {
  //     //   console.log(window.scrollY);
  //     var bounding = wrapper.current.getBoundingClientRect();
  //     console.log(window.innerHeight - bounding.top);
  //   };
  //   window.addEventListener("scroll", onScroll);
  //   return () => {
  //     window.removeEventListener("scroll", onScroll);
  //   };
  // }, []);

  return (
    <div
      style={{ backgroundImage: `url(${bgObject.src})` }}
      ref={wrapper}
      className="delivery-system">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Fade duration={2000} top>
              <h1 className="text-center mb-5 theme-head-x-lg">
                A complete food and grocery delivery system
              </h1>
            </Fade>
          </div>
          <div className="col-lg-3 p-0">
            <Fade top>
              <div className="d-items">
                <div className="d-inner-items">
                  <img src={foodPack.src} alt="" />
                  <h3 className="mt-3">Grocery</h3>
                </div>
                <Paragraph className="text-center mt-3">
                  Hungry but tired? Need an ingredient but busy with something?
                  Our Food Delivery system is here to help you with last-minute
                  recipe ingredients and food. Simply choose the desired
                  restaurant or grocery store, place
                </Paragraph>
              </div>
            </Fade>
          </div>
          <div className="col-lg-6">
            <Fade delay={500} bottom>
              <div className="d-thumb">
                <img src={rectAngleMokup.src} alt="" />
              </div>
            </Fade>
          </div>
          <div className="col-lg-3 p-0">
            <Fade top>
              <div className="d-items">
                <div className="d-inner-items">
                  <img src={trackLocation.src} alt="" />
                  <h3 className="mt-3">Delivery</h3>
                </div>
                <Paragraph customClass="text-center clr-white">
                  Hungry but tired? Need an ingredient but busy with something?
                  Our Food Delivery system is here to help you with last-minute
                  recipe ingredients and food. Simply choose the desired
                  restaurant or grocery store, place
                </Paragraph>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryServices;
