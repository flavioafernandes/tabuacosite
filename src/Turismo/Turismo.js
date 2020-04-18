import React, { Component } from 'react';
import './Turismo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, NavDropdown, Nav} from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import history from './../history'
import Button from 'react-bootstrap/Button'


class Turismo extends Component {  
      


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
                            
                            <Nav.Link id="links" style={{color: "white", fontSize: "20px"}} href="#mainDiv">turismo</Nav.Link>
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
                            <Button variant="dark" href="#patrimonio" style={{marginTop:"10px"}}>Património</Button>{' '}
                            <Button variant="dark" href="#restauracao" style={{marginTop:"10px"}}>Restauração</Button>{' '}
                            <Button variant="dark" href="#enoturismo" style={{marginTop:"10px"}}> Enoturismo</Button>{' '}
                            <Button variant="dark" href="#alojamento" style={{marginTop:"10px"}}>Alojamento</Button>{' '}
                    </div>
                </div>

                <div style={{backgroundColor: '#F5F5F5', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                    <div id="patrimonio" style={{backgroundColor: '#F5F5F5', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-around', paddingTop:"20px"}}>
                        <div style={{ backgroundColor: '#e9e9e9', display: 'flex', padding: 30, marginTop: 120 }}>
                            <div><h2 style= {{color: "#111111", textAlign: 'left'}}>Património</h2>
                                <br/>
                                <p style={{textAlign: 'left'}}> Patrimonio Tabuacense</p>

                                </div>
                        </div>

                

                    </div>

                    <div id="restauracao" style={{backgroundColor: '#F5F5F5', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                        <div style={{ backgroundColor: '#e9e9e9', display: 'flex', padding: 30, marginTop: 120 }}>
                            <div><h2 style= {{color: "#111111", textAlign: 'left'}}>Restauração</h2>
                                <br/>
                                <p style={{textAlign: 'left'}}> Restauração em Tabuaço</p>

                            </div>
                        </div>

                        
                    
                    </div>

                    <div id="enoturismo" style={{backgroundColor: '#F5F5F5', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-around'}}>
               
                        <div style={{ backgroundColor: '#e9e9e9', display: 'flex', padding: 30, marginTop: 120 }}>
                                <div><h2 style= {{color: "#111111", textAlign: 'left'}}>Enoturismo</h2>
                                    <br/>
                                    <p style={{textAlign: 'left'}}> Quintas e Vinhos</p>

                                </div>
                        </div>
                    
                    </div>

                    <div id="alojamento" style={{backgroundColor: '#F5F5F5', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-around'}}>

                        <div style={{ backgroundColor: '#e9e9e9', display: 'flex', padding: 30, marginTop: 120 }}>
                            <div><h2 style= {{color: "#111111", textAlign: 'left'}}>Alojamento</h2>
                                <br/>
                                <p style={{textAlign: 'left'}}> Quintas e Hoteis</p>

                                </div>
                        </div>

                    </div>
                </div>


                <img
                    id="voltar"
                    src="/voltar.png"
                    onClick={()=> mylinkfunction()}
                />

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