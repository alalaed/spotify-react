import { useState } from "react";
import { Container, Row } from "react-bootstrap";

const Home = () => {
  const different = [
    "drake",
    "linkin park",
    "metallica",
    "queen",
    "bruno mars",
    "2pac",
    "u2",
    "rihanna",
    "50-cent",
    "eminem",
    "future",
    "biggie",
  ];

  let arrayOfRandomArtists = [];

  const artists = (arrayOfRandomArtists) => {
    for (let i = 0; i < 8; i++) {
      let random = Math.floor(Math.random() * different.length);
      arrayOfRandomArtists.push(different[random]);
    }
    return arrayOfRandomArtists;
  };
  artists(arrayOfRandomArtists);
  console.log(arrayOfRandomArtists);

  const [artist, setArtist] = useState();

  const render = (arrayOfRandomArtists) => {
    console.log(arrayOfRandomArtists);
    let container = document.getElementById("main-section-small");

    arrayOfRandomArtists.forEach((element) => {
      let x = Math.floor(Math.random() * 2);
      fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${element}`
      )
        .then((response) => response.json())
        .then((body) => {
          const inhalt = `
          <div class="col-12 col-md-6 col-lg-4 col-xl-3">
            
              <div class="mx-1 small-card-main d-flex align-items-center  my-2">
                  <img class="small-card-image-main" src="${body.data[x].album.cover_small}" alt="">
                  <a href="./index-album.html?albumId=${body.data[x].album.id}"><p class=" description-main"> ${body.data[x].title_short}</p></a>
              </div>
            </a>
          </div>
        `;
          container.innerHTML += inhalt;
        });
    });
  };

  return (
    <div>
      <Container fluid className="px-5" style={{ marginTop: "6em" }}>
        <Row className=" ml-2">
          <h1 className="h1-main">Good morning</h1>
        </Row>
        <Row id="main-section-small"></Row>
      </Container>

      <Container fluid className=" px-5 my-4">
        <Row className="row ml-2">
          <h2 className="h2-main">Recently played</h2>
        </Row>
        <Row id="main-section-recent"></Row>
      </Container>

      <Container fluid className=" px-5 my-4">
        <Row className=" ml-2">
          <h2 className="h2-main my-0">Shows to try</h2>
        </Row>
        <p className="ml-2 to-try-main text-left">
          Podcasts we think you will get hooked on.
        </p>
        <div id="main-section-to-try" className="row"></div>
      </Container>

      <div style={{ height: "100px" }}></div>
    </div>
  );
};

export default Home;
