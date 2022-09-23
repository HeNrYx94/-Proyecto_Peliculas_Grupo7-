import './App.css';
// importar componentes

import './css/aquiVan.css';
import logo1 from './img/logo1.png';
import facebook from './img/facebook.png';
import instagram from './img/instagram.png';
import twitter from './img/twitter.png';
import whatsapp from './img/whatsapp.png';
import TheEvilDead from './img/TheEvilDead.jpg';
import TheThing from './img/TheThing.png';
import TheNightmareBeforeChristmas from './img/TheNightmareBeforeChristmas.jpg';
import SpaceJam from './img/SpaceJam.png';
import Gladiator from './img/Gladiator.jpg';
import Náugrago from './img/Náugrago.jpg';
import metacritic from './img/metacritic.png';
import FilmAffinity from './img/FilmAffinity.png';
import IMDB from './img/IMDB.png';
import Mensaje from './components/Mensaje';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';






function App() {
  
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo1} className="App-logo" alt="logo" />
        <p>
        <img src={facebook} className="redes" alt="facebook" class="tamañoRed"/>
        <img src={instagram} className="redes" alt="instragram" class="tamañoRed" />
        <img src={twitter} className="redes" alt="twitter" class="tamañoRed" />
        <img src={whatsapp} className="redes" alt="whatsapp" class="tamañoRed"/>

        <h1 class="titulo"><strong>PELICULAS</strong></h1>
        <p>Click en los posters para ver la pelicula</p>

        <Accordion defaultActiveKey="0">
      
        <Button variant="danger"><a href="https://tv.apple.com/ar/movie/posesion-infernal-subtitulada-1981/umc.cmc.2zdhjrx2rwh7e0hu6a0iczqfq?action=play"><img src={TheEvilDead} className="poster" alt="facebook" class="tamañoPoster"/></a></Button>{' '}
        <Accordion.Item eventKey="0">
        <Accordion.Header><Button variant="warning"><strong>The Evil Dead (1981)</strong></Button>{' '}</Accordion.Header>
        <Accordion.Body>
        <Button variant="info">
          Un grupo de cinco jóvenes va a pasar el fin de semana a una cabaña en medio de un espeso bosque en las montañas de Tennessee. 
                Mientras están cenando, la trampilla que da acceso al sótano se abre de golpe. Extrañados, deciden bajar a investigar. 
                Allí encuentran un magnetófono, un extraño cuchillo ritual y un libro antiquísimo.
                <section class="reseña">
                    <a href="https://www.metacritic.com/movie/the-evil-dead"><img src={metacritic} alt="metacritic" class="tamañoCritica"/></a>
                    <a href="https://www.filmaffinity.com/es/film939051.html"><img src={FilmAffinity} alt="FilmAffinity" class="tamañoCritica"/></a>
                    <a href="https://www.imdb.com/title/tt0083907/"><img src={IMDB} alt="imdb" class="tamañoCritica"/></a>
                </section></Button>
        </Accordion.Body>
      </Accordion.Item>
      <Button variant="danger"><a href="https://play.google.com/store/movies/details?id=LRB5lCH5j74"><img src={TheThing} className="poster" alt="facebook" class="tamañoPoster"/></a></Button>{' '}
      <Accordion.Item eventKey="1">
        <Accordion.Header><Button variant="warning"><strong>The Thing (1982)</strong></Button>{' '}</Accordion.Header>
        <Accordion.Body>
        <Button variant="info">
          Un equipo científico de la Antártida descubre un ente extraño que podría ser letal para la humanidad, un extraterrestre que puede duplicar otras formas de vida.
          <section class="reseña">
                    <a href="https://www.metacritic.com/movie/the-thing-1982"><img src={metacritic} alt="metacritic" class="tamañoCritica"/></a>
                    <a href="https://www.filmaffinity.com/es/film313264.html"><img src={FilmAffinity} alt="FilmAffinity" class="tamañoCritica"/></a>
                    <a href="https://www.imdb.com/title/tt0084787/?ref_=nv_sr_srsg_0"><img src={IMDB} alt="imdb" class="tamañoCritica"/></a>
                </section></Button>
        </Accordion.Body>
      </Accordion.Item>
      <Button variant="danger"><a href="https://www.disneyplus.com/es-419/movies/el-extrano-mundo-de-jack/5GjwOj5Rkpz2"><img src={TheNightmareBeforeChristmas} className="poster" alt="facebook" class="tamañoPoster"/></a></Button>{' '}
      <Accordion.Item eventKey="2">
        <Accordion.Header><Button variant="warning"><strong>El extraño mundo de Jack (1993)</strong></Button>{' '}</Accordion.Header>
        <Accordion.Body>
        <Button variant="info">
          El Señor de Halloween, Jack Skellington, aburrido de hacer cada año lo mismo, descubre la Navidad en la Ciudad de la Navidad y queda fascinado, por lo que decide emplearse a fondo y mejorar dicha festividad. 
                Con este fin, secuestra a Santa Claus y crea una versión de la Navidad totalmente opuesta a la que existe.
                Sólo su novia Sally es consciente del error que está cometiendo.
                <section class="reseña">
                    <a href="https://www.metacritic.com/movie/the-nightmare-before-christmas"><img src={metacritic} alt="metacritic" class="tamañoCritica"/></a>
                    <a href="https://www.filmaffinity.com/es/film366417.html"><img src={FilmAffinity} alt="FilmAffinity" class="tamañoCritica"/></a>
                    <a href="https://www.imdb.com/title/tt0107688/?ref_=nv_sr_srsg_0"><img src={IMDB} alt="imdb" class="tamañoCritica"/></a>
                </section></Button>
        </Accordion.Body>
      </Accordion.Item>
      <Button variant="danger"><a href="https://play.hbomax.com/page/urn:hbo:page:GXt53sgEhS5uSkwEAAAjI:type:feature?source=googleHBOMAX&action=play"><img src={SpaceJam} className="poster" alt="facebook" class="tamañoPoster"/></a></Button>{' '}
      <Accordion.Item eventKey="3">
        <Accordion.Header><Button variant="warning"><strong>Space Jam: el juego del siglo (1996)</strong></Button>{' '}</Accordion.Header>
        <Accordion.Body>
        <Button variant="info">
          Bugs Bunny y sus amigos se enfrentan al partido de baloncesto más importante de sus vidas: el que determinará su libertad y permanencia en el planeta Tierra.
          <section class="reseña">
                    <a href="https://www.metacritic.com/movie/space-jam"><img src={metacritic} alt="metacritic" class="tamañoCritica"/></a>
                    <a href="https://www.filmaffinity.com/es/film164087.html"><img src={FilmAffinity} alt="FilmAffinity" class="tamañoCritica"/></a>
                    <a href="https://www.imdb.com/title/tt0117705/?ref_=nv_sr_srsg_0"><img src={IMDB} alt="imdb" class="tamañoCritica"/></a>
                </section></Button>
        </Accordion.Body>
      </Accordion.Item>
      <Button variant="danger"><a href="https://www.netflix.com/ar/title/60000929?source=35"><img src={Gladiator} className="poster" alt="facebook" class="tamañoPoster"/></a></Button>{' '}
      <Accordion.Item eventKey="4">
        <Accordion.Header><Button variant="warning"><strong>Gladiator</strong></Button></Accordion.Header>
        <Accordion.Body>
        <Button variant="info">
          El general romano Máximo es el soporte más leal del emperador Marco Aurelio, que lo ha conducido de victoria en victoria. 
                Sin embargo, Cómodo, el hijo de Marco Aurelio, está celoso del prestigio de Máximo y aún más del amor que su padre siente por él. 
                Cuando Cómodo llega al poder ordena el arresto del general y su asesinato. 
                Máximo escapa de sus asesinos, pero no puede evitar la muerte de su familia. Entonces se convierte en gladiador para llevar a cabo su venganza.
                <section class="reseña">
                    <a href="https://www.metacritic.com/movie/gladiator"><img src={metacritic} alt="metacritic" class="tamañoCritica"/></a>
                    <a href="https://www.filmaffinity.com/es/film392075.html"><img src={FilmAffinity} alt="FilmAffinity" class="tamañoCritica"/></a>
                    <a href="https://www.imdb.com/title/tt0172495/?ref_=nv_sr_srsg_0"><img src={IMDB} alt="imdb" class="tamañoCritica"/></a>
                </section></Button>
        </Accordion.Body>
      </Accordion.Item>
      <Button variant="danger"><a href="https://www.youtube.com/watch?v=CDPhHq77530"><img src={Náugrago} className="poster" alt="facebook" class="tamañoPoster"/></a></Button>{' '}
      <Accordion.Item eventKey="5">
        <Accordion.Header><Button variant="warning"><strong>Náufrago</strong></Button></Accordion.Header>
        <Accordion.Body>
        <Button variant="info">
          Tras una accidente aéreo, Chuck Noland, ingeniero de Federal Express, trata de sobrevivir durante años en una isla completamente desierta.
          <section class="reseña">
                    <a href="https://www.metacritic.com/movie/cast-away"><img src={metacritic} alt="metacritic" class="tamañoCritica"/></a>
                    <a href="https://www.filmaffinity.com/es/film208836.html"><img src={FilmAffinity} alt="FilmAffinity" class="tamañoCritica"/></a>
                    <a href="https://www.imdb.com/title/tt0162222/?ref_=nv_sr_srsg_0"><img src={IMDB} alt="imdb" class="tamañoCritica"/></a>
                </section></Button>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </p>
        
       
      <section className="componentes">

      <Mensaje/>


        </section>
    

          


      </header>
      
    </div>
  );
}


export default App;
