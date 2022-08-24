import React from "react";
import Slide1Image from "../../assets/images/slide1.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const UpperSlide = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  };

  const Images = [
    {
      imageSrc: Slide1Image,
    },
    {
      imageSrc: Slide1Image,
    },
    {
      imageSrc: Slide1Image,
    },
  ];
  return (
    <React.Fragment>
      <div>
        <Slider {...settings}>
          {Images.map((picture, i) => {
            return (
              <div>
                <img
                  src={picture && picture.imageSrc}
                  alt="machine_image"
                  //   className="h-96 object-cover"
                />
                {/* <div className="absolute">
                  <label>Need Proper Solution For Your Roughy Hairs ? </label>
                </div> */}
              </div>
            );
          })}
        </Slider>
      </div>
      <div>
        <label className="text-3xl font-medium flex justify-center p-8">
          Secret 17 - One Step Solution For Your Hairs & Nails
        </label>

        <p className="text-lg flex justify-center w-50 px-52 text-center">
          With a view to providing a Luxurious experience for one’s styling
          needs-for Best Hair and Best Nail Art, we have stepped into this
          industry where we cater Premium Salon services in Ahmedabad for Nails
          and Hair. One will love to have Our Luxurious Nail and Hair Salon
          Services in Ahmedabad Our Hair and Nail Expert always try their best{" "}
          Salon service in Ahmedabad.
        </p>
      </div>
    </React.Fragment>
  );
};
export default UpperSlide;
