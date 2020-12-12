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
          <Card id="myCard" style={{ width: "30rem" }}>
            <Card.Img variant="top" src="/adorigo.png" />
            <Card.Body>
              <Card.Title>Adorigo</Card.Title>

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

              <Card.Text>
                Adorigo é uma das freguesias abrigadas e temperadas dos Vales do
                Douro com quintas que há séculos produzem o singular Vinho do
                Porto. Com paisagens inigualáveis, esta freguesia é um ponto de
                observação privilegiado sobre o Rio Douro. Além de Adorigo, esta
                freguesia conta ainda com um outro miradouro, S. Martinho, onde
                se pode visitar a capela do santo homónimo. Com uma conhecida
                ligação ao vinho generoso e ao Douro Vinhateiro, esta terra é
                também rica em quintas de produção. Assim, salientamos as
                quintas de S. Luiz, do Vidiedo, de Santo António, do Espinho e
                de Santa Eufémia.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card id="myCard" style={{ width: "30rem" }}>
            <Card.Img variant="top" src="/arcos.jpg" />
            <Card.Body>
              <Card.Title>Arcos</Card.Title>

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

              <Card.Text>
                A freguesia foi sede de concelho até 1834, passando a ser, a
                partir daquela data, e até 1862, parte do município de Moimenta
                da Beira. Em 1872, mais precisamente a 10 Fevereiro, Arcos
                passou a integrar o concelho de Tabuaço. Como sinais da antiga
                autonomia municipal de Arcos, persistem ainda o quinhentista
                Pelourinho de Arcos, classificado como Imóvel de Interesse
                Público, bem como os antigos edifícios do Tribunal e da Cadeia,
                embora algo descaracterizados. 
              </Card.Text>
            </Card.Body>
          </Card>

          <Card id="myCard" style={{ width: "30rem" }}>
            <Card.Img variant="top" src="/balsa.jpg" />
            <Card.Body>
              <Card.Title>Balsa</Card.Title>

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
              <Card.Text>Pertence à freguesia da Desejosa</Card.Text>
            </Card.Body>
          </Card>

          <Card id="myCard" style={{ width: "30rem" }}>
            <Card.Img variant="top" src="/barcos.png" />
            <Card.Body>
              <Card.Title>Barcos</Card.Title>

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
              <Card.Text>
                Foi sede de concelho, entre 1263 e 1855, integrando as
                freguesias de Adorigo, Barcos, Santa Leocádia e Santo Adrião.
                Com a chegada das reformas administrativas do liberalismo,
                acabaram por ser integrar também no município as freguesias de
                Folgosa, Vila Seca, pinheiros e vale de Figueira. Não se fala da
                Freguesia de Barcos sem falar do Santuário de Santa Maria do
                Sabroso e da Igreja Matriz. Importantes marcos no património
                arquitectónico e religioso do concelho. Mas outros exemplos
                arquitectónicos podem ser visitados nesta freguesia: a Casa da
                Roda e palacetes de famílias influentes da freguesia são dignos
                de apreciação.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card id="myCard" style={{ width: "30rem" }}>
            <Card.Img variant="top" src="/cabriz.jpg" />
            <Card.Body>
              <Card.Title>Cabriz</Card.Title>

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
              <Card.Text>
                Cabriz é uma aldeia pertencente à freguesia de Sendim, concelho
                de Tabuaço, no distrito de Viseu. A maioria da população é
                idosa, dedicando-se maioritariamente à agricultura. A festa que
                se realiza na aldeia de Cabriz é a 22 de julho em honra da Santa
                Maria Madalena.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card id="myCard" style={{ width: "30rem" }}>
            <Card.Img variant="top" src="/carrazedo.png" />
            <Card.Body>
              <Card.Title>Carrazedo</Card.Title>

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
              <Card.Text>
                Lugar pertencente à União de freguesisas de Pinheriros e Vale de
                Figueira
              </Card.Text>
            </Card.Body>
          </Card>

          <Card id="myCard" style={{ width: "30rem" }}>
            <Card.Img variant="top" src="/chavaes.jpg" />
            <Card.Body>
              <Card.Title>Chavães</Card.Title>

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
              <Card.Text>
                É, ainda nos dias de hoje, e como a grande maioria das
                freguesias do concelho, uma freguesia rural, dedicada
                essencialmente ao cultivo da batata e do cereal e à produção da
                castanha. A emigração também caracteriza esta população. Para
                além do pelourinho, datado do séc. XVII, pouco mais resta dos
                vestígios da antiguidade. Teve cadeia, transformada em casa de
                habitação, e, segundo os mais antigos, terá existido aqui um
                hospital, mas nada há a comprova-lo. A freguesia de Chavães
                recebeu, em 1265, foral, assinado pelos Azevedos, senhores da
                Baião, e confirmado por D. Afonso III. O cancioneiro é mantido
                até hoje através do Rancho Folclórico de Chavães.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card id="myCard" style={{ width: "30rem" }}>
            <Card.Img variant="top" src="/desejosa.jpg" />
            <Card.Body>
              <Card.Title>Desejosa</Card.Title>

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
              <Card.Text>
                A freguesia de Desejosa é composta por duas povoações Desejosa e
                balsa do Douro. Recebeu foral em 1514. As gentes desta terra
                falam essencialmente de trabalho, das vindimas e das encostas
                onde se produz um excelente vinho. O património remete-nos,
                essencialmente, para a capela de Santa Bárbara e para a igreja
                matriz, construída no séc. XIV, caracteristicamente de
                arquitectura religiosa, maneirista e barroca. Além deste
                património, a freguesia da Desejosa é rica pela sua paisagem
                tipicamente duriense
              </Card.Text>
            </Card.Body>
          </Card>

          <Card id="myCard" style={{ width: "30rem" }}>
            <Card.Img variant="top" src="/granjadotedo.jpg" />
            <Card.Body>
              <Card.Title>Granja do Tedo</Card.Title>

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
              <Card.Text>
                A fundação da povoação de Granja do Tedo encontra-se envolta em
                lendas que se cruzam com factos históricos, sendo difícil
                distinguir a realidade. É uma freguesia rica em História e
                património cultural. Os vestígios arqueológicos remetem-nos para
                o período romano. É o caso da estrada romana que liga esta
                freguesia a Longa e a Leomil e das pontes que atravessam o Rio
                Tedo e o Tedinho. Facto curioso, que ainda hoje a população
                evita lembrar, é o fenómeno da Arca da Aliança, uma seita
                religiosa que Maria Coroada estabeleceu no local na segunda
                metade do séc. XIX e que deu origem ao chamado Cisma da Granja
                do Tedo.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card id="myCard" style={{ width: "30rem" }}>
            <Card.Img variant="top" src="/granjinha.jpg" />
            <Card.Body>
              <Card.Title>Granjinha</Card.Title>

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
              <Card.Text>
                É uma terra pequena mas cheia de História. Falar na Granjinha
                remete-nos, quase automaticamente, para a Igreja de S. Pedro das
                Águias, construída, segundo a tradição oral, no séc. X pelos
                irmãos D. Tedon e D. Rausendo. No séc. XII aparece referenciada
                como pertença da Ordem de Cister. A principal característica
                deste edifício, é ter a fachada principal a cerca de 1m distante
                de uma majestosa escarpa rochosa e uma ornamentação figurativa e
                simbólica com uma elaborada combinação de motivos geométricos,
                fitomórficos, zoomórficos e antropomórficos, a que se junta um
                Agnus Dei e uma Croix Nouée.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card id="myCard" style={{ width: "30rem" }}>
            <Card.Img variant="top" src="/guedieiros.jpg" />
            <Card.Body>
              <Card.Title>Guedieiros</Card.Title>

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
              <Card.Text>Pertence à freguesia de Sendim</Card.Text>
            </Card.Body>
          </Card>

          <Card id="myCard" style={{ width: "30rem" }}>
            <Card.Img variant="top" src="/longa.jpg" />
            <Card.Body>
              <Card.Title>Longa</Card.Title>

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
              <Card.Text>
                Foi sede de concelho até 1836, quando foi integrada no município
                de São Cosmado. Era constituído apenas por uma freguesia e
                tinha, em 1801, 493 habitantes. Em 24 de Outubro de 1855, com a
                extinção do concelho de São Cosmado, a freguesia passou para o
                concelho de Tabuaço. A freguesia é rica em belos solares e
                nobres casas caracteristicamente quinhentistas, seiscentistas e
                oitocentistas. Abastada também em arquitectura religiosa, não
                podemos deixar de referir, também na freguesia, a Citânia de
                Longa, um marco histórico-cultural datado da Idade do Bronze
                (1200 - 700 a.C.).
              </Card.Text>
            </Card.Body>
          </Card>

          <Card id="myCard" style={{ width: "30rem" }}>
            <Card.Img variant="top" src="/paradela.jpg" />
            <Card.Body>
              <Card.Title>Paradela</Card.Title>

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
              <Card.Text>
                Foi sede de concelho até ao século XIX, sendo conhecido pelo
                nome alternativo de São Pedro de Águias, por ali se encontrar um
                mosteiro com essa invocação. Era constituído por duas
                freguesias: Paradela e São Pedro de Águias. O concelho de
                Paradela foi extinto em 6 de Novembro de 1836, transitando a
                freguesia para o concelho de Tabuaço. Paradela guarda um
                conjunto patrimonial interessante. Na área da arqueologia, é
                possível referir as Gravuras rupestres da Eira do Monte 1, o
                Povoado da Idade do Ferro de S. Mamede, a famosa Pedra do
                Cavalo, o Casal romano da Eira do Monte 2, um Lagar
                romano/medieval, sito na Eira do Monte, as Gravuras de Eira do
                Monte 3 e os Marcos delimitadores do padroado que a Universidade
                de Coimbra detinha sobre a paróquia.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card id="myCard" style={{ width: "30rem" }}>
            <Card.Img variant="top" src="/pereiro.jpg" />
            <Card.Body>
              <Card.Title>Pereiro</Card.Title>

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
              <Card.Text>
                A freguesia de Pereiro, como a grande maioria do concelho de
                Tabuaço, é rica em património histórico, cultural, paisagístico
                e arquitectónico. Falar com as suas gentes é entrar num universo
                de conhecimento, muito deste confunde a realidade com a fantasia
                e o imaginário. A igreja Matriz, de invocação a S. Sebastião, é
                tipicamente maneirista e foi construída no séc. XVII.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card id="myCard" style={{ width: "30rem" }}>
            <Card.Img variant="top" src="/pinheiros.jpg" />
            <Card.Body>
              <Card.Title>Pinheiros</Card.Title>

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
              <Card.Text>
                Foi vila e sede de concelho até ao século XIX. Como concelho,
                era constituído apenas pela freguesia da sede. Aquando da
                supressão foi anexo ao também já extinto concelho de Barcos. De
                entre um vasto número de interesses culturais saliente-se, da
                época pré-histórica, as pinturas rupestres do Cabeço das Pombas,
                actualmente transformado num bonito jardim. Pinheiros tem no seu
                cenário cultural uma das mais antigas romarias que todos os
                anos, em Setembro, tráz a esta aldeia muitos romeiros e
                festeiros – a Romaria a S. Eufémia.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card id="myCard" style={{ width: "30rem", marginRight: "3vw" }}>
            <Card.Img variant="top" src="/santaleocadia.jpg" />
            <Card.Body>
              <Card.Title>Santa Leocádia</Card.Title>

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
              <Card.Text>
                Trata-se de uma freguesia onde é significativa a cultura do
                azeite e onde, desde épocas recuadas, a população se dedica à
                agricultura e à produção vinícola. A igreja matriz de Santa
                Leocádia, construída no séc. XVII, é um dos monumentos do
                concelho de Tabuaço mais dignos de visita. De estilo tipicamente
                barroco nacional, pode apreciar-se no seu interior os caixotões
                pintados que representam a vida dos santos.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card id="myCard" style={{ width: "30rem" }}>
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

          <Card id="myCard" style={{ width: "30rem" }}>
            <Card.Img variant="top" src="/sendim.jpg" />
            <Card.Body>
              <Card.Title>Sendim</Card.Title>

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
              <Card.Text>
                Foi vila e sede de concelho entre 1250 e 1836. Era constituído
                apenas pela freguesia da sede e tinha, no início do séc. XIX,
                1156 habitantes. Voltou a adquirir a categoria de Vila a 12 de
                Julho de 2001. Do tempo das invasões romanas, ficou-nos nesta
                Vila a Via Romana de Vale de Vila, vários lagares escavados na
                rocha, que provam a ancestralidade da produção de azeite na
                região, e um pequeno santuário rupestre, o Altar de S. João. A
                igreja matriz data do sec. XVII e é de arquitectura tipicamente
                maneirista e barroca.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card id="myCard" style={{ width: "30rem" }}>
            <Card.Img variant="top" src="/tabuaco.jpg" />
            <Card.Body>
              <Card.Title>Tabuaço</Card.Title>

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
              <Card.Text>
                É sede do município, dividido em 17 freguesias. Pertence ao
                distrito de Viseu e está incluído na região Norte e sub-região
                do Douro. Como concelho está limitado a norte pelo município de
                Sabrosa, a leste por S. João da Pesqueira, a sueste por
                Sernancelhe, a sudoeste por Moimenta da Beira e a oeste por
                Armamar. É um concelho extremamente interessante a vários
                níveis: tem paisagens únicas, caracteristicamente durienses, tem
                um considerável património arquitectónico e as suas tradições
                estão, até aos nossos dias, muito vincadas na vivência dos seus
                habitantes. As lendas confundem os nossos sentidos e
                transportam-nos para a magia dos seus intervenientes – mouras
                encantadas, tesouros escondidos e todo um conjunto de histórias
                e mitos vivem até aos dias de hoje nas nossas populações.
                Tabuaço é terra de vinho, de azeite, de uma gastronomia
                inconfundível, apresentando alguns pratos singulares, como o
                javali. A hospitalidade do seu povo é notória e em cada casa, em
                cada mesa, um visitante é um amigo.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card id="myCard" style={{ width: "30rem" }}>
            <Card.Img variant="top" src="/tavora.jpg" />
            <Card.Body>
              <Card.Title>Távora</Card.Title>

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
              <Card.Text>
                Esta é, pela sua História, uma das freguesias mais emblemáticas
                do concelho de Tabuaço. Foi vila e sede de concelho até ao séc.
                XIX. A sua História está intimamente ligada aos Távoras e à
                Quinta do Convento de S. Pedro das Águias, hoje uma quinta
                particular produtora de vinho. De Távora são também famosas as
                cerejas, produzidas em quantidade e de excelente qualidade sendo
                a sua produção uma das actividades essenciais na freguesia.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card id="myCard" style={{ width: "30rem" }}>
            <Card.Img variant="top" src="/valedefigueira.jpg" />
            <Card.Body>
              <Card.Title>Vale de Figueira</Card.Title>

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
              <Card.Text>
                Enquanto aldeia, extremamente acolhedora e com traços beirãos,
                já existia no séc. XIII. Encontra-se rodeada por belos campos
                onde se cultiva o centeio, lavram-se as hortas e apanha-se a
                baga do sabugueiro. Diversas figueiras, que justamente
                emprestaram o nome à povoação, ladeiam os caminhos. Para os
                apreciadores da arqueologia portuguesa, é interessante notar que
                alguns tesouros arqueológicos têm sido encontrados nesta
                freguesia, como por exemplo uma cabeça de guerreiro esculpida em
                granito, provavelmente da Idade do Ferro, o lagar
                romano/medieval do Negrio, ou ainda a Estátua-Menir do Alto da
                Escrita, esculpida provavelmente entre o Período Calcolítico e a
                Idade do Bronze.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card id="myCard" style={{ width: "30rem" }}>
            <Card.Img variant="top" src="/valencadodouro.jpg" />
            <Card.Body>
              <Card.Title>Valença do Douro</Card.Title>

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
              <Card.Text>
                Foi Vila e sede de concelho entre 1514 e 1863. Constituído pelas
                freguesias de Desejosa, Valença do Douro, Casais e Sarzedinho. A
                atestar a sua municipalidade ainda estão a casac da Câmara, a
                cadeia e o pelourinho. Em pleno coração do Alto Douro domina um
                vale de rara beleza paisagística. É a primeira produtora de
                Vinho Fino do Concelho. O azeite e a amêndoa são algumas das
                actividades agrícolas que ocupam a maioria das gentes desta
                terra.
              </Card.Text>
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

function getContatos(e){
  history.push("/Contatos")
}

function getAssosiacao(e){
  history.push("/Associacoes")
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
