import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { HeartbreakFill, HeartFill } from 'react-bootstrap-icons'

const Job = ({ data }) => {
  
  const selector = useSelector(state => state.favourite.content);

  const isFavourite = selector.includes(data.title);

  /*

    <Col xs={4}>
    <span style={{color: "black", textDecoration: "none"}}>Company name:</span><Link to={`/${data.company_name}`}><br></br><strong>{data.company_name}</strong></Link>
    </Col>
    <Col xs={4}>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title} <br></br>
      </a>
        <strong>{data.candidate_required_location ? data.candidate_required_location : <span style={{color: "red"}}>Unspecified</span>}</strong>
    </Col>

  */

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
      <Col xs={4} className="text-blue">Job added! <HeartbreakFill size={24} color="red" onClick={() => dispatch({
        type: 'REMOVE_FROM_FAVOURITES',
        payload: data.title
      })}></HeartbreakFill></Col>
    ) : (<Col xs={4}>Add to favorites! <HeartFill size={24} color="red" onClick={() => dispatch({
      type: 'ADD_TO_FAVOURITES',
      payload: data.title
    })}></HeartFill></Col>)
}
  </Row>
)}

export default Job
