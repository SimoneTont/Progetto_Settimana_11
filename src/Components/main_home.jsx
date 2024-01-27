import React from 'react'
import { useEffect, useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { RockSongs, PopSongs, HipHopSongs } from '../redux/Actions/actions';
export default function MainHome() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(RockSongs())
  }, [])

  useEffect(() => {
    dispatch(PopSongs())
  }, [])

  useEffect(() => {
    dispatch(HipHopSongs())
  }, [])

  let rngSelector = Math.floor(Math.random() * 22)

  let rock = useSelector(state => state.rockSongs[0].data)
  let pop = useSelector(state => state.popSongs[0].data)
  let hiphop = useSelector(state => state.hiphopSongs[0].data)

  rock = rock.slice(rngSelector, rngSelector + 4)
  pop = pop.slice(rngSelector, rngSelector + 4)
  hiphop = hiphop.slice(rngSelector, rngSelector + 4)

  console.log(rock)
  console.log(pop)
  console.log(hiphop)

  return (
    rock.length > 0 && pop.length > 0 && hiphop.length > 0 && (
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
              >
                {rock.map(element => (
                  <Col>
                    <img className="img-fluid" src={element.album.cover} alt="AlbumPage"></img>
                  </Col>))}
              </Row>
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
              >
                {pop.map(element => (
                  <Col>
                    <img className="img-fluid" src={element.album.cover} alt="AlbumPage"></img>
                  </Col>))}
              </Row>
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
              >
                {hiphop.map(element => (
                  <Col>
                    <img className="img-fluid" src={element.album.cover} alt="AlbumPage"></img>
                  </Col>))}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    )
  )
}