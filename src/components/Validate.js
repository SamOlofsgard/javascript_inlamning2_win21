function validMinValueTwo(value,){
    const regEx = /[0-9a-zA-Z]{2,}/
    if(!regEx.test(value))
    return false

return true
}

function validEmail(value){
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(!regEx.test(value))
        return false

    return true
}

export function checkValidForm(elements){
    let disable = false
    let errors = document.querySelectorAll('.is-invalid')
    let submitButton = document.querySelectorAll('.submit')[0]   

    elements.forEach(element => {
        if(element.value === "" || errors.length > 0)
            disable = true
    })     

    if(submitButton !== undefined)
        submitButton.disabled = disable
}

export function setEventListeners(forms){
    
    forms.forEach(element =>{

   switch(element.type){
        case "text":
            element.addEventListener("keyup", function(e){
                if(!validMinValueTwo(e.target.value)){
                    e.target.classList.add("is-invalid");
                    document.getElementById(`${e.target.id}-error`).style.display ="block";
                    checkValidForm(forms)
                }
                else{
                        e.target.classList.remove("is-invalid");
                        document.getElementById(`${e.target.id}-error`).style.display ="none";
                        checkValidForm(forms)
                            
                }
            })
        break;

        case "email":
            element.addEventListener("keyup", function(e){
                if(!validEmail(e.target.value)){
                    e.target.classList.add("is-invalid");
                    document.getElementById(`${e.target.id}-error`).style.display ="block";
                    checkValidForm(forms)
                }
                else{
                    e.target.classList.remove("is-invalid");
                    document.getElementById(`${e.target.id}-error`).style.display ="none";
                    checkValidForm(forms)
                }
             })
        break;

        default:
        break;
    }

})
}


