import React, {useState, useEffect} from 'react'
import Navbar from '../components/navbar/Navbar'
import Card from '../components/cards/Card'

const Kundlista = () => {
    

    const [kundlista, setKundlista] = useState ([])

    useEffect(() =>{
        fetch("https://ecexam-webapi.azurewebsites.net/api/Customers")
        .then(res => res.json())
        .then(data=> setKundlista(data))
        
    }, [])

    return (
        <div>
            <Navbar />
            <div className="container">
                
                    <div className="row">
                        
                    {
                        
                        kundlista.map(item  => (<Card key={item.id} kund={item} />))
                        
                    }
                    </div> 
                
            </div>
            
            

        </div>
    )
}

export default Kundlista
