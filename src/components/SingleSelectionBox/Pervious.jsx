import React,{useState} from "react";
import "./singleSelectionBox.css";

const SingleSelectionBox = ({ data }) => {
  const [showTick, setShowTick] = useState(false)
  return (
    <>
      <div className="single-selection__sort_box">
        <div><p style={{
          color:"#808184"
        }}>
        Sort By
          </p></div>
        <div>
          <select>
          
            {data.map((val, index) => (
              <option value={val.value} key={index} onMouseEnter={()=>setShowTick(!showTick)}>
            {
              showTick? ` &#10004; ${val.label}` : `${val.label}`
            }
              </option>
            ))}
            {showTick}
          </select>
        </div>
      </div>
    </>
  );
};

export default SingleSelectionBox;
