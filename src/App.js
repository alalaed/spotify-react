import "./App.css";
import "../src/styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/components/Home";
import Artist from "../src/components/Artist";
import Album from "../src/components/Album";
import Search from "../src/components/Search";
import MyNavbar from "../src/components/MyNavbar";
import MySidebar from "../src/components/MySidebar";
import MyPlayer from "../src/components/MyPlayer";
import { Col, Container, Row } from "react-bootstrap";
function App() {
  return (
    // <BrowserRouter>
    //   <Container fluid>
    //     <Row>
    //       <Col xs={2} className="flex-nowrap px-0 py-0">
    //         <MySidebar />
    //       </Col>
    //       <Col xs={10}>
    //         <Row>
    //           <Col xs={12}>
    //             <MyNavbar />
    //           </Col>
    //           <Routes>
    //             <Col>
    //
    //               {/* <Home /> */}
    //             </Col>
    //           </Routes>
    //         </Row>
    //       </Col>
    //       <Col xs={12}>
    //         <MyPlayer />
    //       </Col>
    //     </Row>
    //   </Container>
    // </BrowserRouter>
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Col xs={2} className="px-0 py-0">
            <MySidebar />
          </Col>
          <Col xs={10} className="px-0 py-0">
            <Row>
              <Col xs={12}>
                <MyNavbar />
              </Col>
              <Col xs={12}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/artist" element={<Artist />} />
                  <Route path="/album/:ID" element={<Album />} />
                  <Route path="/search" element={<Search />} />
                </Routes>
              </Col>
            </Row>
          </Col>

          <Col xs={12} className="px-0 py-0">
            <MyPlayer />
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
