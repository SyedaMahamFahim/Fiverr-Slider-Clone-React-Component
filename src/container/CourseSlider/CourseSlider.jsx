import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CourseCardBox, SectionTitle } from "../../components/index";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./courseSilder.css";
import {SliderData} from '../../StaticData/index'


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="right_arrow" onClick={onClick}>
      <AiOutlineArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <>
      <div className="left_arrow" onClick={onClick}>
        <AiOutlineArrowLeft />
      </div>
    </>
  );
}

const CourseSlider = ({ secTitle }) => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.7,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 924,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1.9,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1.4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="coursecard_section">
        <div className="sectionTitle">
          <SectionTitle secTitle={secTitle} />
        </div>
        <div>
          <Slider {...settings}>
            {SliderData.map((val) => (
              <CourseCardBox val={val} key={val.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CourseSlider;
