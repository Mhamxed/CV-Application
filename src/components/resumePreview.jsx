import './resumePreview.css'
function ResumePreview() {
    return (
        <div className="preview">
            <header>
                <div>
                    <h1 className='full-name'>John Doe</h1>
                </div>
                <div className='details'>
                    <div className='email'>john@gmail.com</div>
                    <div className='phone-number'>1234567890</div>
                    <div className='address'>London</div>
                </div>
            </header>
            <div className='education'>
                <h3>Education</h3>
                <div className='education-details'>
                    <div className='date-location'>
                        <p>08/2020 - present</p>
                        <p>New York City, US</p>
                    </div>
                    <div className='school-degree'>
                        <p>London City University</p>
                        <p>Bachelors in Economics</p>
                    </div>
                </div>
            </div>
            <div className='experience'>
                <h3>Experience</h3>
                <div className='experience-details'>
                    <div className='date-locations'>
                        <p>08/2020 - present</p>
                        <p>New York City, US</p>
                    </div>
                    <div className='company-desc'>
                        <p>Black Mesa Labs</p>
                        <p>UX Research Assistant</p>
                        <p>Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumePreview;