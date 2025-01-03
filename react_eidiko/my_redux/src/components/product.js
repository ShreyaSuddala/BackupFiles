import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
const Product = () => {
    const[products,setProducts]=useState([])
     useEffect(
        ()=>{
            fetch('https://fakestoreapi.com/products')
            .then(data=>data.json())
            .then(result=> setProducts(result))
        },[]
     )
     const cards = products.map(
        products =>(
            <div className="col-md-3" style={{marginBottom:'10px'}}>
                 <Card key={products.id} className='h-100' >
                    <div className='text-center'>

      <Card.Img variant="top" src={products.image} style={{width:'100px' ,height:'130px'}}/>
                    </div>
      <Card.Body>
        <Card.Title>{products.title}</Card.Title>
        <Card.Text>
           INR. {products.price}
        </Card.Text>
      </Card.Body>
      <Card.Footer style={{backgroundColor:'white'}}>
        <Button variant="primary">Add to Cart</Button>

      </Card.Footer>
    </Card>
            </div>
        )
     )
  return (
    <div>
      <h1>
        Product Dashboard
      </h1>
      <div className='row'>

        {cards}
      </div>
    </div>
  )
}

export default Product
