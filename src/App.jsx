import './App.css'
import './index.css'

import PersonalInfo from './components/forms/personalinfo.jsx'
import Education from './components/forms/education.jsx'
import Experience from './components/forms/experience.jsx'

import PersonalInfosPrev from './components/preview/personalpreview.jsx'
import EducationPrev from './components/preview/educationpreview.jsx'
import ExperiencePrev from './components/preview/experiencepreview.jsx'

import EduSection from './components/forms/sections/edusection.jsx'
import ExpSection from './components/forms/sections/expsection.jsx'

import { useState } from 'react'

function App() {
  const [fullName, setfullName] = useState("Firstname Lastname")
  const [email, setemail] = useState("example@example.com")
  const [phoneNumber, setphoneNumber] = useState("1234567890")
  const [address, setaddress] = useState("City, country")
  const [edu, setEdu] = useState([
    {
    school: "Top 10 CS School", 
    degree: "Master of Science in Computer Science, Specialization in Machine Learning, GPA: 4.0", 
    startDate: "2024-09",
    endDate: "2025-01",
    location: "City, USA"
  }, 
  {
    school: "Mid Tier School", 
    degree: "Bachelor of Science in Computer Science, Minor in Mathematics", 
    startDate: "2020-01",
    endDate: "2024-07",
    location: "City, USA" 
  }])
  const [exp, setExp] = useState([
    {
      employer: "FAANG subsidiary", 
      position: "Software Engineer", 
      startDate: "2021-04", 
      endDate: "2022-09", 
      location: "City, USA", 
      desc: "- Developed and maintained high-performance, scalable, and secure RESTful web microservices serving 5M+ users using Spring Boot and Node.js - Collaborated cross-functionally with multiple teams to develop new front-end features using Angular, including Ul redesigns, dynamic user forms and API integrations - Contributed to automating deployment of containerized microservices to AWS using Jenkins CI/CD, Docker and Kubernetes, cutting deployment time by 50% - Boosted web page load speeds by 30% through code refactoring, SQL query optimization and caching - Achieved over 80% automated test coverage by implementing unit, integration and end-to-end tests, ensuring robust and bug-free production code"
    }, 
    {
      employer: "Company", 
      position: "Software Developer", 
      startDate: "2019-08", 
      endDate: "2020-08", 
      location: "City, USA", 
      desc: "- Managed overhaul of client-side web architecture, improving overall system efficiency and scalability through the use of HTML, CSS, JavaScript and AJAX - Implemented CRUD operations on the backend using PHP and SQL - Led database migration from MySQL to MS SQL, improving data management and system performance"
    }

  ])
  const firstNameChange = (e) => {setfullName(e.target.value)}
  const emailChange = (e) => {setemail(e.target.value)}
  const phoneNumberChange = (e) => {setphoneNumber(e.target.value)}
  const addressChange = (e) => {setaddress(e.target.value)}

  function handleAddEdu(e) {
    e.preventDefault()
    let school = e.target.closest('form').children[0].children[1]
    let degree = e.target.closest('form').children[1].children[1]
    let startDate = e.target.closest('form').children[2].children[1]
    let endDate = e.target.closest('form').children[3].children[1]
    let location = e.target.closest('form').children[4].children[1]
    if (school.value !== "" && degree.value !== "" && startDate.value !== "" && endDate.value !== "" && location.value !== ""){
      const eduDetails = { school: school.value, degree: degree.value, startDate: startDate.value, endDate: endDate.value, location: location.value }
      setEdu([...edu, eduDetails])
      school.value = ""
      degree.value = ""
      startDate.value = ""
      endDate.value = ""
      location.value = ""
    }
  }

  function handleEditEdu(e, index) {
    e.preventDefault()
    const education = edu[index]
    const eduForm = document.querySelector('.edu-form')
    let school = eduForm.children[0].children[1]
    let degree = eduForm.children[1].children[1]
    let startDate = eduForm.children[2].children[1]
    let endDate = eduForm.children[3].children[1]
    let location = eduForm.children[4].children[1]
    school.value = education.school
    degree.value = education.degree
    startDate.value = education.startDate
    endDate.value = education.endDate
    location.value = education.location
    handleDeleteEdu(index)
  }

  function handleEditExp(e, index) {
    e.preventDefault()
    const experience = exp[index]
    const expForm = document.querySelector('.exp-form')
    let employer = expForm.children[0].children[1]
    let position = expForm.children[1].children[1]
    let startDate = expForm.children[2].children[1]
    let endDate = expForm.children[3].children[1]
    let location = expForm.children[4].children[1]
    let desc = expForm.children[5].children[1]
    employer.value = experience.employer
    position.value = experience.position
    startDate.value = experience.startDate
    endDate.value = experience.endDate
    location.value = experience.location
    desc.value = experience.desc
    handleDeletetExp(index)
  }

  function handleDeleteEdu(index) {
    edu.splice(index, 1)
    setEdu([...edu])
  }

  function handleDeletetExp(index) {
    exp.splice(index, 1)
    setExp([...exp])
  }

  function handleAddExp(e) {
    e.preventDefault()
    let employer = e.target.closest('form').children[0].children[1]
    let position = e.target.closest('form').children[1].children[1]
    let startDate = e.target.closest('form').children[2].children[1]
    let endDate = e.target.closest('form').children[3].children[1]
    let location = e.target.closest('form').children[4].children[1]
    let desc = e.target.closest('form').children[5].children[1]
    if (employer.value !== "" && position.value !== "" && startDate.value !== "" && endDate.value !== "" && location.value !== "" && desc.value !== ""){
      const expDetails = { employer: employer.value, position: position.value, startDate: startDate.value, endDate: endDate.value, location: location.value, desc: desc.value }
      setExp([...exp, expDetails])
      employer.value = ""
      position.value = ""
      startDate.value = ""
      endDate.value = ""
      location.value = ""
      desc.value = ""
    }
  }


  function ResumePreview() {
    return (
      <div className="preview">
        <PersonalInfosPrev fullName={fullName} email={email} phoneNumber={phoneNumber} location={address}/>
        <div className='section'><h3>Education</h3></div>
        {edu.map((item, index) => {
          return <EducationPrev school={item.school} degree={item.degree} startDate={item.startDate}
          endDate={item.endDate} location={item.location} key={index}/>
        })}
        <div className='section'><h3>Professional Experience</h3></div>
        {exp.map((item, index) => {
          return <ExperiencePrev employer={item.employer} position={item.position} 
          description={item.desc} startDate={item.startDate} endDate={item.endDate} location={item.location} key={index}/>
        })}
      </div>
    )
  }

return (
  <div className='container'>
    <div className='infos'>
      <PersonalInfo firstNameChange={firstNameChange} emailChange={emailChange} phoneNumberChange={phoneNumberChange} addressChange={addressChange}/>
      <Education handleAddEdu={handleAddEdu}/>
      {edu.map((item, index) => {
        return <EduSection school={item.school} location={item.location} handleEditEdu={ (e) => handleEditEdu(e, index)} handleDeleteEdu={ () => handleDeleteEdu(index)} key={index}/>
      })}
      <Experience handleAddExp={ handleAddExp }/>
      {exp.map((item, index) => {
        return <ExpSection employer={item.employer} location={item.location} handleEditExp={ (e) => handleEditExp(e, index)} handleDeletetExp={ () => handleDeletetExp(index)} key={index}/>
      })}
    </div>
    <ResumePreview/>
  </div>
)
}

export default App