import React, {Component} from 'react';
import './Main.css';
import sample from './videohd.mp4';
import history from './../history'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, NavDropdown, Nav} from 'react-bootstrap';

export default class Main extends Component {
  render() {
    return (
      <div className="App">

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
                            
                            <Nav.Link id="links" style={{color: "white", fontSize: "20px"}} onClick={getTurismo}>turismo</Nav.Link>
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

        <video id="myVideo" loop autoPlay muted>
          <source src={sample} type="video/mp4" />
      </video>
      
      <div className="content">
          <div id = "textContainer">
            <h1 id="tbcName">Tabuaço</h1>
            <p id="tbcSlogan">O melhor do Douro está aqui!</p>
          </div>
        </div>

          <Navbar style={{backgroundColor: "#111111", height: "15px"}} fixed="bottom">
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text style={{color: "#ffffff", fontSize: "10px", padding: 0}}>
                      Developed by: <a onClick={() => window.open("https://www.linkedin.com/in/oflaviofernandes/","_blank")} style={{color: "#e9e9e9", padding: 0, cursor: "pointer", textDecoration: "underline"}}>Flávio Fernandes</a>
                    </Navbar.Text>
                </Navbar.Collapse>
          </Navbar>
      </div>
    );
  }
}

function getConcelho(e){
  history.push('/About');
}

function getNews(e){
  history.push('/News');
}

function getTurismo(e){
  history.push('/Turismo');
}
/*function getMore(e){
  history.push('/About');
}

<img id="btnIn" src={require('./more.png')} onClick={getMore} />   

*/

