import { useState } from "react";
function CollapsableMenu({ contents, title, buttonEvent }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="accordion">
        <div className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => setIsActive(!isActive)}
          >
            <div className="accordion-title-header">{title}</div>
            <div>{isActive ? "-" : "+"}</div>
          </div>
          {isActive && (
            <div className="accordion-content">
              {contents}
              {buttonEvent}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export { CollapsableMenu };
