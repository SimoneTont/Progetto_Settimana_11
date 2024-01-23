import React from 'react'
import { div, Navbar, Button, Image, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function VerticalSidebar() {
    return (
        <Col xs={2}>
            <Navbar className="navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between"
            id="sidebar"
            >
            <div class="nav-container">
              <Link className='nav-link' to="/">
                <Image
                  src="../assets/Spotify_Logo.png"
                  alt="Spotify_Logo"
                  width="131"
                  height="40"
                >
                </Image>
              </Link>
              <Button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </Button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <ul>
                    <li>
                      <Link className="nav-item nav-link" to="/"
                        ><i className="fas fa-home fa-lg"></i>&nbsp; Home
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-item nav-link" href="#"
                        ><i className="fas fa-book-open fa-lg"></i>&nbsp; Your
                        Library</Link>
                    </li>
                    <li>
                      <div className="input-group mt-3">
                        <input
                          type="text"
                          className="form-control mb-2"
                          id="searchField"
                          placeholder="Search"
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                        />
                        <div
                          className="input-group-append Mydiv1"
                        >
                          <Button
                            className="btn btn-outline-secondary btn-sm"
                            type="button"
                            id="button-addon1"
                          >
                            GO
                          </Button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="nav-btn">
              <Button className="signup-btn" type="button">Sign Up</Button>
              <Button className="login-btn" type="button">Login</Button>
              <Link href="#">Cookie Policy</Link> |
              <Link href="#"> Privacy</Link>
            </div>
          </Navbar>
        </Col>
    )}