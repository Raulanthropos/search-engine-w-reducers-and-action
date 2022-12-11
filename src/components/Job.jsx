import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { HeartbreakFill, HeartFill } from 'react-bootstrap-icons'
import { addToFavourites, removeFromFavourites } from '../redux/actions'

const Job = ({ data }) => {
  
  const selector = useSelector(state => state.favourite.content); //This accesses the store, sees the favourite key which correlates to the reducers/index.js, and accesses the initialState content directly!
  console.log(selector);
  const isFavourite = selector.includes(data.company_name);
  console.log(isFavourite)


  const dispatch = useDispatch();

  return (
  
  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: '1px solid #00000033', borderRadius: 4 }}
  >
    <Col xs={4}>
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    </Col>
    <Col xs={4}>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
    </Col>
    {
    isFavourite ? (
      <Col xs={4} className="text-blue">Job added! <HeartbreakFill size={24} color="red" onClick={() => dispatch(removeFromFavourites(data.company_name))}></HeartbreakFill></Col>
    ) : (<Col xs={4}>Add to favorites! <HeartFill size={24} color="red" onClick={() => dispatch(addToFavourites(data.company_name))}></HeartFill></Col>)
}
  </Row>
)}

export default Job
