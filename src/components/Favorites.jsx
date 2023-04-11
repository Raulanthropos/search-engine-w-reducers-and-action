import { useSelector } from "react-redux";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Trash } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Favorites = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isFav = useSelector((state) => state.favourite.content);

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>List of favorite jobs 🧲</h1>
          <Button onClick={() => navigate("/")}>Home</Button>
        </Col>
        <Col xs={10} className="mx-auto">
          <ListGroup>
            {isFav.map((fav, i) => {
              return (
                <>
                  <ListGroupItem key={i}>
                  <Link to={`/${fav}`}>{fav}</Link>{" "}
                      <Trash
                        size={24}
                        color="red"
                        className="mr-0"
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_FAVOURITES",
                            payload: fav,
                          })
                        }
                      ></Trash>
                  </ListGroupItem>
                </>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Favorites;
