import { Row, Col} from 'react-bootstrap';
import Product from '../component/Product';
import { useGetProductsQuery } from '../silices/productApiSlice';


const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      { isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (<div>{error?.data?.message || error.error}</div>) : (<>
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