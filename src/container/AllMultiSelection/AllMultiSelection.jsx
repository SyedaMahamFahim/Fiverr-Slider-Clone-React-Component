import React from "react";
import "./allMultiSelection.css";
import { MultiSelectBox, ToggleSwitch } from "../../components/index";
import {
  ContentTypesData,
  ContentDurationData,
  LanguagesData,
  LevelsData,
  SkillCategoriesData,
  TrainingProvidersData,
} from "../../StaticData/index";
const allMulitiSelectsBox=[
  {
    id:0,
    title:"Skill Categories",
    options:SkillCategoriesData
  },
  {
    id:1,
    title:"Training Providers",
    options:TrainingProvidersData
  },
  {
    id:2,
    title:"Content Duration",
    options:ContentDurationData
  },
  {
    id:3,
    title:"Content Types",
    options:ContentTypesData
  },
  {
    id:4,
    title:"Levels",
    options:LevelsData
  },
  {
    id:5,
    title:"Languages",
    options:LanguagesData
  },

]

const allSwitchToggle=[
  {
    index:0,
    title:"Free Content",
    id:"freeswitch"
  },
  {
    index:1,
    title:"Internal Content",
    id:"internalswitch"
  },
]
const AllMultiSelection = () => {
 
  return (
    <>
      <div className="all_multi_selection">
        {allMulitiSelectsBox.map((val)=> <MultiSelectBox
          title={val.title}
          options={val.options}
          key={val.id}
        />)}
        {
          allSwitchToggle.map((val)=> <ToggleSwitch text={val.title} id={val.id} 
          key={val.index}/>)
        }
      </div>
    </>
  );
};

export default AllMultiSelection;
