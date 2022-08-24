import React from "react";

import { Button, Input } from "reactstrap";

import SalonImage from "../../assets/images/contactSalon.png";

const Contact = () => {
  return (
    <React.Fragment>
      <div className="bg-black mt-20">
        <div className="flex flex-row m-10">
          <div>
            <img src={SalonImage} alt="salon" className="m-10" />
          </div>

          <div className="flex flex-col m-10 w-full px-10">
            <label className="text-white">Name</label>
            <Input
              type="text"
              placeholder="Enter Your Full Name"
              className="font-md"
            />

            <label className="text-white mt-6">Email I'd</label>
            <Input
              type="email"
              className="font-md"
              placeholder="Enter Your Email I'd"
            />

            <label className="text-white mt-6">Phone Number</label>
            <Input
              type="number"
              className="font-md "
              placeholder="Enter Your Phone Number"
            />
            <div className="flex justify-center">
              <Button className="text-black bg-white mt-8 p-2 w-40  font-bold">
                Request A Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Contact;
