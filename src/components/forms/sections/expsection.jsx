import '../../../index.css'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

function ExpSection({ employer, location, handleEditExp, handleDeletetExp }) {
    return (
        <div className="Edu-section">
            <p><strong>{ employer }</strong></p>
            <p>{ location }</p>
            <div className='edu-buttons'>
                <button onClick={ handleEditExp }><FontAwesomeIcon icon={faPenToSquare} /></button>
                <button onClick={ handleDeletetExp }><FontAwesomeIcon icon={faTrash} /></button>
            </div>
        </div>
    )
}

ExpSection.propTypes = {
    employer: PropTypes.string,
    location: PropTypes.string,
    handleEditExp: PropTypes.func,
    handleDeletetExp: PropTypes.func,
}


export default ExpSection;
