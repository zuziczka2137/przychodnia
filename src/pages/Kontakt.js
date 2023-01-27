import przychodnia from "./przychodnia.jpg"
import slide2 from "./slide2.png"
import slide32 from "./slide32.jpg"
import mapa from "./mapa.png"
import React from "react";
class Kontakt extends React.Component{
    render(){
        return (
            <div id="main">
            <header>
                <div className="carousel">
                    <div className="carousel-inner">
                        <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="true" checked="checked"/>
                        <div className="carousel-item">
                            <img src={przychodnia} alt=""/>
                        </div>
                        <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="true"/>
                        <div className="carousel-item">
                            <img src={slide2} alt=""/>
                        </div>
                        <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="true"/>
                        <div className="carousel-item" >
                            <img src={slide32} alt=""/>
                        </div>
                        <label for="carousel-3" className="carousel-control prev control-1">‹</label>
                        <label for="carousel-2" className="carousel-control next control-1">›</label>
                        <label for="carousel-1" className="carousel-control prev control-2">‹</label>
                        <label for="carousel-3" className="carousel-control next control-2">›</label>
                        <label for="carousel-2" className="carousel-control prev control-3">‹</label>
                        <label for="carousel-1" className="carousel-control next control-3">›</label>
                        <ol className="carousel-indicators">
                            <li>
                                <label for="carousel-1" className="carousel-bullet">•</label>
                            </li>
                            <li>
                                <label for="carousel-2" className="carousel-bullet">•</label>
                            </li>
                            <li>
                                <label for="carousel-3" className="carousel-bullet">•</label>
                            </li>
                        </ol>
                    </div>
                </div>
            </header>
            <nav>
            <a className="menu active" href="stronaglowna">Strona Główna</a><a className="menu" href="kontakt">Kontakt</a><a className="menu" href="informacje">Informacje</a><a className="menu" href="faq">FAQ</a><a className="menu" href="konto">Konto</a>
            </nav>
            
            <article class="row">
                <h1>Kontakt</h1>
                <section class="column left" >
                    
                    <h3> Dla Pacjentów:</h3>
                    <p>
                        tel. 41 583 27 35
                    </p>
                    <p>
                        tel. 41 842 72 47
                    </p>   
                    <h3>Księgowość:</h3>    
                    <p>tel. 41 744 57 33</p>
                </section>
                <section class="column middle" >
                    <h3> Opieka całodobowa:</h3>
                        <p>
                            tel. 41 744 57 33
                        </p>
                        <p>
                            tel. 41 915 99 44
                        </p>
                    
                    <h3>Biuro zarządu:</h3>
                        <p>
                            tel. 41 851 46 83
                        </p>
                        <p>
                            tel. 643 557 412
                        </p>
                </section>
                <section class="column right">
                    <h2>Adres dojazdowy</h2>
                    <p>Świętokrzyska 20, Kielce 25-406</p>
                    <p><img src={mapa} alt="" width="550" height="400"/></p>
                </section>
            </article>
            <footer></footer>
        </div>
        );
    }
}
export default Kontakt;