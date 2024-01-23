import React from "react"
import { Row, Col } from "react-bootstrap"
export default function MainAlbum() {
  return (
    <Row>
            <Col md={3} class="pt-5 text-center" id="img-container"></Col>
            <Col md={8} class="p-5">
              <Row>
                <Col md={10} class="mb-5" id="trackList"></Col>
              </Row>
            </Col>
          </Row>
  )
}