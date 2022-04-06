import React, { useState } from "react";
import "./singleSelectionBox.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const SingleSelectionBox = ({ data }) => {
  const [optionVal, setOptionVal] = useState("Relevance");
  const [toggle, setToggle] = useState(false);


  const setHandler=(label)=>{
    setToggle(false)
    setOptionVal(label)
  }
  return (
    <>
      <div className="single-selection__sort_box">
        <div>
          <p
            style={{
              color: "#808184",
            }}
          >
            Sort By <>&nbsp;</> <span>{optionVal}</span>
          {toggle ? (
            <span onClick={() => setToggle(!toggle)}>
              <IoIosArrowUp />
            </span>
          ) : (
            <span onClick={() => setToggle(!toggle)}>
              <IoIosArrowDown />
            </span>
          )}
          </p>
        </div>
       
      </div>

      {toggle && (
        <div className="single-selection__sort_box_select">
          {data.map((val, index) => (
            <p key={index} onClick={()=>setHandler(val.label)} >
              {
                optionVal === val.label && <span>
                <>&#10004; &nbsp;</>
              </span>
              }
              

              {val.label}
            </p>
          ))}
        </div>
      )}

      {/* <select >
        
        {data.map((val, index) => (
          <option value={val.value} key={index} >
            {val.label}
       
          </option>
        ))}
     
      </select> */}
    </>
  );
};

export default SingleSelectionBox;
