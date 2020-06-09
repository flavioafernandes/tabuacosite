import React, { Component } from "react";
import "./Teste.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import history from "./../history";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'

class Teste extends Component {
    render() {
      return (
        <div>
            <Container fluid id="main"> 
                <Carousel id="main" indicators={false} controls={false} interval={3000}>
                    
                    <Carousel.Item>
                        <img
                        id="imgfundo"
                        src="/quintas/vineyard.jpg"
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        id="imgfundo"
                        src="/quintas/pego.jpg"
                        alt="Third slide"
                        />
                    </Carousel.Item>

                </Carousel>
                    <div id="textCont">
                        <p id="tbc">TABUAÇO</p>
                        <button id="vermaisbtn">Ver Mais</button>
                        <img
                            style={{height:"50vh", position:"absolute"}}
                            src="/girl.png"
                        />
                    </div>
            </Container>
            <div><p>OIOI</p></div>
        </div>
      );
    }
  }

  
  export default Teste;
  