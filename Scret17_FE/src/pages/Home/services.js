import React from "react";
import { Button, Card } from "reactstrap";
import {useHistory} from "react-router-dom"
import Hair from "../../assets/images/hair.png";
import Nail from "../../assets/images/nail.png";

const Services = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <div className="bg-gray-300 mt-10">
        <label className="flex justify-center text-3xl font-medium p-8">
          Our Services
        </label>
        <div className="flex flex-row justify-center">
          <Card className="px-20">
            <img src={Hair} alt="hair" width="100%" height="100%" />
            <div className="flex justify-center p-5">
              <Card className="-mt-64 bg-gradient-to-b from-neutral-300 flex flex-col w-72">
                <label className="text-xl mx-5 mt-5 flex justify-center">
                  Hairstyles
                </label>
                <label className="text-lg m-5 flex justify-center text-center">
                  A hairstyle is the way hair is cut and styled. A haircut may
                  be just practical, but a hairdo suggests professional styling
                </label>
                <Button className="bg-black text-white my-14 mx-5" onClick={() => history.push("/hairs")}>
                  {" "}
                  See More...
                </Button>
              </Card>
            </div>
          </Card>
          <Card className="px-20">
            <img src={Nail} alt="nail" width="100%" height="100%" />
            <div className="flex justify-center p-5">
              <Card className="-mt-64 bg-gradient-to-b from-neutral-300 flex flex-col w-72">
                <label className="text-xl mx-5 mt-5 flex justify-center">
                  Nailarts
                </label>
                <label className="text-lg m-5 flex justify-center text-center">
                  A hairstyle is the way hair is cut and styled. A haircut may
                  be just practical, but a hairdo suggests professional styling.
                </label>
                <Button className="bg-black text-white my-14 mx-5" onClick={() => history.push("/nails")}>
                  {" "}
                  See More...
                </Button>
              </Card>
            </div>
            {/* <div className="absolute">
            <label>Hello</label>
          </div> */}
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Services;
