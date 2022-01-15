import {
  Button,
  Card,
  Col,
  Container,
  Image,
  ListGroup,
  Row,
} from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import Rating from '../components/Rating'
import products from '../services/products'
function ProductScreen() {
  const params = useParams()
  const product = products.find((p) => p._id === params.id)
  const { image, name, rating, numReviews, description, price, countInStock } =
    product
  return (
    <Container className='my-3'>
      <Link to='/' className='btn btn-outline-primary mb-4'>
        GO BACK
      </Link>
      <Row>
        <Col md={5}>
          <Image src={image} alt={name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant='flush'>
            <ListGroup.Item as='h3'>{name}</ListGroup.Item>
            <ListGroup.Item>
              <Rating value={rating} text={`${numReviews} reviews`} />
            </ListGroup.Item>
            <ListGroup.Item>Description: {description}</ListGroup.Item>
            <ListGroup.Item>
              Price: <span className='fs-4 fw-bold'>${price}</span>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <span className='fs-4 fw-bold'>${price}</span>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {countInStock > 0 ? (
                      <span className='text-success'>In Stock</span>
                    ) : (
                      <span className='text-danger'>Out Of Stock</span>
                    )}
                  </Col>
                </Row>
              </ListGroup.Item>
              {countInStock < 1 || (
                <ListGroup.Item className='d-grid'>
                  <Button type='button'>ADD TO CART</Button>
                </ListGroup.Item>
              )}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductScreen
