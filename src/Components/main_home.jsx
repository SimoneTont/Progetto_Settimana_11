import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
export default function MainHome() {
    return (
        <Container>
          <Row>
            <Col xs={10}>
              <Container id="searchResults" className="d-none">
                <h2>Search Results</h2>
                <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3">
                </Row>
              </Container>
            </Col>
          </Row>
          <Row>
            <Col xs={10}>
              <Container id="rock">
                <h2>Rock classics</h2>
                <Row xs={1} sm={2} lg={3} xl={4} 
                  className="imgLinks py-3"
                  id="rockSection"
                ></Row>
              </Container>
            </Col>
          </Row>
          <Row>
            <Col xs={10}>
              <Container id="pop">
                <h2>Pop Culture</h2>
                <Row xs={1} sm={2} lg={3} xl={4}
                  className="imgLinks py-3"
                  id="popSection"
                ></Row>
              </Container>
            </Col>
          </Row>
          <Row>
            <Col xs={10}>
              <Container id="hiphop">
                <h2>#HipHop</h2>
                <Row xs={1} sm={2} lg={3} xl={4}
                  className="imgLinks py-3"
                  id="hipHopSection"
                ></Row>
              </Container>
            </Col>
          </Row>
        </Container>
    )}