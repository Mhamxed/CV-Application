import '../../index.css'
import PropTypes from 'prop-types'

function EducationPrev({ school, degree, startDate, endDate, location }) {
    return (
        <div className='education'>
            <div className='education-details'>
                <div className='date-location'>
                    <p>{startDate} - {endDate}</p>
                    <p>{location}</p>
                </div>
                <div className='school-degree'>
                    <p><strong>{school}</strong></p>
                    <p>{degree}</p>
                </div>
            </div>
        </div>
    )
}


EducationPrev.propTypes = {
    sectionTitle: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    location: PropTypes.string,
    school: PropTypes.string,
    degree: PropTypes.string,
  };

export default EducationPrev;