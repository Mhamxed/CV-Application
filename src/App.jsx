import './App.css'
import PersonalInfo from './components/personalinfo.jsx'
import ResumePreview from './components/resumePreview.jsx'
import Education from './components/education.jsx'
import Experience from './components/experience.jsx'
function App() {

return (
  <div className='container'>
    <div className='infos'>
      <PersonalInfo/>
      <Education/>
      <Experience/>
    </div>
    <ResumePreview/>
  </div>
)
}

export default App
