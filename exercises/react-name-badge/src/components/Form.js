import React from 'react' 

const Form = (props) => {
    const mappedInfo = props.info.map((badge, i) => <div key={i} className="badges">
        <h1>Badge: </h1>
        <h3>Name: {badge.fName} {badge.lName}</h3>
        <h3>Email: {badge.email} </h3>
        <h3>Place of Birth: {badge.birth}</h3>
        <h3>PhoneNumber: {badge.phone}</h3> 
        <h3>Favorite Food: {badge.favFood}</h3>
        <h3>About: {badge.about}</h3>
        
        
    </div>)

    const msg = "All Input is Required"
    const {fName, lName, email, birth, phone, favFood, about} = props.inform
    return (
        <div>
            <form onSubmit={props.sub}>
                
            <input type="text" name="fName" value={fName} onChange={props.cng} placeholder="First Name" required minLength="3"
            />
            
            <input type="text" name="lName" value={lName} onChange={props.cng} placeholder="Last Name" required minLength="3"
            />

            <input type="email" name="email" value={email} onChange={props.cng} placeholder="Email" minLength="3" required
            />
            
            
            <input type="text" name="birth" value={birth} onChange={props.cng} placeholder="Birth Place" required minLength="3"
            />
            <input type="number" name="phone" value={phone} onChange={props.cng} placeholder="Phone Number" required minLength="3"
            />
            <input type="text" name="favFood" value={favFood} onChange={props.cng} placeholder="Favorite Food" required minLength="3"
            />
            <textarea type="text"
            className="about" name="about" value={about} onChange={props.cng} placeholder="Tell us about yourself" required minLength="3"
            />

            <button>Submit</button>

            {!fName && <p>{msg}</p>}
            {!lName && <p>{msg}</p>}
            {!email && <p>{msg}</p>}
            {!birth && <p>{msg}</p>}
            {!phone && <p>{msg}</p>}
            {!favFood && <p>{msg}</p>}
            {!about && <p>{msg}</p>}

            
        </form>
        <section>
            { mappedInfo }
        </section>
        
        </div>
        
    )
}

export default Form