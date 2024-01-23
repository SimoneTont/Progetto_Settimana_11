import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Helmet} from "react-helmet"
import HomePage from './Components/home_page';
import AlbumPage from './Components/album_page';
import ArtistPage from './Components/artist_page';
import ErrorPage from './Components/error_page';

function App() {
  return (
    <div className="App">
      <Helmet>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <script src="https://kit.fontawesome.com/1205482781.js"></script>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" type="text/css" href="style.css" />
    <title>Home</title>
      </Helmet>
      {<BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/album' element={<AlbumPage />} />
          <Route path='/artist' element={<ArtistPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>}
    </div>
  );
}

export default App;
