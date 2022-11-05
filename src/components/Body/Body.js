import React, { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import {   Mail, Database, Download, Save, PlusCircle } from "react-feather";

import Editor from "../Editor/Editor";
import Resume from "../Resume/Resume";
import { SpeedDial,SpeedDialAction,SpeedDialIcon } from "@mui/material";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';

import styles from "./Body.module.css";

function Body() {
  const colors = ["#239ce2",'green','yellow','orange', "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936", "#ed1111","#ed7777","blue"];
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };
  const resumeRef = useRef();

  const [activeColor, setActiveColor] = useState(colors[0]);
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });



  // const handleFetch = () => {
  //   switch (sections[activeSectionKey]) {
  //     case sections.basicInfo: {
  //       const tempDetail = {
  //         name: values.name,
  //         title: values.title,
  //         linkedin: values.linkedin,
  //         github: values.github,
  //         email: values.email,
  //         phone: values.phone,
  //       };

  //       props.setInformation((prev) => ({
  //         ...prev,
  //         [sections.basicInfo]: {
  //           ...prev[sections.basicInfo],
  //           detail: tempDetail,
  //           sectionTitle,
  //         },
  //       }));
  //       break;
  //     }
  //     case sections.workExp: {
  //       const tempDetail = {
  //         certificationLink: values.certificationLink,
  //         title: values.title,
  //         startDate: values.startDate,
  //         endDate: values.endDate,
  //         companyName: values.companyName,
  //         location: values.location,
  //         points: values.points,
  //       };
  //       const tempDetails = [...information[sections.workExp]?.details];
  //       tempDetails[activeDetailIndex] = tempDetail;

  //       props.setInformation((prev) => ({
  //         ...prev,
  //         [sections.workExp]: {
  //           ...prev[sections.workExp],
  //           details: tempDetails,
  //           sectionTitle,
  //         },
  //       }));
  //       break;
  //     }
  //     case sections.project: {
  //       const tempDetail = {
  //         link: values.link,
  //         title: values.title,
  //         overview: values.overview,
  //         github: values.github,
  //         points: values.points,
  //       };
  //       const tempDetails = [...information[sections.project]?.details];
  //       tempDetails[activeDetailIndex] = tempDetail;

  //       props.setInformation((prev) => ({
  //         ...prev,
  //         [sections.project]: {
  //           ...prev[sections.project],
  //           details: tempDetails,
  //           sectionTitle,
  //         },
  //       }));
  //       break;
  //     }
  //     case sections.education: {
  //       const tempDetail = {
  //         title: values.title,
  //         college: values.college,
  //         startDate: values.startDate,
  //         endDate: values.endDate,
  //       };
  //       const tempDetails = [...information[sections.education]?.details];
  //       tempDetails[activeDetailIndex] = tempDetail;

  //       props.setInformation((prev) => ({
  //         ...prev,
  //         [sections.education]: {
  //           ...prev[sections.education],
  //           details: tempDetails,
  //           sectionTitle,
  //         },
  //       }));
  //       break;
  //     }
  //     case sections.achievement: {
  //       const tempPoints = values.points;

  //       props.setInformation((prev) => ({
  //         ...prev,
  //         [sections.achievement]: {
  //           ...prev[sections.achievement],
  //           points: tempPoints,
  //           sectionTitle,
  //         },
  //       }));
  //       break;
  //     }
  //     case sections.summary: {
  //       const tempDetail = values.summary;

  //       props.setInformation((prev) => ({
  //         ...prev,
  //         [sections.summary]: {
  //           ...prev[sections.summary],
  //           detail: tempDetail,
  //           sectionTitle,
  //         },
  //       }));
  //       break;
  //     }
  //     case sections.other: {
  //       const tempDetail = values.other;

  //       props.setInformation((prev) => ({
  //         ...prev,
  //         [sections.other]: {
  //           ...prev[sections.other],
  //           detail: tempDetail,
  //           sectionTitle,
  //         },
  //       }));
  //       break;
  //     }
  //   }
  // };



  return (
    <div className={styles.container}>
      <p className={styles.heading}>Resume Builder</p>
      <div className={styles.toolbar}>

{/* ---------------Speec Dial ---------------------------------------------------- */}

{/* 
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            icon={<SpeedDialIcon />}>
           
            {colors.map((item) => (
               
              <SpeedDialAction 
                // key={item}
                key={colors.name}
                icon={colors.icon}
                tooltipTitle={colors.name}
                
                style={{ backgroundColor: item }}
                className={`${styles.color} ${
                  activeColor === item ? styles.active : ""
                }`}
                onClick={() => setActiveColor(item)}
                />
            ))}
          {<div className={styles.colors}/>}
        </SpeedDial> */}



<Popup trigger={<button> <SpeedDialIcon/></button>} position="right center">
    <div>
    {console.log(colors[0])}
    {colors.map((item) => <button onClick={() => setActiveColor(item)} style={{backgroundColor: `${item}`,color: `${item}`}}>{item}</button>
          
        
    )}
    
      
    </div>
  </Popup>




{/* ---------------Speec Dial ---------------------------------------------------- */}


        <ReactToPrint
          trigger={() => {
            return (
              <button>
                Download <Download />
              </button>
              
            );
          }}
          content={() => resumeRef.current}
        />

          <div >
          <Popup contentStyle={{  backgroundColor:'#E5DCDA',
                                  marginTop:'100px',
                                  fontSize:'36px',
                                  textAlign:'center',
                                  width:'700px',
                                  height:'200px' }} trigger={<button >Save <Save /></button>}>

                  <br/>Saved Successfully !!! <br/> <button href=''  style={{ backgroundColor: '#239ce2',
                                                                                        color:'white',
                                                                                        borderRadius:'10px 10px',
                                                                                        fontSize:'24px',
                                                                                        width:'100px',
                                                                                        marginTop:'15px'}} >OK</button>
            </Popup>
            </div>
            <button onClick={() => window.location = 'mailto:yourmail@domain.com'}>
                Mail <Mail />
            </button>
            
            <button onClick={()=> {}}> <input />
                Fetch <Database />
            </button>
      </div>
      <div className={styles.main}>
        <Editor
          sections={sections}
          information={resumeInformation}
          setInformation={setResumeInformation}
        />
        <Resume
          ref={resumeRef} 
          sections={sections}
          information={resumeInformation}
          activeColor={activeColor}
        />
      </div>
    </div>
  );
}

export default Body;
