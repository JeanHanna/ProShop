import { Row, Col} from 'react-bootstrap';
import Product from '../component/Product';
import Loader from '../component/Loader';
import Message from '../component/Message'
import { useGetProductsQuery } from '../silices/productApiSlice';


const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      { isLoading ? (
        <h2><Loader /></h2>
      ) : error ? (
      <Message variant='danger'>{error?.data?.message || error.error}
      </Message>) : (
      <>
            <h1>Lastest Product</h1>
            <Row>
              {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
      </>)}

    </>
  )
}

export default HomeScreen;