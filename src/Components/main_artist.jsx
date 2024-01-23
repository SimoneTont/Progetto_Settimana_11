import React from "react"
import { Container } from "react-bootstrap"
export default function MainArtist() {
  return (
    <Container>
      <div class="row">
            <div class="col-12 col-md-10 col-lg-10 mt-5">
              <h2 class="titleMain"></h2>
              <div id="followers"></div>
              <div class="d-flex justify-content-center" id="button-container">
                <button
                  class="btn btn-success mr-2 mainButton d-none"
                  id="playButton"
                >
                  PLAY
                </button>
                <button
                  class="btn btn-outline-light mainButton d-none"
                  id="followButton"
                >
                  FOLLOW
                </button>
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-10 offset-1 col-md-10 col-lg-10 p-0">
              <div class="mt-4 d-flex justify-content-start">
                <h2 class="text-white font-weight-bold">Tracks</h2>
              </div>
              <div class="pt-5 mb-5">
                <div class="row" id="apiLoaded"></div>
              </div>
            </div>
          </div>
    </Container>

  )
  }
