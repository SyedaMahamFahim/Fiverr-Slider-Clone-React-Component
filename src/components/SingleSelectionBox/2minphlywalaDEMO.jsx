import React, { useState, useEffect } from "react";
import "./singleSelectionBox.css";
import Select from "react-select";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const SingleSelectionBox = ({ data }) => {
  const [showTick, setShowTick] = useState("Relevance");
  const [toggle, setToggle] = useState(false);

  const changeHandler = (e) => {
    setShowTick(e.target.value);
    console.log(showTick);
  };

  // useEffect(() => {
  //   changeHandler()
  // }, [])

  return (
    <>
      <div className="single-selection__sort_box">
        <div>
          <p
            style={{
              color: "#808184",
            }}
          >
            Sort By {showTick}
          </p>
        </div>
        <div>
         
          
          
          
        <select onChange={changeHandler}>
        
            {data.map((val, index) => (
              <option value={val.value} key={index} style={{display:"none"}}>
                {
                  showTick == val.label ? `&#9989;${val.label}` : val.label
                }
           
           
              </option>
            ))}
         
          </select> 
        </div>
      </div>
     <div style={{display:`${toggle ? "block":"none"}`}}>li</div>
      
    </>
  );
};

export default SingleSelectionBox;
