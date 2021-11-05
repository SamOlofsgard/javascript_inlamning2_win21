import React from 'react'
import Card from './cards/Card'

const Nykund = ({item}) => {
    
    return (
        <div className="container">
            <div className="m-4">Ny kund till kundregistret:</div>
            <Card key={item.id} kund={item} />
            
        </div>
    )
}

export default Nykund
