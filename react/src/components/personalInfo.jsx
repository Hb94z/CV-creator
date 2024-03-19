import { useState } from "react";
import { CollapsableMenu } from "./collapseble";

function PersonalInfo(prop) {
  const {
    firstName,
    lastName,
    email,
    phone,
    handleFirstNameChange,
    HandleSecondNameChange,
    HandleEmailChange,
    HandlePhoneChange,
  } = prop;

  function Content() {
    return (
      <>
        <form className="personal-details-form">
          <div>
            <h3>First name</h3>
            <input
              type="text"
              required
              value={firstName}
              onChange={handleFirstNameChange}
              name="firstName"
              placeholder="First Name"
            />
          </div>
          <div>
            <h3>Second name</h3>
            <input
              type="text"
              required
              value={lastName}
              onChange={HandleSecondNameChange}
              name="SecondName"
              placeholder="Second Name"
            />
          </div>
          <div>
            <h3>Email</h3>
            <input
              type="mail"
              required
              value={email}
              onChange={HandleEmailChange}
              name="email"
              placeholder="email"
            />
          </div>
          <div>
            <h3>Phone number</h3>
            <input
              type="tel"
              required
              value={phone}
              onChange={HandlePhoneChange}
              name="PhoneNumber"
              placeholder="Phone Number"
            />
          </div>
          <div>
            <h3>About</h3>
            <input type="text" name="about" placeholder="profile information" />
          </div>
        </form>
      </>
    );
  }
  return (
    <div>
      <CollapsableMenu title="Personal Details" contents={Content()} />
    </div>
  );
}

export default PersonalInfo;
