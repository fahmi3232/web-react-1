import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Card, Button, Table } from "react-bootstrap";

const CovidComp = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      let respo = await axios.get("https://api.covid19api.com/summary");
      setData(respo.data.Countries);
      setLoading(false);
    } catch (e) {
      setLoading(true);
      console.log(e.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  //   useEffect(() => {
  //     axios
  //       .get("https://api.covid19api.com/summary")
  //       .then((res) => {
  //         setData(res.data.Countries);
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //   }, []);

  return (
    <div>
      <Container fluid style={{marginTop: 80}}>
        <input
          className="mt-5"
          type="text"
          placeholder="Input Country"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Container fluid className="py-5" style={{ marginTop: 30 }}>
          {loading ? (
            "Loading..."
          ) : (
            <Row>
              {data
                .filter((dat) => {
                  if (search === "") {
                    return dat;
                  } else if (
                    dat.Country.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return dat;
                  }
                })
                .map((dat, index) => {
                  return (
                    <Col>
                      <Card style={{ width: "26rem" }}>
                        <Card.Body>
                          <Row>
                            <Col md={7}>
                              <Card.Title>
                                Negara : <strong>{dat.Country}</strong>
                              </Card.Title>
                              <p>{dat.CountryCode}</p>
                            </Col>
                            <Col md={5}>{dat.Date}</Col>
                          </Row>
                          <Table striped bordered hover responsive size="sm">
                            <thead>
                              <tr>
                                <th>New Confirme</th>
                                <th>Total Confirmed</th>
                                <th>Total Deaths</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>{dat.NewConfirmed}</td>
                                <td>{dat.TotalConfirmed}</td>
                                <td>{dat.TotalDeaths}</td>
                              </tr>
                            </tbody>
                          </Table>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
            </Row>
          )}
        </Container>
      </Container>
    </div>
  );
};

export default CovidComp;
