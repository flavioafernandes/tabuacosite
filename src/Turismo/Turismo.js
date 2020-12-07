import React, { Component } from "react";
import "./Turismo.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import history from "./../history";
import Button from "react-bootstrap/Button";
import { Link, animateScroll as scroll, scroller } from "react-scroll";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import infoTurismo from "./data.json";
import infoRestaurantes from "./restaurants.json";
import infoHotel from "./hotels.json";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Carousel, { consts } from "react-elastic-carousel";
import Popover from "react-bootstrap/Popover";
import Leaflet from 'leaflet';
import { Map, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet';
import { markers, mapConfig } from './utils';
import 'leaflet/dist/leaflet.css';

Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 4 },
];

class Turismo extends Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  myArrow({ type, onClick }) {
    const pointer =
      type === consts.PREV ? (
        <img id="setas" src="/left-arrow.png" />
      ) : (
        <img id="setas" src="/right-arrow.png" />
      );
    return (
      <Button
        id="setasBtn"
        class="btn btn-primary shadow-none"
        variant="link"
        onClick={onClick}
      >
        {pointer}
      </Button>
    );
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollTo() {
    scroller.scrollTo("patrimonio", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }

  render() {

    return (
      
      <div id="mainDiv">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
        <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" />
        <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        

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
                onClick={() => this.scrollToTop()}
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
              Turismo em Tabuaço
            </h2>
            <br />
            <p style={{ textAlign: "left" }}>
              Quando chegar a Tabuaço, no jardim central está a Loja Interativa
              de Turismo, o local ideal para começar a visita a Tabuaço, já que
              aqui vai conseguir todas as informações que precisa. Se for fora
              do horário de abertura, tem cá fora, no jardim, o Tomi, um painel
              tátil onde também consegue várias informações do que pode visitar.
              Passeie pelo concelho e prove a gastronomia local.
            </p>
            <Button
              variant="dark"
              href="#patrimonio"
              style={{ marginTop: "10px" }}
            >
              <Link
                activeClass="active"
                className="test6"
                to="patrimonio"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                Passear por Tabuaço
              </Link>
            </Button>{" "}
            <Button
              variant="dark"
              href="#restauracao"
              style={{ marginTop: "10px" }}
            >
              <Link
                activeClass="active"
                className="test6"
                to="restauracao"
                spy={true}
                smooth={true}
                duration={600}
                offset={-100}
              >
                Restauração
              </Link>
            </Button>{" "}
            <Button
              variant="dark"
              href="#enoturismo"
              style={{ marginTop: "10px" }}
            >
              <Link
                activeClass="active"
                className="test6"
                to="enoturismo"
                spy={true}
                smooth={true}
                duration={700}
                offset={-100}
              >
                Enoturismo
              </Link>
            </Button>{" "}
            <Button variant="dark" style={{ marginTop: "10px" }}>
              <Link
                activeClass="active"
                className="test6"
                to="alojamento"
                spy={true}
                smooth={true}
                duration={800}
                offset={-100}
              >
                Alojamento
              </Link>
            </Button>{" "}
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#F5F5F5",
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          <div
            id="patrimonio"
            style={{
              backgroundColor: "#F5F5F5",
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "space-around",
              paddingBottom: "50px",
            }}
          >
            <div
              style={{
                backgroundColor: "#111111",
                display: "flex",
                position: "relative",
                width: "100%",
                height: "10rem",
              }}
            >
              <img id="fundo" src="/quintas/patrimonio.jpg" />
              <h2 id="texto" style={{ color: "#FFFFFF", textAlign: "left" }}>
                Passear por Tabuaço
              </h2>
              <br />
              <p id="small" style={{ color: "#FFFFFF", textAlign: "left" }}>
                Roteiros, património e locais a visitar
              </p>
            </div>

                <div className="map">
                  <Map center={mapConfig.center} zoom={mapConfig.zoom} className="map__reactleaflet">
                    <TileLayer
                      url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
                    />

                {/*
                DEFAULT
                <TileLayer
                  url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
                />

                PRETO
                 <TileLayer
                  url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
                  attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                />
                */}

                {markers.map(marker => (
                  <Marker position={marker.latlng} key={`marker_${marker.name}`}>
                    <Popup>
                      <span>{marker.name}</span>
                    </Popup>
                  </Marker>
                ))}
    
              </Map>
            </div>

            <p>
                <a onClick={()=> {window.open("https://www.cm-tabuaco.pt/download.php?info=YTozOntzOjU6ImFjY2FvIjtzOjg6ImRvd25sb2FkIjtzOjg6ImZpY2hlaXJvIjtzOjM5OiJtZWRpYS9maWNoZWlyb3Mvb2JqZWN0b19vbmxpbmUvMTA4MC5wZGYiO3M6NjoidGl0dWxvIjtzOjIwOiJNaW5pK0d1aWRlK1RhYnVhJUU3byI7fQ==","_blank")}} id="download" class="btn btn-store">
                    <span class="fa fa-3x pull-left">
                    <div className="card1">
                        <img src="/download.png" className="img-top0" alt="Card Back"/>
                          <img src="/download_branco.png" className="img-top1" alt="Card Front"/>
                      </div>  
                    </span> 
                    <span class="btn-label">Download do roteiro pelo</span>
                    <span class="btn-caption">Concelho</span>
                </a>
            
                <a  onClick={()=> {window.open("https://www.cm-tabuaco.pt/download.php?info=YTozOntzOjU6ImFjY2FvIjtzOjg6ImRvd25sb2FkIjtzOjg6ImZpY2hlaXJvIjtzOjM5OiJtZWRpYS9maWNoZWlyb3Mvb2JqZWN0b19vbmxpbmUvMTA4MS5wZGYiO3M6NjoidGl0dWxvIjtzOjE3OiJSb3RlaXJvK1RhYnVhJUU3byI7fQ==","_blank")}} id="download" class="btn btn-store">
                    <span class="fa fa-3x pull-left">
                        <div className="card1">
                        <img src="/download.png" className="img-top0" alt="Card Back"/>
                          <img src="/download_branco.png" className="img-top1" alt="Card Front"/>
                      </div>
                    </span> 
                    <span class="btn-label">Download do roteiro pela</span>
                    <span class="btn-caption">Vila</span>
                </a>

                <a id="download" onClick={()=>{window.open("https://play.google.com/store/apps/details?id=com.tomigo.tabuaco&hl=pt_PT","_blank")}} class="btn btn-store">
                    <span class="fa fa-3x pull-left">
                    <div className="card1">
                          <img src="/play-store.png" className="img-top0" alt="Card Back"/>
                          <img src="/play-store_branco.png" className="img-top1" alt="Card Front"/>
                      </div>
                    </span> 
                    <span class="btn-label">Download da app TOMI na</span>
                    <span class="btn-caption">Google Play</span>
                </a>

                <a id="download" onClick={()=>{window.open("https://apps.apple.com/pt/app/tpnp-tomi-go-tabua%C3%A7o/id1049244023","_blank")}} class="btn btn-store">
                    <span class="fa fa-3x pull-left">
                    <div className="card1">
                          <img src="/app-store.png" className="img-top0" alt="Card Back"/>
                          <img src="/app-store_branco.png" className="img-top1" alt="Card Front"/>
                      </div>
                    </span> 
                    <span class="btn-label">Download da app TOMI na</span>
                    <span class="btn-caption">Apple Store</span>
                </a>

            </p>

            
          </div>

          <div
            id="restauracao"
            style={{
              backgroundColor: "#F5F5F5",
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                backgroundColor: "#111111",
                display: "flex",
                position: "relative",
                width: "100%",
                height: "10rem",
              }}
            >
              <img id="fundo" src="/quintas/restaurant.jpg" />
              <h2 id="texto" style={{ color: "#FFFFFF", textAlign: "left" }}>
                Restauração
              </h2>
              <br />
              <p id="small" style={{ color: "#FFFFFF", textAlign: "left" }}>
                Restauração em Tabuaço
              </p>
            </div>

            <Carousel
              renderArrow={this.myArrow}
              breakPoints={breakPoints}
              itemsToShow={3}
              style={{ marginTop: 75, paddingBottom: 50 }}
            >
              {infoRestaurantes.map((data) => (
                <div>
                  <Card id="myCard" style={{ width: "18rem", height: "33rem" }}>
                    {data.image && (
                      <Card.Img id="cardImage" variant="top" src={data.image} />
                    )}
                    <Card.Body>
                      <Card.Title>{data.restaurante}</Card.Title>
                      <Card.Text>{data.pratos}</Card.Text>
            
                
                    </Card.Body>
                    {data.maps != "" && (
                      <ListGroup.Item style={{background: "transparent", border: "none"}}>
                        <img
                          id="iconsCard"
                          alt=""
                          src="/destination.png"
                          width="30"
                          height="30"
                          className="d-inline-block align-top"
                          onClick={() => window.open(data.maps, "_blank")}
                        /></ListGroup.Item>)}
                    {data.phone != "" && (
                      <ListGroup.Item id="listItem">
                        {data.phone}
                      </ListGroup.Item>
                    )}
                  </Card>
                </div>
              ))}
            </Carousel>
          </div>

          <div
            id="enoturismo"
            style={{
              backgroundColor: "#F5F5F5",
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                backgroundColor: "#111111",
                display: "flex",
                position: "relative",
                width: "100%",
                height: "10rem",
              }}
            >
              <img id="fundo" src="/quintas/vineyard.jpg" />
              <h2 id="texto" style={{ color: "#FFFFFF", textAlign: "left" }}>
                Enoturismo
              </h2>
              <br />
              <p id="small" style={{ color: "#FFFFFF", textAlign: "left" }}>
                Quintas e Produtores Vinícolas
              </p>
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
              <Carousel
                renderArrow={this.myArrow}
                breakPoints={breakPoints}
                itemsToShow={3}
                style={{ marginTop: 75, paddingBottom: 50 }}
              >
                {infoTurismo.map((data) => (
                  <div>
                    <Card
                      id="myCard"
                      style={{ width: "18rem", height: "28rem" }}
                    >
                      {data.image && (
                        <Card.Img
                          id="cardImage"
                          variant="top"
                          src={data.image}
                        />
                      )}
                      <Card.Body>
                        <Card.Title>{data.quinta}</Card.Title>

                        {data.maps != "" && (
                          <img
                            id="iconsCard"
                            alt=""
                            src="/destination.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            onClick={() => window.open(data.maps, "_blank")}
                          />
                        )}

                        {data.site != "" && (
                          <img
                            id="iconsCard"
                            alt=""
                            src="/web.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            onClick={() => window.open(data.site, "_blank")}
                          />
                        )}
                      </Card.Body>
                      {data.phone != "" && (
                        <ListGroup.Item id="listItem">
                          {data.phone}
                        </ListGroup.Item>
                      )}
                    </Card>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>

          <div
            id="alojamento"
            style={{
              backgroundColor: "#F5F5F5",
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                backgroundColor: "#111111",
                display: "flex",
                position: "relative",
                width: "100%",
                height: "10rem",
              }}
            >
              <img id="fundo" src="/quintas/room.jpg" />
              <h2 id="texto" style={{ color: "#FFFFFF", textAlign: "left" }}>
                Alojamento
              </h2>
              <br />
              <p id="small" style={{ color: "#FFFFFF", textAlign: "left" }}>
                Hotéis e Quintas
              </p>
            </div>
            <Carousel
              renderArrow={this.myArrow}
              breakPoints={breakPoints}
              itemsToShow={3}
              style={{ marginTop: 75, marginBottom: 50, paddingBottom: 50 }}
            >
              {infoHotel.map((data) => (
                <div>
                  <Card id="myCard" style={{ width: "18rem", height: "29rem" }}>
                    {data.image && (
                      <Card.Img id="cardImage" variant="top" src={data.image} />
                    )}
                    <Card.Body>
                      <Card.Title>{data.hotel}</Card.Title>
                      
                      <div>
                        {data.wifi != "0" && <img id="cardHotelIcon" alt="WiFi" title="Wifi" src="/wi-fi.png" width="20" height="20" className="d-inline-block align-top"/>}
                        {data.air != "0" && <img id="cardHotelIcon" alt="Air" title="Ar Condicionado / Aquecimento" src="/ar-condicionado.png" width="20" height="20" className="d-inline-block align-top"/>}
                        {data.piscina != "0" && <img id="cardHotelIcon" alt="Piscina" title="Piscina" src="/piscina.png" width="20" height="20" className="d-inline-block align-top"/>}
                        {data.parque != "0" && <img id="cardHotelIcon" alt="Estacionamento" title="Estacionamento" src="estacionamento.png" width="20" height="20" className="d-inline-block align-top"/>}
                        {data.restaurante != "0" && <img id="cardHotelIcon" alt="Restaurante" title="Restaurante" src="/garfo.png" width="20" height="20" className="d-inline-block align-top"/>}
                        {data.wine != "0" && <img id="cardHotelIcon" alt="prova" title="Prova de Vinhos" src="/vinho.png" width="20" height="20" className="d-inline-block align-top"/>}
                      </div>


                      {data.maps != "" && (
                          <img
                            id="iconsCard"
                            alt=""
                            src="/destination.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            onClick={() => window.open(data.maps, "_blank")}
                          />
                        )}

                        {data.site != "" && (
                          <img
                            id="iconsCard"
                            alt=""
                            src="/web.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            onClick={() => window.open(data.site, "_blank")}
                          />
                        )}
            
                
                    </Card.Body>

                    {data.phone != "" && (
                      <ListGroup.Item id="listItem">
                        {data.phone}
                      </ListGroup.Item>
                    )}
                  </Card>
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        {["top"].map((placement) => (
          <>
            <OverlayTrigger
              key={placement}
              placement={placement}
              overlay={
                <Tooltip id={`tooltip-${placement}`}>
                  Voltar ao <strong>topo</strong>
                </Tooltip>
              }
            >
              <img
                id="voltar"
                src="/voltar2.png"
                title="Ir para o topo"
                onClick={() => this.scrollToTop()}
              />
            </OverlayTrigger>{" "}
          </>
        ))}

        <Navbar style={{ backgroundColor: "#111111" }}>
          <Navbar.Collapse>
            {["top"].map((placement) => (
              <>
                <OverlayTrigger
                  trigger="click"
                  key={placement}
                  placement={placement}
                  overlay={
                    <Popover id={`popover-positioned-${placement}`}>
                      <Popover.Title as="h3">
                        Utilização de Imagens
                      </Popover.Title>
                      <Popover.Content>
                        Se usei alguma foto sua e a quer ver{" "}
                        <strong>removida</strong> contacte-me através de{" "}
                        <strong>flavio98.fernandes@gmail.com</strong>.
                        <br/>
                        Qualquer sugestão ou gralha encontrada pode ser enviada para o mesmo contacto.
                      </Popover.Content>
                    </Popover>
                  }
                >
                  <img
                    alt=""
                    src="/info.ico"
                    width="20"
                    height="20"
                    alignItems="right"
                  />
                </OverlayTrigger>{" "}
              </>
            ))}
          </Navbar.Collapse>
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




    <Navbar style={{backgroundColor: "#111111"}} fixed = "top">
                    <Navbar.Brand onClick = { () => history.push('/')} style = {{cursor: 'pointer'}}>
                    <img
                        alt=""
                        src="/logopng.png"
                        width="60"
                        height="40"
                        className="d-inline-block align-top"
                    />{' '}
                    </Navbar.Brand>

                    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                        
                        <Nav.Link id="links" href="#mainDiv">turismo</Nav.Link>
                        <Nav.Link id="links">associações</Nav.Link>
                        <Nav.Link id="links" onClick={getConcelho}>concelho</Nav.Link>
                        <Nav.Link id="links">links e contatos</Nav.Link>
                        <Nav.Link id="links" onClick={getNews}>notícias</Nav.Link>
                    </div>
            

                </Navbar>

                <Navbar style={{backgroundColor: "#111111"}}>
                    <Navbar.Brand onClick = { () => history.push('/')} style = {{cursor: 'pointer'}}>
                    <img
                        alt=""
                        src="/logopng.png"
                        width="60"
                        height="40"
                        className="d-inline-block align-top"
                    />{' '}
                    </Navbar.Brand>

                    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                      <Nav.Link id="links" onClick={getTurismo}>turismo</Nav.Link>
                      <Nav.Link id="links">associações</Nav.Link>
                      <Nav.Link id="links" onClick={getConcelho}>concelho</Nav.Link>
                      <Nav.Link id="links">links e contatos</Nav.Link>
                      <Nav.Link id="links" onClick={getNews}>notícias</Nav.Link>
                    </div>
            

                </Navbar>





                <Card id="myCard" style={{ width: '20rem' }}>
                                <Card.Img id="cardImage" variant="top" src={data.image} />
                                <Card.Body>
                                  <Card.Title>{data.quinta}</Card.Title>
                                  <img
                                    id="localImg"
                                    alt=""
                                    src="/destination.png"
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                    onClick = {() => window.open(data.maps, "_blank")}
                                />
            
                                <img
                                    id="localImg"
                                    alt=""
                                    src="/ligacao.png"
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                    onClick = {() => window.open(data.site, "_blank")}
                                />

                                </Card.Body>
                              </Card>
*/

export default Turismo;
