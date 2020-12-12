import React from "react";
import history from "./../history";
import firebase from "./firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import "./News.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function News() {
  const [news, setNews] = React.useState([]);
  const [eventsDB, setEvents] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("news").get();
      const dataEv = await db.collection("events").get();
      setNews(data.docs.map((doc) => doc.data()));
      setEvents(dataEv.docs.map((doc) => doc.data()));
    };
    fetchData();
  }, []);


  const events = eventsDB.slice().sort((a, b) => b.data - a.data).reverse();

  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossorigin="anonymous"
      />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.2/lodash.min.js"></script>
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
            <Nav.Link id="links" style={{ color: "white", fontSize: "20px" }} onClick={getAssosiacao}> 
              associações
            </Nav.Link>
            <Nav.Link
              id="links"
              style={{ color: "white", fontSize: "20px" }}
              onClick={getConcelho}
            >
              concelho
            </Nav.Link>
            <Nav.Link id="links" style={{ color: "white", fontSize: "20px" }} onClick={getContatos}>
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

      <Row>
        <Col>
        <div
        style={{
          backgroundColor: "#e9e9e9",
          display: "flex",
          padding: 30,
          paddingTop: 50,
        }}
      >
        <div>
          <h2 style={{ color: "#111111", textAlign: "left" }}>Notícias</h2>
        </div>
      </div>

      <div>
        {news.map((newsSingle) => (
          <div
            key={newsSingle.id}
            style={{
              backgroundColor: "#F5F5F5",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
              padding: "20px",
            }}
          >
            <Card className="bg-dark text-white" style={{ width: "30rem" }}>
              <Card.Img src={newsSingle.link} />
              <Card.ImgOverlay
                id="newsCard"
                onClick={() => goToCarddetails(newsSingle)}
              >
                <Card.Title>{newsSingle.title}</Card.Title>
                <a
                  id="btnLer"
                  onClick={() => goToCarddetails(newsSingle)}
                >
                  ler mais
                </a>
              </Card.ImgOverlay>
            </Card>
          </div>
        ))}
      </div>

        </Col>

        {/*<Col xs="auto">

        <div
        style={{
          backgroundColor: "#e9e9e9",
          display: "flex",
          padding: 30,
          paddingTop: 50,
        }}
      >
        <div>
          <h2 style={{ color: "#111111", textAlign: "left" }}>Eventos</h2>
        </div>
      </div>

      <div>
        {events.map((event) => (
          <div
            style={{
              backgroundColor: "#F5F5F5",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
              padding: "20px",
            }}
          >
            { event.status != "Cancelado" && <Card border="success" style={{ width: '18rem' }}>
            <Card.Header>{event.local}</Card.Header>
            <Card.Body>
              <Card.Title>{event.nome}</Card.Title>
              <Card.Text>
                {timestampToDate(event.data)}
              </Card.Text>
            </Card.Body>
          </Card>}

          { event.status != "Ativo" && <Card border="danger" style={{ width: '18rem' }}>
            <Card.Header>{event.local}</Card.Header>
            <Card.Body>
              <Card.Title>{event.nome}</Card.Title>
              <Card.Text>
                {timestampToDate(event.data)}
                <p style={{color:"#FF0000", paddingTop:"5px"}}>Cancelado</p>
              </Card.Text>
            </Card.Body>
          </Card>}

          </div>
        ))}
      </div>
         

          </Col>*/}

      </Row>
      

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

export default News;

function getConcelho(e) {
  history.push("/About");
}

function getNews(e) {
  history.push("/News");
}

function getTurismo(e) {
  history.push("/Turismo");
}

function getContatos(e){
  history.push("/Contatos")
}

function getAssosiacao(e){
  history.push("/Associacoes")
}

function goToCarddetails(newsSingleCard) {
  localStorage.setItem("title", newsSingleCard.title);
  localStorage.setItem("text", newsSingleCard.corpo);
  localStorage.setItem("date", newsSingleCard.timestamp);
  localStorage.setItem("link", newsSingleCard.link);
  history.push("/ReadNews");
}

function timestampToDate(timestamp){
// Months array
 var months_arr = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

 // Convert timestamp to milliseconds
 var date = new Date(timestamp.seconds*1000);

 // Year
 var year = date.getFullYear();

 // Month
 var month = months_arr[date.getMonth()];

 // Day
 var day = date.getDate();

 // Hours
 var hours = date.getHours();

 // Minutes
 var minutes = "0" + date.getMinutes();

 // Seconds
 var seconds = "0" + date.getSeconds();

 // Display date time in MM-dd-yyyy h:m:s format
return day+' de '+month+' de '+year;
 

}
