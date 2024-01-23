import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import VerticalSidebar from './verticalSidebar';
import UpperComp from './upperComp';
import MusicPlayer from './music_player';
import MainHome from './main_home';

export default function HomePage() {
    return (
        <Container fluid>
            <Row>
                <VerticalSidebar/>
                <Col xs={12} md={{span:9,offset:3}} className="mainPage">
                    <UpperComp/>
                    <MainHome/>
                </Col>
            </Row>
            <MusicPlayer/>
        </Container>
    )}