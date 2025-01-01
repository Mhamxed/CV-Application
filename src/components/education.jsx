import './education.css'

function Education() {
    return (
        <div className="education">
            <h3>Education</h3>
            <form>
                <div className='input'>
                    <label htmlFor="school">School</label>
                    <input type="text" id='school'/>
                </div>
                <div className='input'>
                    <label htmlFor="degree">Degree</label>
                    <input type="text" id='degree'/>
                </div>
                <div className='input'>
                    <label htmlFor="start-date">Start Date</label>
                    <input type="date" id='start-date'/>
                </div>
                <div className='input'>
                    <label htmlFor="end-date">End Date</label>
                    <input type="date" id='end-date'/>
                </div>
                <div className='input'>
                    <label htmlFor="location">Location</label>
                    <input type="text" id='location'/>
                </div>
                <div className='input'>
                    <label htmlFor="submit"></label>
                    <button type="submit" id='submit'>Submit</button>
                </div>
                <button className='add-education'>Add</button>
            </form>
        </div>
    )
}

export default Education;