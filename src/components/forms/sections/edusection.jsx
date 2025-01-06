import '../../../index.css'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

function EduSection({ school, location, handleEditEdu, handleDeleteEdu }) {
    return (
        <div className="Edu-section">
            <p><strong>{ school }</strong></p>
            <p>{ location }</p>
            <div className='edu-buttons'>
                <button onClick={ handleEditEdu }><FontAwesomeIcon icon={faPenToSquare} /></button>
                <button onClick={ handleDeleteEdu }><FontAwesomeIcon icon={faTrash} /></button>
            </div>
        </div>
    )
}

EduSection.propTypes = {
    school: PropTypes.string,
    location: PropTypes.string,
    handleEditEdu: PropTypes.func,
    handleDeleteEdu: PropTypes.func,
}


export default EduSection;
