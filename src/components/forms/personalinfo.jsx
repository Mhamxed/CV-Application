import '../../index.css'
import PropTypes from 'prop-types'


function PersonalInfo({firstNameChange, emailChange, phoneNumberChange, addressChange}) {
    return (
        <div className="personal-infos">
            <h3>Personal Details</h3>
            <form>
                <div className='input'>
                    <label htmlFor="name">Full name</label>
                    <input type="text" id='name' placeholder='Enter first and last name' onChange={firstNameChange}/>
                </div>
                <div className='input'>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Enter email' onChange={emailChange}/>
                </div>
                <div className='input'>
                    <label htmlFor="phone">Phone number</label>
                    <input type="tel" id='phone' placeholder='Enter phone number' onChange={phoneNumberChange}/>
                </div>
                <div className='input'>
                    <label htmlFor="address">Address</label>
                    <input type="text" id='address' placeholder='Enter city and country' onChange={addressChange}/>
                </div>
            </form>
        </div>
    )
}

PersonalInfo.propTypes = {
    firstNameChange: PropTypes.func,
    emailChange: PropTypes.func,
    phoneNumberChange: PropTypes.func,
    addressChange: PropTypes.func,
}

export default PersonalInfo;