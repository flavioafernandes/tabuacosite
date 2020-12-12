import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Construcao.css";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import history from "./../history";

class Construcao extends Component {
  render() {
    const title = localStorage.getItem("title");
    const text = localStorage.getItem("text");
    const link = localStorage.getItem("link");
    const date = localStorage.getItem("date");
    console.log(text);
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

        <p id="devPageText">Página em Desenvolvimento</p>
        <p id="secondaryText">Será disponibilizada o mais brevemente possível</p>

      </div>
    );
  }
}

export default Construcao;

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