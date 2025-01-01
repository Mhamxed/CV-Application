import './experience.css'

function Experience() {
    return (
        <div className="experience">
            <h3>Experience</h3>
            <form>
                <div className='input'>
                    <label htmlFor="employer">Employer</label>
                    <input type="text" id='employer'/>
                </div>
                <div className='input'>
                    <label htmlFor="position">Position</label>
                    <input type="text" id='position'/>
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
                    <label htmlFor="description">Description</label>
                    <textarea name="Description" id="description"></textarea>
                </div>
                <div className='input'>
                    <label htmlFor="submit"></label>
                    <button type="submit" id='submit'>Submit</button>
                </div>
                <button className='add-experience'>Add</button>
            </form>
        </div>
    )
}

export default Experience;