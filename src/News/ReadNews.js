import React, { Component } from 'react';
import {Navbar, NavDropdown, Nav} from 'react-bootstrap';
import './News.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import history from './../history'

class ReadNews extends Component {

render() {
    const title = localStorage.getItem("title");
    const text = localStorage.getItem("text");
    const link = localStorage.getItem("link");
    const date = localStorage.getItem("date");
    console.log(text)

    if(text === null){
        history.push('/News');
        return (<div></div>)
    } else {
        // you can get this cardId anywhere in the component as per your requirement
    return ( 
        <div>

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

            <div style={{ backgroundColor: '#e9e9e9', display: 'flex', padding: 30, paddingTop: 50 }}>
                <div><h2 style= {{color: "#111111", textAlign: 'left'}}>{title}</h2>
                </div>
            </div>


            <div id= "NewsDiv" style={{backgroundColor: '#F5F5F5', display: 'flex', padding: 30}}>

                <Card id="myCard" style={{width: '70rem'}}>
                    <Card.Img id= "imageCardNews" src={link} onClick={() => window.open(link)} alt="Card image" />
                    <Card.Body>
                        <Card.Text>
                            
                            {text.split('#pgf#').map(textLine => (
                                <p id="corpoNoticia">{textLine}</p>
                            ))}

                        </Card.Text>
                        <Card.Text id="dataNoticia">{date}</Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <Navbar style={{backgroundColor: "#111111"}}>
                <Navbar.Collapse className="justify-content-end"> 
                    <Navbar.Text style={{color: "#ffffff", fontSize: "10px"}}>
                        Developed by: <a onClick={() => window.open("https://www.linkedin.com/in/oflaviofernandes/","_blank")} style={{color: "#e9e9e9", padding: 0, cursor: "pointer", textDecoration: "underline"}}>Flávio Fernandes</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>

        </div>
    )
    }
    
  }
}

export default ReadNews;

function getConcelho(e){
    history.push('/About');
}
  
function getNews(e){
    history.push('/News');
}

function getTurismo(e){
    history.push('/Turismo');
}