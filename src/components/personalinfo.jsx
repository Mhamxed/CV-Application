import '../index.css'

function PersonalInfo() {
    return (
        <div className="personal-infos">
            <h3>Personal Details</h3>
            <form>
                <div className='input'>
                    <label htmlFor="name">Full name</label>
                    <input type="text" id='name' />
                </div>
                <div className='input'>
                    <label htmlFor="email">Email</label>
                    <input type="email" />
                </div>
                <div className='input'>
                    <label htmlFor="phone">Phone number</label>
                    <input type="tel" id='phone'/>
                </div>
                <div className='input'>
                    <label htmlFor="address">Address</label>
                    <input type="text" id='address'/>
                </div>
                <div className='input'>
                    <label htmlFor=""></label>
                    <button type='submit'>Save</button>
                </div>
            </form>
        </div>
    )
}

export default PersonalInfo;