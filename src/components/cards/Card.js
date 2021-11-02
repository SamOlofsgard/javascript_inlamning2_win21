import React from 'react'

const Card = ({kund}) => {
       

    return (
                   
            <div className="card m-4 " style={{width: 18 +'rem'}}>
                <div className="card-body">
                    
                    <h4 className="card-title"> Förnamn: {kund.firstName} </h4>
                    <h5 className="card-title"> Efternamn: {kund.lastName} </h5>
                    <p className="card-text"> Email: {kund.email} </p>
                    
                </div>
            </div>
        
            
       


        
    )
}

export default Card
