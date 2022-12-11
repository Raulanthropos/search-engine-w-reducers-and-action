import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Job from './Job'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getListOfJobs } from '../redux/actions'

const MainSearch = () => {
  const [query, setQuery] = useState('')

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(getListOfJobs(query))
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selector = useSelector(state => state.job.result) //This accesses the store, sees the job key which correlates to the reducers/index.js, and accesses the initialState content directly!


  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
          <Button variant='success' onClick={() => navigate('/favourites')}>Favorites 💣</Button>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {selector.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}
export default MainSearch
