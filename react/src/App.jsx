import { useState } from "react";
import { cloneDeep } from "lodash";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import PersonalInfo from "./components/personalInfo.jsx";
import Resume from "./components/resume";
import Educationinfo from "./components/education";
import Experienceinfo from "./components/experience";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); //combine these into template

  const educationTemplate = [
    {
      institution: "",
      startDate: "",
      endDate: "",
      achievement: "",
      id: 0,
    },
  ];
  const workExpTemplate = [
    {
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      id: 0,
    },
  ];
  const [workExperiences, setWorkExperiences] = useState([
    {
      role: "",

      id: 0,
    },
  ]);
  const [educations, setEducations] = useState([
    {
      institution: "",

      id: 0,
    },
  ]);
  const [educationsID, setEducationsID] = useState(1);
  const [workExperiencesID, setWorkExperiencesID] = useState(1);

  function HandleFirstNameChange(e) {
    setFirstName(e.target.value);
    console.log(firstName);
  }
  function HandleEmailChange(e) {
    setEmail(e.target.value);
  }
  function HandlePhoneChange(e) {
    setPhone(e.target.value);
  }

  function HandleSecondNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <>
      <div className="header">
        <div className="header-title">CV Creation Tool</div>
      </div>
      <div className="main-container">
        <div className="input-and-CV-container">
          <div className="personal-details-input details-input">
            <PersonalInfo
              firstName={firstName}
              lastName={lastName}
              email={email}
              phone={phone}
              handleFirstNameChange={HandleFirstNameChange}
              HandleSecondNameChange={HandleSecondNameChange}
              HandleEmailChange={HandleEmailChange}
              HandlePhoneChange={HandlePhoneChange}
            ></PersonalInfo>
          </div>

          <div className="education-input details-input">
            <Educationinfo
              educations={educations}
              setEducations={setEducations}
              educationsID={educationsID}
              setEducationsID={setEducationsID}
            ></Educationinfo>
          </div>
          <div className="experience-input details-input">
            <Experienceinfo
              workExperiences={workExperiences}
              setWorkExperiences={setWorkExperiences}
              workExperiencesID={workExperiencesID}
              setWorkExperiencesID={setWorkExperiencesID}
            ></Experienceinfo>
          </div>
        </div>
        <Resume
          firstName={firstName}
          lastName={lastName}
          email={email}
          phone={phone}
          educations={educations}
          workExperiences={workExperiences}
        ></Resume>
      </div>
    </>
  );
}
export default App;
