import React from 'react'
import { Cart } from 'react-bootstrap'

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
        <a href={`/product/${product._id}`}>
            <Cart.Img src={product.image} variant="top" />
        </a>

        <Cart.Body>
            <a href={`/product/${product._id}`}>
                <Card.Title as='div'>
                    <strong>{product.name}</strong>
                </Card.Title>
            </a>

            <Card.Text as="h3">
                ${product.price}
            </Card.Text>
        </Cart.Body>
    </Card>
  )
}

export default Product