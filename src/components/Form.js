import React, { useState } from 'react'
import { setEventListeners, checkValidForm } from './Validate'


const Form = ({items, setItems}) => {
    const [FirstName, setFirstName] = useState('')
    const FirstNameHandler = (e) => { setFirstName(e.target.value) }

    const [Lastname, setLastname] = useState('')
    const LastnameHandler = (e) => { setLastname(e.target.value) }

    const [Email, setEmail] = useState('')
    const EmailHandler = (e) => { setEmail(e.target.value) }

    const submitHandler = (e) =>{
        e.preventDefault()
        if (FirstName.length < 2) {
            checkValidForm(forms)
            return
        }
        let json = JSON.stringify({ firstName: FirstName, lastName:Lastname, email:Email})
        console.log(json)
        fetch("https://ecexam-webapi.azurewebsites.net/api/Customers", {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: json
        }) 
        
        const product = {id:(Math.floor(Math.random() * 1000)+1), firstName:FirstName, lastName:Lastname, email:Email}
        
        setItems ([...items,product])
        setFirstName ('')
        setLastname ('')
        setEmail ('')
        
    }


    var forms = document.querySelectorAll('.needs-validation')
    checkValidForm(forms)
    setEventListeners(forms)
      
    return (
        <>
        
        <form>
            <div className="mb-3">
                <label  className="form-label">Förnamn</label>
                <input type="text" className="form-control needs-validation" id="FirstName" placeholder="" value ={FirstName} onChange={FirstNameHandler}/>
                <div id="FirstName-error" className="invalid-feedback">Du måste ange ett giltigt förnamn</div>
            </div>

            <div className="mb-3">
                <label  className="form-label">Efternamn</label>
                <input type="text" className="form-control needs-validation" id="Lastname" rows="3"value ={Lastname} onChange={LastnameHandler} ></input>
                <div id="Lastname-error" className="invalid-feedback">Du måste ange ett giltigt efternamn</div>
            </div>

            <div className="mb-3">
                <label  className="form-label">Email</label>
                <input type="email" className="form-control needs-validation" id="nykund-email" rows="3"value ={Email} onChange={EmailHandler} ></input>
                <div id="email-error" className="invalid-feedback">Du måste ange ett giltigt email</div>
            </div>

            <div className="d-grid gap-2">
                <button onClick={submitHandler} className="submit btn btn-secondary" data-bs-toggle="button" type="button">Skicka</button>
                
            </div>
            
        </form>
        </>
        
    )

    
    
}

export default Form
