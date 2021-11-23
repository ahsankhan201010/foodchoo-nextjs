import React from "react";
import { Input, Form } from "antd";
import Button from "../../uiComponents/button/Button";
import DownloadActions from "../../uiComponents/downloadActions/DownloadActions";
import Fade from "react-reveal/Fade";
import BackDrop from "../../uiComponents/backDrop/BackDrop";

const Contact = () => {
  return (
    <div className="layout layout-gap i-am-contact">
      <BackDrop leftDrop left="0" top="0" />
      <BackDrop rightDrop bottom="0" />
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center ">
            <Fade cascade top>
              <h1 className="theme-title theme-title-red m-auto theme-title-max">
                Contact Us
              </h1>
            </Fade>
          </div>
          <div className="col-lg-8 m-auto fields-wrapper">
            <Form>
              <Form.Item name="name">
                <p>Name</p>
                <Input className="contact-name contact-input" type="text" />
              </Form.Item>
              <Form.Item name="name">
                <p>Email</p>
                <Input className="contact-email contact-input" type="text" />
              </Form.Item>
              <Form.Item name="name">
                <p>Country</p>
                <Input className="contact-country contact-input" type="text" />
              </Form.Item>
              <Form.Item name="name">
                <p>Message</p>
                <Input.TextArea
                  className="contact-message contact-input"
                  type="text"
                />
              </Form.Item>
              <div className="ml-auto w-fit-content">
                <Button className="" red>
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </div>
        <DownloadActions />
      </div>
    </div>
  );
};

export default Contact;
