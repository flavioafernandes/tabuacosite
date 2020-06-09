import React, { Component } from "react";
import "./About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import history from "./../history";

class About extends Component {
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />
        <Navbar
          style={{ backgroundColor: "#111111" }}
          variant="dark"
          fixed="top"
          expand="lg"
        >
          <Navbar.Brand
            onClick={() => history.push("/")}
            style={{ cursor: "pointer" }}
          >
            <img
              alt=""
              src="/logopng.png"
              width="60"
              height="40"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link
                id="links"
                style={{ color: "white", fontSize: "20px" }}
                onClick={getTurismo}
              >
                turismo
              </Nav.Link>
              <Nav.Link id="links" style={{ color: "white", fontSize: "20px" }}>
                associações
              </Nav.Link>
              <Nav.Link
                id="links"
                style={{ color: "white", fontSize: "20px" }}
                onClick={getConcelho}
              >
                concelho
              </Nav.Link>
              <Nav.Link id="links" style={{ color: "white", fontSize: "20px" }}>
                links e contatos
              </Nav.Link>
              <Nav.Link
                id="links"
                style={{ color: "white", fontSize: "20px" }}
                onClick={getNews}
              >
                notícias
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Navbar
          style={{ backgroundColor: "transparent" }}
          variant="dark"
          expand="lg"
        >
          <Navbar.Brand
            onClick={() => history.push("/")}
            style={{ cursor: "pointer" }}
          ></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link
                id="links"
                style={{ color: "white", fontSize: "20px" }}
              ></Nav.Link>
              <Nav.Link
                id="links"
                style={{ color: "white", fontSize: "20px" }}
              ></Nav.Link>
              <Nav.Link
                id="links"
                style={{ color: "white", fontSize: "20px" }}
              ></Nav.Link>
              <Nav.Link
                id="links"
                style={{ color: "white", fontSize: "20px" }}
              ></Nav.Link>
              <Nav.Link
                id="links"
                style={{ color: "white", fontSize: "20px" }}
              ></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div
          style={{
            backgroundColor: "#e9e9e9",
            display: "flex",
            padding: 30,
            paddingTop: 50,
          }}
        >
          <div>
            <h2 style={{ color: "#111111", textAlign: "left" }}>
              Constituição do concelho
            </h2>
            <br />
            <p style={{ textAlign: "left" }}>
              Tabuaço é um concelho no Distrito de Viseu, Região do Norte e
              sub-região do Douro com 133,86 km² de área e 6 350 habitantes
              (2011), subdividido em 13 freguesias. Cerca de 25% da população
              trabalha no sector terciário, mas a agricultura continua a ser o
              sector com maior peso, cerca de 56% da população activa. Entre os
              produtos de maior importância económica, destaca-se o vinho.
            </p>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#F5F5F5",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          <Card id="myCard" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/adorigo.png" />
            <Card.Body>
              <Card.Title>Adorigo</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>

              <img
                id="localImg"
                alt=""
                src="/destination.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/place/Adorigo/@41.1475128,-7.6460325,13z/data=!3m1!4b1!4m5!3m4!1s0xd3b5a62afc11343:0xf8c57ba9dbab6d6d!8m2!3d41.1463316!4d-7.6067988",
                    "_blank"
                  )
                }
              />

              <img
                id="localImg"
                alt=""
                src="/face.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/places/O-que-fazer-em-Adorigo-Viseu-Portugal/111377908882678",
                    "_blank"
                  )
                }
              />
            </Card.Body>
          </Card>

          <Card id="myCard" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/arcos.jpg" />
            <Card.Body>
              <Card.Title>Arcos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>

              <img
                id="localImg"
                alt=""
                src="/destination.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/place/Arcos/data=!4m2!3m1!1s0xd3b586719246145:0xb6a27da4f585da1d?sa=X&ved=2ahUKEwiZ-4fr6uroAhWD5-AKHUvJCv4Q8gEwAHoECAsQAQ",
                    "_blank"
                  )
                }
              />

              <img
                id="localImg"
                alt=""
                src="/face.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/Freguesia-de-Arcos-107585954139220",
                    "_blank"
                  )
                }
              />
            </Card.Body>
          </Card>

          <Card id="myCard" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/balsa.jpg" />
            <Card.Body>
              <Card.Title>Balsa</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>

              <img
                id="localImg"
                alt=""
                src="/destination.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/place/Balsa,+Tabua%C3%A7o/data=!4m2!3m1!1s0xd3b5bbca512099d:0xc9436b2c8762cd32?sa=X&ved=2ahUKEwjQ59L_jevoAhWu4IUKHUPsAnMQ8gEwAHoECAsQAQ",
                    "_blank"
                  )
                }
              />
            </Card.Body>
          </Card>

          <Card id="myCard" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/barcos.png" />
            <Card.Body>
              <Card.Title>Barcos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>

              <img
                id="localImg"
                alt=""
                src="/destination.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/place/Barcos/data=!4m2!3m1!1s0xd3b5a3ba291b4df:0x3d5150ee49fec313?sa=X&ved=2ahUKEwjFr-2S6-roAhV2BGMBHfd5Cf8Q8gEwAHoECAwQAQ",
                    "_blank"
                  )
                }
              />

              <img
                id="localImg"
                alt=""
                src="/face.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/barcosesantaleocadia",
                    "_blank"
                  )
                }
              />
            </Card.Body>
          </Card>

          <Card id="myCard" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/cabriz.jpg" />
            <Card.Body>
              <Card.Title>Cabriz</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>

              <img
                id="localImg"
                alt=""
                src="/destination.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/place/Cabriz,+Tabua%C3%A7o/@41.0577351,-7.5202989,15z/data=!3m1!4b1!4m5!3m4!1s0xd3b5f385c1f3ac7:0x81cf46d1cf95d94f!8m2!3d41.0577198!4d-7.5115441",
                    "_blank"
                  )
                }
              />
            </Card.Body>
          </Card>

          <Card id="myCard" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/carrazedo.png" />
            <Card.Body>
              <Card.Title>Carrazedo</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>

              <img
                id="localImg"
                alt=""
                src="/destination.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/place/Carrazedo,+Tabua%C3%A7o/@41.0841875,-7.6280705,14z/data=!3m1!4b1!4m5!3m4!1s0xd3b59d8b086f739:0xa0d17eff0ee0aadb!8m2!3d41.0841894!4d-7.6105609",
                    "_blank"
                  )
                }
              />

              <img
                id="localImg"
                alt=""
                src="/face.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/places/O-que-fazer-em-Carrazedo-Viseu-Portugal/116467288368391",
                    "_blank"
                  )
                }
              />
            </Card.Body>
          </Card>

          <Card id="myCard" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/chavaes.jpg" />
            <Card.Body>
              <Card.Title>Chavães</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>

              <img
                id="localImg"
                alt=""
                src="/destination.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/place/Chav%C3%A3es/@41.0845315,-7.5811356,14z/data=!3m1!4b1!4m5!3m4!1s0xd3b5909ba44ac81:0x500ebbde49139e0!8m2!3d41.0876422!4d-7.5692707",
                    "_blank"
                  )
                }
              />

              <img
                id="localImg"
                alt=""
                src="/face.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/juntafreguesiachavaes",
                    "_blank"
                  )
                }
              />
            </Card.Body>
          </Card>

          <Card id="myCard" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/desejosa.jpg" />
            <Card.Body>
              <Card.Title>Desejosa</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>

              <img
                id="localImg"
                alt=""
                src="/destination.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/place/5120-143+Desejosa/@41.1315527,-7.5418315,15z/data=!3m1!4b1!4m5!3m4!1s0xd3b5bf24c717115:0xa00f2c04e70ba6c!8m2!3d41.1315374!4d-7.5330767",
                    "_blank"
                  )
                }
              />

              <img
                id="localImg"
                alt=""
                src="/face.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/groups/desejosa/",
                    "_blank"
                  )
                }
              />
            </Card.Body>
          </Card>

          <Card id="myCard" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/granjadotedo.jpg" />
            <Card.Body>
              <Card.Title>Granja do Tedo</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>

              <img
                id="localImg"
                alt=""
                src="/destination.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/place/Granja+do+Tedo/@41.0680489,-7.6219704,15z/data=!3m1!4b1!4m5!3m4!1s0xd3b5780469ec6b3:0x3070523ec016b4f!8m2!3d41.0680336!4d-7.6132156",
                    "_blank"
                  )
                }
              />

              <img
                id="localImg"
                alt=""
                src="/face.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/places/O-que-fazer-em-Granja-Do-Tedo-Viseu-Portugal/111509105543201",
                    "_blank"
                  )
                }
              />
            </Card.Body>
          </Card>

          <Card id="myCard" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/granjinha.jpg" />
            <Card.Body>
              <Card.Title>Granjinha</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>

              <img
                id="localImg"
                alt=""
                src="/destination.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/place/Granjinha/data=!4m2!3m1!1s0xd3b5f28f3e2d6b9:0x500ebbde4913a10?sa=X&ved=2ahUKEwiEnPuBh-voAhUMkxQKHRY1CvcQ8gEwCnoECA8QBA",
                    "_blank"
                  )
                }
              />

              <img
                id="localImg"
                alt=""
                src="/face.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/places/O-que-fazer-em-Granjinha-Viseu-Portugal/108901789142341",
                    "_blank"
                  )
                }
              />
            </Card.Body>
          </Card>

          <Card id="myCard" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/guedieiros.jpg" />
            <Card.Body>
              <Card.Title>Guedieiros</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>

              <img
                id="localImg"
                alt=""
                src="/destination.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/place/Guedieiros,+5120-351+Tabua%C3%A7o/@41.0376097,-7.5507091,15z/data=!4m5!3m4!1s0xd3ca74499ebfc31:0x36878c3bde311c77!8m2!3d41.024194!4d-7.5374705",
                    "_blank"
                  )
                }
              />

              <img
                id="localImg"
                alt=""
                src="/face.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/places/O-que-fazer-em-Guedieiros-Viseu-Portugal/106580732709062",
                    "_blank"
                  )
                }
              />
            </Card.Body>
          </Card>

          <Card id="myCard" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/longa.jpg" />
            <Card.Body>
              <Card.Title>Longa</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>

              <img
                id="localImg"
                alt=""
                src="/destination.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/place/Longa/@41.0579997,-7.5928784,15z/data=!4m5!3m4!1s0x0:0xc17705fd21af3696!8m2!3d41.0579997!4d-7.5928784",
                    "_blank"
                  )
                }
              />

              <img
                id="localImg"
                alt=""
                src="/face.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/Longa-125446847566959/",
                    "_blank"
                  )
                }
              />

              <img
                id="localImg"
                alt=""
                src="/web.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                onClick={() =>
                  window.open("http://www.longa5120.com/longa16.htm", "_blank")
                }
              />
            </Card.Body>
          </Card>

          <Card id="myCard" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/paradela.jpg" />
            <Card.Body>
              <Card.Title>Paradela</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>

              <img
                id="localImg"
                alt=""
                src="/destination.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/place/Paradela/data=!4m2!3m1!1s0xd3b58d8efe4546f:0x500ebbde4913a30?sa=X&ved=2ahUKEwjkvcGMhuvoAhW0BGMBHaozCf4Q8gEwE3oECA8QBA",
                    "_blank"
                  )
                }
              />

              <img
                id="localImg"
                alt=""
                src="/face.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/pages/Paradela%20(Tabua%C3%A7o)/205763096287568/",
                    "_blank"
                  )
                }
              />
            </Card.Body>
          </Card>

          <Card id="myCard" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/pereiro.jpg" />
            <Card.Body>
              <Card.Title>Pereiro</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>

              <img
                id="localImg"
                alt=""
                src="/destination.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/place/Pereiro/@41.0987691,-7.5380445,13z/data=!3m1!4b1!4m5!3m4!1s0xd3b5e956ce4c737:0x500ebbde4913a40!8m2!3d41.103643!4d-7.4934415",
                    "_blank"
                  )
                }
              />

              <img
                id="localImg"
                alt=""
                src="/face.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/places/O-que-fazer-em-Pereiro-Viseu-Portugal/116148861734065",
                    "_blank"
                  )
                }
              />
            </Card.Body>
          </Card>

          <Card id="myCard" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/pinheiros.jpg" />
            <Card.Body>
              <Card.Title>Pinheiros</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>

              <img
                id="localImg"
                alt=""
                src="/destination.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/place/Pinheiros/@41.0951033,-7.6289809,14z/data=!3m1!4b1!4m5!3m4!1s0xd3b57573876d2b7:0xbeaadc589e4f009e!8m2!3d41.1026853!4d-7.6116306",
                    "_blank"
                  )
                }
              />

              <img
                id="localImg"
                alt=""
                src="/face.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/places/O-que-fazer-em-Pinheiros-Viseu-Portugal/103641943005626",
                    "_blank"
                  )
                }
              />
            </Card.Body>
          </Card>

          <Card id="myCard" style={{ width: "18rem", marginRight: "3vw" }}>
            <Card.Img variant="top" src="/santaleocadia.jpg" />
            <Card.Body>
              <Card.Title>Santa Leocádia</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>

              <img
                id="localImg"
                alt=""
                src="/destination.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/place/Santa+Leoc%C3%A1dia/data=!4m2!3m1!1s0xd3b50bd88119d25:0x500ebbde4913a60?sa=X&ved=2ahUKEwjLh-qGi-voAhUKA2MBHbEEDPEQ8gEwCnoECA4QBA",
                    "_blank"
                  )
                }
              />

              <img
                id="localImg"
                alt=""
                src="/face.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/barcosesantaleocadia",
                    "_blank"
                  )
                }
              />
            </Card.Body>
          </Card>

          <Card id="myCard" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/santoaleixo.jpg" />
            <Card.Body>
              <Card.Title>Santo Aleixo</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>

              <img
                id="localImg"
                alt=""
                src="/destination.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/place/Santo+Aleixo,+Tabua%C3%A7o/data=!4m2!3m1!1s0xd3b5a4c5579e9cd:0xe8e5c320c8b40cb3?sa=X&ved=2ahUKEwja14XBh-voAhVSOhoKHRPCBesQ8gEwAHoECAsQAQ",
                    "_blank"
                  )
                }
              />
            </Card.Body>
          </Card>

          <Card id="myCard" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/sendim.jpg" />
            <Card.Body>
              <Card.Title>Sendim</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>

              <img
                id="localImg"
                alt=""
                src="/destination.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/place/Sendim/data=!4m2!3m1!1s0xd3b58a871c9499b:0x500ebbde4913a70?sa=X&ved=2ahUKEwiBwfjyguvoAhUW9IUKHS7BA-kQ8gEwCnoECBAQBA",
                    "_blank"
                  )
                }
              />

              <img
                id="localImg"
                alt=""
                src="/face.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/Junta-De-Freguesia-De-Sendim-104961280282909",
                    "_blank"
                  )
                }
              />
            </Card.Body>
          </Card>

          <Card id="myCard" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/tabuaco.jpg" />
            <Card.Body>
              <Card.Title>Tabuaço</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>

              <img
                id="localImg"
                alt=""
                src="/destination.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/place/Tabua%C3%A7o/@41.115167,-7.6067408,13z/data=!3m1!4b1!4m5!3m4!1s0xd3b5a2ab7df07cd:0x779dbabb44366943!8m2!3d41.1162713!4d-7.5674579",
                    "_blank"
                  )
                }
              />

              <img
                id="localImg"
                alt=""
                src="/face.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                onClick={() =>
                  window.open("https://www.facebook.com/CMTabuaco", "_blank")
                }
              />

              <img
                id="localImg"
                alt=""
                src="/web.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                onClick={() =>
                  window.open("https://www.cm-tabuaco.pt/", "_blank")
                }
              />
            </Card.Body>
          </Card>

          <Card id="myCard" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/tavora.jpg" />
            <Card.Body>
              <Card.Title>Távora</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>

              <img
                id="localImg"
                alt=""
                src="/destination.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/place/T%C3%A1vora/@41.0999805,-7.5511867,14z/data=!3m1!4b1!4m5!3m4!1s0xd3b594f32e3496d:0xf77aa1d19f9da8a7!8m2!3d41.0999824!4d-7.5336771",
                    "_blank"
                  )
                }
              />
            </Card.Body>
          </Card>

          <Card id="myCard" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/valedefigueira.jpg" />
            <Card.Body>
              <Card.Title>Vale de Figueira</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>

              <img
                id="localImg"
                alt=""
                src="/destination.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/place/Vale+de+Figueira/@41.088662,-7.6077701,14z/data=!3m1!4b1!4m5!3m4!1s0xd3b59c04ae346bf:0x500ebbde4913aa0!8m2!3d41.0925125!4d-7.592744",
                    "_blank"
                  )
                }
              />

              <img
                id="localImg"
                alt=""
                src="/face.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/ValedeFigueiraTabuaco",
                    "_blank"
                  )
                }
              />
            </Card.Body>
          </Card>

          <Card id="myCard" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/valencadodouro.jpg" />
            <Card.Body>
              <Card.Title>Valença do Douro</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>

              <img
                id="localImg"
                alt=""
                src="/destination.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/place/Valen%C3%A7a+do+Douro/data=!4m2!3m1!1s0xd3b5b05ff2ce18d:0x500ebbde4913ab0?sa=X&ved=2ahUKEwic6a2fi-voAhUb4OAKHdd1Bv0Q8gEwE3oECBAQBA",
                    "_blank"
                  )
                }
              />

              <img
                id="localImg"
                alt=""
                src="/face.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                onClick={() =>
                  window.open("https://www.facebook.com/valdouro", "_blank")
                }
              />
            </Card.Body>
          </Card>
        </div>

        <Navbar style={{ backgroundColor: "#111111" }}>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text style={{ color: "#ffffff", fontSize: "10px" }}>
              Developed by:{" "}
              <a
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/oflaviofernandes/",
                    "_blank"
                  )
                }
                style={{
                  color: "#e9e9e9",
                  padding: 0,
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                Flávio Fernandes
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

function getNews(e) {
  history.push("/News");
}

function getConcelho(e) {
  history.push("/About");
}

function getTurismo(e) {
  history.push("/Turismo");
}

/*
//ICON BAR
<Navbar.Collapse className="justify-content-end">
                        <img
                            alt=""
                            src="/info.ico"
                            width="30"
                            height="30"
                            alignItems= "right"
                        />
                    </Navbar.Collapse>

//DUAS ULTIMAS CARDS
<div style={{backgroundColor: '#7FDBFF', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', paddingBottom: '20px'}}>
*/

export default About;
