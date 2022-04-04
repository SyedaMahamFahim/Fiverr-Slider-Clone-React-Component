import React from "react";
import './sectionTitle.css';
import { AiOutlineArrowRight } from "react-icons/ai";
const SectionTitle = ({secTitle}) => {
  return (
    <>
      <div className="section_title__h1">
        <p>{secTitle}</p> 
      </div>
      <div className="section_title__a">
        
          <a href="/">
            See All{" "}
            <span>
              <AiOutlineArrowRight />
            </span>
          </a>
       
      </div>
    </>
  );
};

export default SectionTitle;
