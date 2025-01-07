import '../../index.css'
import PropTypes from 'prop-types'

function Experience({ handleAddExp }) {
    return (
        <div className="experience-input">
            <h3>Experience</h3>
            <form className='exp-form'>
                <div className='input'>
                    <label htmlFor="employer">Employer</label>
                    <input type="text" id='employer' placeholder='Enter company'/>
                </div>
                <div className='input'>
                    <label htmlFor="position">Position</label>
                    <input type="text" id='position' placeholder='Enter position title'/>
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
                <div className='input'>
                    <label htmlFor="description">Description</label>
                    <textarea name="Description" rows={5} id="description" placeholder='Enter what you have accomplished...'></textarea>
                </div>
                <button onClick={ (e) => handleAddExp(e)} className='add-experience'>Add</button>
            </form>
        </div>
    )
}

Experience.propTypes = {
    handleAddExp: PropTypes.func
}

export default Experience;