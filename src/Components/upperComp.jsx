import React from 'react'
import { Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function UpperComp() {
    return (   
            <Row className="mb-3">
            <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
              <Link href="#">TRENDING</Link>
              <Link href="#">PODCAST</Link>
              <Link href="#">MOODS AND GENRES</Link>
              <Link href="#">NEW RELEASES</Link>
              <Link href="#">DISCOVER</Link>
            </Col>
          </Row>
    )}