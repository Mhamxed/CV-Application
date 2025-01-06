import '../../index.css'
import PropTypes from 'prop-types'

function Education({ handleAddEdu }) {
    return (
        <div className="education-input">
            <h3>Education</h3>
            <form>
                <div className='input'>
                    <label htmlFor="school">School</label>
                    <input type="text" id='school' placeholder='Enter school'/>
                </div>
                <div className='input'>
                    <label htmlFor="degree">Degree</label>
                    <input type="text" id='degree' placeholder='Enter degree'/>
                </div>
                <div className='input'>
                    <label htmlFor="start-date">Start Date</label>
                    <input type="month" id='start-date'/>
                </div>
                <div className='input'>
                    <label htmlFor="end-date">End Date</label>
                    <input type="month" id='end-date'/>
                </div>
                <div className='input'>
                    <label htmlFor="location">Location</label>
                    <input type="text" id='location' placeholder='Enter location'/>
                </div>
                <button className='add-edu' onClick={(e) => handleAddEdu(e)}>Add</button>
            </form>
        </div>
    )
}

Education.propTypes = {
    handleAddEdu: PropTypes.func
}

export default Education;