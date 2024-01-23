import React from 'react'
import { Container, Row, Col, Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function MusicPlayer() {
    return (
        <Container className="fixed-bottom bg-container pt-1">
            <Row>
                <Col lg={{span:10,offset:2}}>
                    <Row>
                        <Col xs={{span:6, offset:3}} md={{span:4, offset:4}} lg={{span:2,offset:5}}
                            className="playerControls mt-1"
                        >
                            <Row>
                                <Link href="#">
                                    <Image src="../assets/Shuffle.png" alt="shuffle" />
                                </Link>
                                <Link href="#">
                                    <Image src="../assets/Previous.png" alt="shuffle" />
                                </Link>
                                <Link href="#">
                                    <Image src="../assets/Play.png" alt="shuffle" />
                                </Link>
                                <Link href="#">
                                    <Image src="../assets/Next.png" alt="shuffle" />
                                </Link>
                                <Link href="#">
                                    <Image src="../assets/Repeat.png" alt="shuffle" />
                                </Link>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="justify-content-center playBar py-3">
                        <Col xs={8} md={6}>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    aria-valuenow="0"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}