import React from 'react'
import { Row, Col} from 'react-bootdtrap';
import Product from '../components/Product';
import product from '../products';

const HomeScreen = () => {
  return (
    <>
      <h1>Lastest Product</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen