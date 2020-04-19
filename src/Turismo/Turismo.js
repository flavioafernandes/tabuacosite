import React, { Component } from 'react';
import './Turismo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, NavDropdown, Nav} from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import history from './../history'
import Button from 'react-bootstrap/Button'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Accordion from 'react-bootstrap/Accordion'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'


class Turismo extends Component {  
      
    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    scrollToTop() {
        scroll.scrollToTop();
    }

    scrollTo() {
        scroller.scrollTo('patrimonio', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        })
    }


    render() {
        return (
            <div id="mainDiv">
                <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                crossorigin="anonymous"
                />
                
                <Navbar style={{backgroundColor: "#111111"}} variant="dark" fixed = "top"  expand="lg">
                    <Navbar.Brand onClick = { () => history.push('/')} style = {{cursor: 'pointer'}}>
                    <img
                        alt=""
                        src="/logopng.png"
                        width="60"
                        height="40"
                        className="d-inline-block align-top"
                    />{' '}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="mr-auto">
                            
                            <Nav.Link id="links" style={{color: "white", fontSize: "20px"}} onClick={()=>this.scrollToTop()}>turismo</Nav.Link>
                            <Nav.Link id="links" style={{color: "white", fontSize: "20px"}}>associações</Nav.Link>
                            <Nav.Link id="links" style={{color: "white", fontSize: "20px"}} onClick={getConcelho}>concelho</Nav.Link>
                            <Nav.Link id="links" style={{color: "white", fontSize: "20px"}} >links e contatos</Nav.Link>
                            <Nav.Link id="links" style={{color: "white", fontSize: "20px"}} onClick={getNews}>notícias</Nav.Link>
                        
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Navbar style={{backgroundColor: "transparent"}} variant="dark"  expand="lg">
                    <Navbar.Brand onClick = { () => history.push('/')} style = {{cursor: 'pointer'}}>
                    
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="mr-auto">
                            
                            <Nav.Link id="links" style={{color: "white", fontSize: "20px"}}></Nav.Link>
                            <Nav.Link id="links" style={{color: "white", fontSize: "20px"}}></Nav.Link>
                            <Nav.Link id="links" style={{color: "white", fontSize: "20px"}} ></Nav.Link>
                            <Nav.Link id="links" style={{color: "white", fontSize: "20px"}} ></Nav.Link>
                            <Nav.Link id="links" style={{color: "white", fontSize: "20px"}}></Nav.Link>
                        
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>


                <div style={{ backgroundColor: '#e9e9e9', display: 'flex', padding: 30, paddingTop: 50 }}>
                    <div><h2 style= {{color: "#111111", textAlign: 'left'}}>Turismo em Tabuaço</h2>
                        <br/>
                        <p style={{textAlign: 'left'}}>Quando chegar a Tabuaço, no jardim central está a Loja Interativa de Turismo, o local ideal para começar a visita a Tabuaço, já que aqui vai conseguir todas as informações que precisa. Se for fora do horário de abertura, tem cá fora, no jardim, o Tomi, um painel tátil onde também consegue várias informações do que pode visitar. Passeie pelo concelho e prove a gastronomia local.</p>
                            <Button variant="dark" href="#patrimonio" style={{marginTop:"10px"}}><Link activeClass="active" className="test6" to="patrimonio" spy={true} smooth={true} duration={500}>Património</Link></Button>{' '}
                            <Button variant="dark" href="#restauracao" style={{marginTop:"10px"}}><Link activeClass="active" className="test6" to="restauracao" spy={true} smooth={true} duration={600}>Restauração</Link></Button>{' '}
                            <Button variant="dark" href="#enoturismo" style={{marginTop:"10px"}}><Link activeClass="active" className="test6" to="enoturismo" spy={true} smooth={true} duration={700}>Enoturismo</Link></Button>{' '}
                            <Button variant="dark" style={{marginTop:"10px"}}><Link activeClass="active" className="test6" to="alojamento" spy={true} smooth={true} duration={800}>Alojamento</Link></Button>{' '}
                    </div>
                </div>

                <div style={{backgroundColor: '#F5F5F5', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                    <div id="patrimonio" style={{backgroundColor: '#F5F5F5', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-around', paddingTop:"20px"}}>
                        
                        <div style={{ backgroundColor: '#111111', display: 'flex', marginTop: 120, position:"relative", width: "100%", height:"10rem" }}>
                            <img
                                id="fundo"
                                src="/quintas/patrimonio.jpg"
                            />
                            <h2 id="texto" style= {{color: "#FFFFFF", textAlign: 'left'}}>Património</h2>
                            <br/>
                            <p id="small" style={{color: "#FFFFFF", textAlign: 'left'}}>Património tabuacense</p>

                        </div>   

                

                    </div>

                    <div id="restauracao" style={{backgroundColor: '#F5F5F5', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-around'}}>

                        <div style={{ backgroundColor: '#111111', display: 'flex', marginTop: 120, position:"relative", width: "100%", height:"10rem" }}>
                            <img
                                id="fundo"
                                src="/quintas/restaurant.jpg"
                            />
                            <h2 id="texto" style= {{color: "#FFFFFF", textAlign: 'left'}}>Restauração</h2>
                            <br/>
                            <p id="small" style={{color: "#FFFFFF", textAlign: 'left'}}>Restauração em Tabuaço</p>

                        </div>          
                    
                    </div>

                    <div id="enoturismo" style={{backgroundColor: '#F5F5F5', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-around'}}>
               
                        <div style={{ backgroundColor: '#111111', display: 'flex', marginTop: 120, position:"relative", width: "100%", height:"10rem" }}>

                                <img
                                    id="fundo"
                                    src="/quintas/vineyard.jpg"
                                />
                                <h2 id="texto" style= {{color: "#FFFFFF", textAlign: 'left'}}>Enoturismo</h2>
                                <br/>
                                <p id="small" style={{color: "#FFFFFF", textAlign: 'left'}}>Quintas e Vinhos</p>
                                
                        </div>

                            <Accordion>
                                <Card id="cardEno">
                                    <Accordion.Toggle id="nomeQuinta"as={Card.Header} eventKey="0">
                                    Quinta do Pégo
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                    
                                        <Card.Body>
                                            <Card.Img id="cardImg" src="/quintas/pego.jpg" />
                                                <div style={{backgroundColor: '#F5F5F5', display: 'flex', flexDirection: 'row', flexWrap: 'no-wrap', justifyContent: 'space-around', padding: 10}}>

                                                    <div style={{backgroundColor: '#F5F5F5', display: 'flex', flexDirection: 'column', flexWrap: 'wrap'}}>

                                                        <p id="textoDesc">A Quinta do Pégo é um Hotel Rural de 4 estrelas integrado numa propriedade vinicola, nas encostas do margem do rio Douro, no coração da região do Vinho do Porto.
                                                        Os hóspedes dispõem de 10 confortáveis quartos, todos com ar condicionado, telefone e TV satélite.
                                                        Um restaurante, bar, piscina exterior com uma soberba panorâmica sobre o vale do rio Douro são alguns estimulos para uma estadia relaxante.</p>
                                                    </div>
                                                    
                                                    <div onClick={()=>window.open("https://quintadopego.com/","_blank")} style={{backgroundColor: '#e9e9e9', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-around', width: '30%', paddingLeft:"1vw", marginLeft: "30px"}}>
                                                        <div style={{backgroundColor: '#e9e9e9', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                                                            <img id="iconsCard" src="/ligacao.png"/>
                                                            <p id="textoIcons">Website</p>
                                                        </div>

                                                        <div onClick={()=>window.open("https://www.google.com/maps/place/Q.ta+do+Pego,+Tabua%C3%A7o/data=!4m2!3m1!1s0xd3b5afd2f32d309:0x231b0b13c48e2c79?sa=X&ved=2ahUKEwjvnr7KmfXoAhVq8OAKHQq-D0cQ8gEwAXoECAsQAQ","_blank")} style={{backgroundColor: '#e9e9e9', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                                                            <img id="iconsCard" src="/destination.png"/>
                                                            <p id="textoIcons">Localização</p>
                                                        </div>

                                                        <div style={{backgroundColor: '#e9e9e9', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                                                            <img id="iconsCard" src="/ligar.png"/>
                                                            <p id="textoIcons">+351 254 730 070</p>
                                                        </div>

                                                    </div>
                                                </div>
                                        </Card.Body>

                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                    
                    </div>

                    <div id="alojamento" style={{backgroundColor: '#F5F5F5', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-around'}}>

                        <div style={{ backgroundColor: '#111111', display: 'flex', marginTop: 120, position:"relative", width: "100%", height:"10rem" }}>
                            <img
                                id="fundo"
                                src="/quintas/room.jpg"
                            />
                            <h2 id="texto" style= {{color: "#FFFFFF", textAlign: 'left'}}>Alojamento</h2>
                            <br/>
                            <p id="small" style={{color: "#FFFFFF", textAlign: 'left'}}>Hotéis e Quintas</p>

                        </div>

                    </div>
                </div>


                {['top'].map((placement) => (
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
                            onClick={()=> this.scrollToTop()}
                        />
                    </OverlayTrigger>{' '}
                    </>
                ))}

                <Navbar style={{backgroundColor: "#111111"}}>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text style={{color: "#ffffff", fontSize: "10px"}}>
                        Developed by: <a onClick={() => window.open("https://www.linkedin.com/in/oflaviofernandes/","_blank")} style={{color: "#e9e9e9", padding: 0, cursor: "pointer", textDecoration: "underline"}}>Flávio Fernandes</a>
                    </Navbar.Text>
                </Navbar.Collapse>
                </Navbar>

            </div>
        );
    }
}

function getNews(e){
    history.push('/News');
}

function getConcelho(e){
    history.push('/About');
}

function getTurismo(e){
    history.push('/Turismo');
}

function mylinkfunction(e) {

    window.location.href="#mainDiv";


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
*/

export default Turismo;