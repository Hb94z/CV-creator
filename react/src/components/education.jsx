import { TextInput } from "./TextInput";
import { AddButton } from "./button";
import { CollapsableMenu } from "./collapseble";

function Educationinfo({
  educations,
  setEducations,
  setEducationsID,
  educationsID,
}) {
  function handleChangeInstitution(e) {
    const id = e.target.dataset.id;
    setEducations(
      educations.map((education) => {
        if (education.id == id) {
          console.log(educations);
          return { ...education, institution: e.target.value };
        } else {
          return education;
        }
      })
    );
  }
  function HandleAddEducation() {
    setEducationsID(educationsID + 1);
    setEducations([
      ...educations,
      {
        institution: "",

        id: educationsID,
      },
    ]);
    console.log("new edu: ", educations);
  }
  function handleChangeAchievement(e) {
    const id = e.target.dataset.id;
    setEducations(
      educations.map((education) => {
        if (education.id == id) {
          console.log(educations);
          return { ...education, achievement: e.target.value };
        } else {
          return education;
        }
      })
    );
  }
  function handleChangeDate(e) {
    const id = e.target.dataset.id;
    setEducations(
      educations.map((education) => {
        if (education.id == id) {
          console.log(educations);
          return { ...education, endDate: e.target.value };
        } else {
          return education;
        }
      })
    );
  }

  function educationContent() {
    return (
      <div className="education-input-group">
        {educations.map((education) => (
          <div className="field-section" key={education.id}>
            <TextInput
              name="institute"
              placeholder="Institute name"
              value={education.institution}
              id={education.id}
              handleChange={handleChangeInstitution}
              type="text"
            />
            <TextInput
              name="achievement"
              placeholder="Achievement"
              value={education.achievement}
              id={education.id}
              handleChange={handleChangeAchievement}
              type="text"
            />
            <TextInput
              name="Date"
              placeholder="Date"
              value={education.endDate}
              id={education.id}
              handleChange={handleChangeDate}
              type="date"
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <CollapsableMenu
        title="Education Details"
        contents={educationContent()}
        buttonEvent={
          <button className="button-add" onClick={HandleAddEducation}>
            Add Education
          </button>
        }
      />
    </div>
  );
}

export default Educationinfo;
