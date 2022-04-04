import React, { useState,useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";
import "./mutliSelectBox.css";
const MultiSelectBox = ({ title, options }) => {
  const [selected, setSelected] = useState([]);

  const valueRenderer = () => {
    return title;
  };

  
  const ItemRenderer = () => {
    if(title ==="Training Providers"){
      let isPartner = options.find(
        (element) => element.partner === true
      );
      delete isPartner["label"]
      const partnerObj={...isPartner,label:`<h1>Maham</h1>`}
      let removePartnerObj = options.filter((option) => option.partner !== true);
      let trainingProvidersObj=[...removePartnerObj,partnerObj]
    }
  };
  useEffect(() => {
    
    ItemRenderer()
  }, [ItemRenderer])
  
  
  return (
    <>
   
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        valueRenderer={valueRenderer}
        className="multiselect_dropdown"
      />
    </>
  );
};

export default MultiSelectBox;
