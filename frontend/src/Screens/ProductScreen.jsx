import {
  Button,
  Card,
  Col,
  Container,
  Image,
  ListGroup,
  Row,
} from 'react-bootstrap'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Rating from '../components/Rating'
import Loading from '../components/Loading'
import MessageAlert from '../components/MessageAlert'
import { getProductDetails } from '../actions/productActions'
function ProductScreen() {
  const params = useParams()
  const dispatch = useDispatch()
  const productDetails = useSelector((state) => state.productDetailsReducer)
  const { loading, error, product } = productDetails
  useEffect(async () => {
    dispatch(getProductDetails(params.id))
  }, [dispatch])

  const {
    image,
    name,
    avgRating,
    numReviews,
    description,
    price,
    countInStock,
  } = product
  return (
    <Container className='my-3'>
      <Link to='/' className='btn btn-outline-primary mb-4'>
        GO BACK
      </Link>
      {loading ? (
        <Loading />
      ) : error ? (
        <MessageAlert variant={'danger'}>{error}</MessageAlert>
      ) : (
        <Row>
          <Col md={5}>
            <Image src={image} alt={name} fluid />
          </Col>
          <Col md={4}>
            <ListGroup variant='flush'>
              <ListGroup.Item as='h3'>{name}</ListGroup.Item>
              <ListGroup.Item>
                <Rating value={avgRating} text={`${numReviews} reviews`} />
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
      )}
    </Container>
  )
}

export default ProductScreen
