import React, { useState } from "react";
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { BsClockHistory, BsFillPlayCircleFill } from "react-icons/bs";
import "./courseCardBox.css";

const CourseCardBox = ({ val }) => {
  const [toggleWishList, setToggleWishList] = useState(false)
  return (
    <>
      <div className="coursecard">
        <div className="coursecard_img_box">
          <img src={`/assests/images/${val.bgImg}`} alt={val.title} />
         
          <div className="coursecard_play_icon"
           style={{
            visibility:`${val.title !=='Data Analysis' && 'hidden'}`
          }}
          
          >
            <span>
              <BsFillPlayCircleFill />
            </span>
          </div>
        </div>

        <div className="coursecard_box">
          <img
            src={`/assests/images/${val.logoImg}`}
            alt="val.title"
            width="40px"
            height="40px"
          />

          <div className="coursecard_content">
            <h4>{val.title}</h4>
            <div className="coursecard_content_inner" >
              <p>
                <span color="black">
                  <AiFillStar /> 5.0
                </span>

                <span>(36)</span>
              </p>

              <p
                style={{
                  color: `${
                    val.level === "Intermediate"
                      ? "#4BA8DD"
                      : val.level === "Beginner"
                      ? "#05a69d"
                      : val.level === "Advanced"
                      ? "#ff8c00"
                      : "#4ba8dd"
                  }`,
                  backgroundColor: `${
                    val.level === "Intermediate"
                      ? "rgba(75, 168, 221, 0.1)"
                      : val.level === "Beginner"
                      ? "rgba(5, 166, 157, 0.1)"
                      : val.level === "Advanced"
                      ? "rgba(255, 140, 0, 0.1)"
                      : "#4ba8dd"
                  }`,
                }}
              >
                {val.level}
              </p>
            </div>
          </div>
        </div>

        <p className="coursecard_p">Learning resource title - example 1</p>
        <div className='coursecard_icons'>
          <p onClick={()=>setToggleWishList(!toggleWishList)} 
          className={`${toggleWishList ? 'coursecard_icons_red' :'coursecard_icons_grey'}`}
          >
            <AiFillHeart />
          </p>
          <div className="coursecard_icons_div">
            <p>
              <BsClockHistory />
            </p>

            <p
              style={{
                fontSize: "15px",
                paddingTop: "6px",
              }}
            >
              3h
            </p>
          </div>
          <p>
            <span>Free</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default CourseCardBox;
