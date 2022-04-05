import React, { useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";
import "./mutliSelectBox.css";

const MultiSelectBox = ({ title, options }) => {
  const [selected, setSelected] = useState([]);
  const [trainingProvidersObj, setTrainingProvidersObj] = useState([]);
  const valueRenderer = () => {
    return title;
  };


  useEffect(() => {
    if (title === "Training Providers") {
      let isPartner = options.find((element) => element.partner === true);
      const partnerObj = {
        ...isPartner,
        label: <PartnerLabel label={isPartner.label} partner="Partner" />,
      };

      let removePartnerObj = options.filter(
        (option) => option.partner !== true
      );
      setTrainingProvidersObj([...removePartnerObj, partnerObj]);
      
    }
  }, [options,title]);

  return (
    <>
      <MultiSelect
        options={
          title === "Training Providers" ? trainingProvidersObj : options
        }
        value={selected}
        onChange={setSelected}
        valueRenderer={valueRenderer}
        className="multiselect_dropdown"
      />
    </>
  );
};

const PartnerLabel = ({ label, partner }) => {
  return (
    <>
      <div className="partner-label">
        <p> {label}</p>
        <p>{partner}</p>
      </div>
    </>
  );
};

export default MultiSelectBox;
