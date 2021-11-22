import { useState } from "react";
import CButton from "../../uiComponents/button/Button";

const Button = ({ children, customClass }) => {
  const [selectedBtn, setSelectedBtn] = useState(false);

  console.log(selectedBtn, "selectedBtn");
  return (
    <>
      <button
        onClick={() => setSelectedBtn(!selectedBtn)}
        className={`${customClass} ${selectedBtn && "selectedBtn"}`}>
        {children}
      </button>
    </>
  );
};

const FoodMenu = ({ onHide }) => {
  return (
    <div className="food-menu">
      <div className="container f-menu-items">
        <h1 className="f-menu-title">Select Desired Menu</h1>
        <div className="row f-menu-row">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(() => {
            return (
              <>
                <div className="col-lg-2 col-md-3 col-6 my-3">
                  <div>
                    <Button customClass="f-menu-btn">Menu Name</Button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="f-menu-selection">
          <CButton onClick={onHide} className="mx-2">
            Cancel
          </CButton>
          <CButton onClick={onHide} className="mx-2">
            Save
          </CButton>
        </div>
      </div>
    </div>
  );
};

export default FoodMenu;
