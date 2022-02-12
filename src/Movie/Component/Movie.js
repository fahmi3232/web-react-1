import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import Axios from "../Axios";

const image_uri = "https://image.tmdb.org/t/p/original/";


const Movie = (props) => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [modalShow, setModalShow] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      let response = await Axios.get(props.url);
      setMovie(response.data.results);
      setLoading(false);
    } catch (e) {
      setLoading(true);
      console.log(e.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Container fluid style={{ marginTop: 75 }}>
        <input
          type="text"
          placeholder="Cari Film..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <h3 className="py-3">{props.title}</h3>
        {loading ? (
          "Loading..."
        ) : (
          <Row>
            {movie
              .filter((mov) => {
                if (search === "") {
                  return mov;
                } else if (
                  mov.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return mov;
                }
              })
              .map((mov, index) => {
                return (
                  <Col
                    md={2}
                    xs={6}
                    className="d-flex justify-content-center"
                    key={index}
                  >
                    <Card style={{ width: "12rem", marginBottom: 25 }}>
                      <Card.Img
                        variant="top"
                        src={`${image_uri}${mov.poster_path}`}
                      />
                      <Card.Body>
                        <Card.Title>{mov.name}</Card.Title>
                        <Card.Title>{mov.title}</Card.Title>
                        <Card.Text></Card.Text>
                        <Button
                          variant="primary"
                          onClick={() => setModalShow(true)}
                        >
                         Detail
                        </Button>
                        <ModalComp name={mov.name} title={mov.title} show={modalShow} onHide={() => setModalShow(false)} />
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
          </Row>
        )}
      </Container>
    </div>
  );
};


function ModalComp(props) {
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.name}
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Movie;
