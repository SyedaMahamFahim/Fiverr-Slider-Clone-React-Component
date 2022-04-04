import React from "react";
import './sortRelevance.css'
import {SingleSelectionBox} from '../../components/index'
import {SortByData} from '../../StaticData/index'
const SortRelevance = () => {
  return (
    <>
      <div className="sort-relevance">
        <div className="sort-relevance__p">
          <p>15,1533 Learning Resources Available</p>
        </div>
        <div className="sort-relevance__selection">
          <SingleSelectionBox defaultValue={"Relevance"} data={SortByData} />
        </div>
      </div>
    </>
  );
};

export default SortRelevance;
