import przychodnia from "./przychodnia.jpg"
import slide2 from "./slide2.png"
import slide32 from "./slide32.jpg"
import React from "react";
class konto extends React.Component{
    render(){
        return(
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
            <a className="menu" href="stronaglowna">Strona Główna</a><a className="menu" href="kontakt">Kontakt</a><a className="menu" href="informacje">Informacje</a><a className="menu" href="faq">FAQ</a><a className="menu active" href="konto">Konto</a>
            </nav>

            <section>
                <article>
                    <h1> Konto</h1>
                    <nav1>
                        <a class="konto" href="rejestracja">Zarejestruj Się</a><a class="konto" href="logowanie">Zaloguj Się</a><a class="konto" href="odzyskiwanie">Odzyskaj konto</a>                  
                    </nav1>                    
                </article>
            </section>
            <footer></footer>
        </div>
        );
    }
}
export default konto;
