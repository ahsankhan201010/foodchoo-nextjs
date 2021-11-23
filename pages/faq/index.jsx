import React from 'react' 
import { Collapse } from "antd";

import DownloadActions from '../../uiComponents/downloadActions/DownloadActions';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const faq = () => {
    return (
        <div className="layout i-am-faq">
        <div className="container">
              <div className="row">
                  <div className="col-lg-12 d-flex justify-content-center ">
                      <h1 className="theme-title theme-title-red m-auto theme-title-max">FAQ'S</h1>
                  </div>
                  <div className="col-lg-2"></div>
                  <div className="col-lg-8 fields-wrapper">
                  <Collapse expandIconPosition={"right"} className="faq-collapse">
                    <Panel header="Question 1" key="1">
                        <div>{text}</div>
                    </Panel>
                    <Panel header="Question 2" key="2">
                        <div>{text}</div>
                    </Panel>
                    <Panel header="Question 3" key="3">
                        <div>{text}</div>
                    </Panel>
                </Collapse>
                  </div>
                  <div className="col-lg-2"></div>  
                  <DownloadActions/>
              </div>
          </div>
      </div>
    )
}
export default faq