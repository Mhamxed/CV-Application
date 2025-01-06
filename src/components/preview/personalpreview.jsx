import '../../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'


function PersonalInfosPrev({fullName, email, phoneNumber, location}) {
    return (
        <header>
            <div>
                <h1 className='full-name'>{fullName}</h1>
            </div>
            <div className='details'>
                <div className='email'>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p>{email}</p>
                </div>
                <div className='phone-number'>
                    <FontAwesomeIcon icon={faPhone} />
                    <p>{phoneNumber}</p>
                </div>
                <div className='address'>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p>{location}</p>
                </div>
            </div>
        </header>
    )
}

PersonalInfosPrev.propTypes = {
    fullName: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    location: PropTypes.string,
};

export default PersonalInfosPrev;