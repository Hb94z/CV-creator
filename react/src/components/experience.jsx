import { TextInput } from "./TextInput";
import { CollapsableMenu } from "./collapseble";

function Experienceinfo({
  workExperiences,
  setWorkExperiences,
  workExperiencesID,
  setWorkExperiencesID,
}) {
  function handleChangeRole(e) {
    const id = e.target.dataset.id;
    setWorkExperiences(
      workExperiences.map((experience) => {
        if (experience.id == id) {
          console.log(workExperiences);
          return { ...experience, role: e.target.value };
        } else {
          return experience;
        }
      })
    );
  }
  function handleChangeCompany(e) {
    const id = e.target.dataset.id;
    setWorkExperiences(
      workExperiences.map((experience) => {
        if (experience.id == id) {
          console.log(workExperiences);
          return { ...experience, company: e.target.value };
        } else {
          return experience;
        }
      })
    );
  }
  function handleChangeExpDate(e) {
    const id = e.target.dataset.id;
    setWorkExperiences(
      workExperiences.map((experience) => {
        if (experience.id == id) {
          console.log(workExperiences);
          return { ...experience, endDate: e.target.value };
        } else {
          return experience;
        }
      })
    );
  }

  function HandleAddExperience() {
    setWorkExperiencesID(workExperiencesID + 1);
    setWorkExperiences([
      ...workExperiences,
      {
        role: "",

        id: workExperiencesID,
      },
    ]);
    console.log("new exp ", workExperiences);
  }

  function workExperiencesContent() {
    return (
      <div className="education-input-group">
        {workExperiences.map((experience) => (
          <div className="field-section" key={experience.id}>
            <TextInput
              name="role"
              placeholder="Role"
              value={experience.role}
              id={experience.id}
              handleChange={handleChangeRole}
              type="text"
            />
            <TextInput
              name="Company"
              placeholder="Company"
              value={experience.company}
              id={experience.id}
              handleChange={handleChangeCompany}
              type="text"
            />
            <TextInput
              name="Date"
              placeholder="Date"
              value={experience.endDate}
              id={experience.id}
              handleChange={handleChangeExpDate}
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
        title="Work Details"
        contents={workExperiencesContent()}
        buttonEvent={
          <button className="button-add" onClick={HandleAddExperience}>
            Add Experience
          </button>
        }
      />
    </div>
  );
}

export default Experienceinfo;
