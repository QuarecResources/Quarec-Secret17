import React from "react";
import { Label, Row, Col } from "reactstrap";
import Nails from "../../../assets/images/nails.png";
import NailFingure from "../../../assets/images/nailsfingure.png";

const NailArt = () => {
  const CardData = [
    {
      img: NailFingure,
      title: "BLACK & GOLDEN",
      content:
        "Nail art is a creative way to paint, decorate, enhance, and embellish nails. It is a type of artwork that can be done on fingernails and toenails, usually after manicures or pedicures....",
    },
    {
      img: Nails,
      title: "BLACK & GOLDEN",
      content:
        "Nail art is a creative way to paint, decorate, enhance, and embellish nails. It is a type of artwork that can be done on fingernails and toenails, usually after manicures or pedicures....",
    },
    {
      img: NailFingure,
      title: "BLACK & GOLDEN",
      content:
        "Nail art is a creative way to paint, decorate, enhance, and embellish nails. It is a type of artwork that can be done on fingernails and toenails, usually after manicures or pedicures....",
    },
  ];
  return (
    <React.Fragment>
      <div className="m-10">
        <Row>
          {CardData &&
            CardData.map((data, key) => {
              return (
                <Col>
                  <div className="drop-shadow-lg">
                    <img
                      src={data && data.img}
                      alt="nails"
                      className="w-96 h-max"
                    />
                  </div>
                  <div className="w-96 p-2 my-3 drop-shadow-lg bg-gradient-to-b from-black via-stone-800 to-stone-400 ...">
                    <Label className="text-xl flex justify-center text-white">
                      {data && data.title}
                    </Label>
                    <Label className="flex justify-center text-white">
                      {data && data.content}
                    </Label>
                  </div>
                </Col>
              );
            })}

          {/* <Col>
            <div>
              <img src={Nails} alt="nails" />
            </div>
            <div>
              <Label>BLACK & GOLDEN</Label>
              <Label>
                Nail art is a creative way to paint, decorate, enhance, and
                embellish nails. It is a type of artwork that can be done on
                fingernails and toenails, usually after manicures or
                pedicures....{" "}
              </Label>
            </div>
          </Col>
          <Col>
            <div>
              <img src={Nails} alt="nails" />
            </div>
            <div>
              <Label>BLACK & GOLDEN</Label>
              <Label>
                Nail art is a creative way to paint, decorate, enhance, and
                embellish nails. It is a type of artwork that can be done on
                fingernails and toenails, usually after manicures or
                pedicures....{" "}
              </Label>
            </div>
          </Col> */}
        </Row>
      </div>
    </React.Fragment>
  );
};
export default NailArt;
