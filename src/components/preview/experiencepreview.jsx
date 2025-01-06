import '../../index.css'
import PropTypes from 'prop-types'

function ExperiencePrev({employer, position, description, startDate, endDate, location}) {
    return (
        <div className='experience'>
            <div className='experience-details'>
                <div className='date-locations'>
                    <p>{startDate} - {endDate}</p>
                    <p>{location}</p>
                </div>
                <div className='company-desc'>
                    <p><strong>{employer}</strong></p>
                    <p>{position}</p>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

ExperiencePrev.propTypes = {
    sectionTitle: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    location: PropTypes.string,
    employer: PropTypes.string,
    position: PropTypes.string,
    description: PropTypes.string,
  };

export default ExperiencePrev;