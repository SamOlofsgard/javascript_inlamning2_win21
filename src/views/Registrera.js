
import React, { useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import Form from '../components/Form'
import Nykund from '../components/Nykund'


const Registrera = () => {
    
    const [nykund, setNykund] = useState([])
    
    return (
        <>
            <Navbar />
            <div className="container mt-4 ">
                <div className="d-flex justify-content-center">
                    <div className="col-6">
                        <Form items={nykund} setItems={setNykund} />
                    </div>
                </div>
            </div>
            {
                nykund.map(product => (<Nykund key={product.id} item={product} />))
            }
            

        </>
    )
}

export default Registrera
