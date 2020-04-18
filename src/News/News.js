import React, {Component} from 'react';
import history from './../history'
import firebase from './firebase'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, NavDropdown, Nav} from 'react-bootstrap';
import './News.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


function News(){

    const [news, setNews] = React.useState([])

    React.useEffect( () => {
        const fetchData = async () => {
            const db = firebase.firestore()
            const data = await db.collection("news").get()
            setNews(data.docs.map(doc => doc.data()))   
        }
        fetchData()
    }, [])

    return (
        <div style={{backgroundColor: '#F5F5F5'}}>
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
                    <div><h2 style= {{color: "#111111", textAlign: 'left'}}>Notícias</h2>
                     </div>
                </div>


                <div>
                    {news.map(newsSingle => (
                        <div key= {newsSingle.id} style={{backgroundColor: '#F5F5F5', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', padding: '20px'}}>
                            <Card className="bg-dark text-white" style={{width: '50rem'}}>
                                <Card.Img src={newsSingle.link}/>
                                <Card.ImgOverlay id="newsCard" onClick={() => goToCarddetails(newsSingle)}>
                                    <Card.Title>{newsSingle.title}</Card.Title>
                                    <Button variant="primary" id="brk-btn" onClick={() => goToCarddetails(newsSingle)}>ler mais</Button>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    ))}

                </div>

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

export default News;

function getConcelho(e){
    history.push('/About');
}
  
function getNews(e){
    history.push('/News');
}

function getTurismo(e){
    history.push('/Turismo');
}

function goToCarddetails(newsSingleCard){
    localStorage.setItem("title", newsSingleCard.title);
    localStorage.setItem("text", newsSingleCard.corpo);
    localStorage.setItem("date", newsSingleCard.timestamp);
    localStorage.setItem("link", newsSingleCard.link);
    history.push('/ReadNews');

}