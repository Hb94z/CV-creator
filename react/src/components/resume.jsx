

function Resume(prop) {
    
    const {
        firstName,
      lastName,
      email,
      phone,
      workExperiences,
      educations
      
      
 } = prop;
 
    return (
      <div className="resume-container">
       <section className="resume-header">
        <div className="resume-full-name">{firstName} {lastName}</div>
        <div className="resume-header-details">
            <div className="resume-details">
                <div>Email</div>
                <div>{email}</div>
            </div>
            <div className="resume-details">
                <div>Phone</div>
                <div>{phone}</div>
            </div>
        </div>
       </section>
       
       <section className="resume-education">
       
                {(educations[0].institution) && (
                  <p className="header">
                    <h1>
                     Education
                    </h1>
                  </p>
                )}
                <div>
                  {educations.map((education) => {
                    return (
                      <div className="institute" key={education.id}>
                        <div className="school-name">{education.institution}</div>
                        <div className="achievement-name">{education.achievement}</div>
                        <div className="achievement-date">{education.endDate}</div>
                        
                        
                      </div>
                      
                    );
                  })}
                </div>
              

       </section>
       <section className="resume-experience">
       
       {(workExperiences[0].role) && (
         <p className="header">
          <h1>
          Work Experience
          </h1>
         </p>
       )}
       <div>
         {workExperiences.map((experience) => {
           return (
             <div className="role" key={experience.id}>
               <div className="role-name">{experience.role}</div>
               <div className="company-name">{experience.company}</div>
               <div className="end-date">{experience.endDate}</div>
               
               
             </div>
             
           );
         })}
       </div>
     

</section>
       

      </div>
    )
  }
  
  export default Resume