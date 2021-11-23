import restaurantFC from "./../../assets/images/icons/restaurantFC.png";
import DownloadActions from "../../uiComponents/downloadActions/DownloadActions";
import DetailedDescription from "../../uiComponents/DetailedDescription/DetailedDescription";

const Customer = () => {
  const content = [
    "FoodChoo has undertaken a huge task, the introduction to the world of The On Demand! Now! Food Delivery Platform.  What we are doing is no less than a revolution in food delivery.  All revolutions need a starting point and that starts with you, the customer, the most valuable part of the FoodChoo Universe",
    "Our platform enables restaurants to produce and deliver meals to a large, vibrant and robust base of customers..  Our plans are to go to where we are needed most, and there is a good chance we are coming to your area. Therefore we need you to be a customer.",
    "As a small start up we are showing the small restaurant industry that there is a different and better way to deliver hot and fresh food to hungry people.  When restaurants in you area join the FoodChoo Platform, they will have the ability to make unique pop up menus.  The pop up menu concept allows for the quickest delivery experience available.  ",
    "All you need to do to get food from a FoodChoo Pop up menu is download the app here",
  ];
  return (
    <div className="i-am-customer layout-gap layout">
      <div className="container">
        <DetailedDescription
          description={content}
          heading={"CUSTOMER"}
          bannerImage={restaurantFC}
        />
        <DownloadActions />
      </div>
    </div>
  );
};

export default Customer;
