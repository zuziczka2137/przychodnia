import przychodnia from "./przychodnia.jpg"
import slide2 from "./slide2.png"
import slide32 from "./slide32.jpg"
import Lekarka1 from "./Lekarka1.jpg"
import Lekarka2 from "./Lekarka2.jpg"
import Lekarka3 from "./Lekarka3.jpg"
import Lekarka4 from "./Lekarka4.jpg"
import lekarz1 from "./lekarz1.png"
import Lekarz2 from "./Lekarz2.jpg"
import info1 from "./info1.png"
import info2 from "./info2.jpg"
import info3 from "./info3.jpg"
import info5 from "./info5.jpg"
import info6 from "./info6.jpg"
import info7 from "./info7.png"
import React from "react";
class info extends React.Component{
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
            <section>               
                <article>
                    <h1>Informacje</h1>
                    <p>
                        Nasza kadra medyczna poprzez uczestnictwo w różnorodnych szkoleniach, kursach, 
                        sympozjach stale doskonali kompetencje i poszerza wiedzę w zakresie najnowszych 
                        badań dotyczących leczenia i opieki nad pacjentem, co przekłada się na wysoki poziom 
                        naszych usług. Oprócz doraźnej opieki nad pacjentem przywiązujemy dużą wagę do 
                        profilaktyki oraz propagowania zdrowego stylu życia.
                    </p>
                    <p>
                        Dzięki staraniom całego personelu oraz rodzinnej atmosferze w naszej przychodni, 
                        dajemy Państwu poczucie bezpieczeństwa i świadomość objęcia opieką zdrowotną na 
                        najwyższym poziomie.
                    </p>
                    <article class="row">
                        <h1>Nasz personel</h1>
                        <section class="column left1" >
                            
                            <center><h3>Beata Kaliniak</h3>
                            <p class="lekarz">
                            lekarz pediatra, specjalista medycyny rodzinnej
                            </p>
                            <p>
                                <img class="lekarz" src={Lekarka1} alt="lekarz"/>
                            </p>
                            </center>
                        </section>
                        <section class="column middle1">
                            <center><h3>Paulina Podolska</h3>
                                <p class="lekarz">
                                    mgr położnictwa, położna środowiskowo-rodzinna
                                </p>
                                <p>
                                    <img class="lekarz" src={Lekarka4} alt="lekarz"/>
                                </p>
                                </center>
                        </section>
                        <section class="column right1">
                            <center><h3>Michał Łabuz</h3>
                                <p class="lekarz">
                                    lekarz internista, specjalista chorób wewnętrznych
                                </p>
                                <p>
                                    <img class="lekarz" src={lekarz1} alt="lekarz"/>
                                </p>
                                </center>
                        </section>
                    </article>
                    <article class="row">
                        <section class="column left1" >
                            
                            <center><h3>Agnieszka Ludwinek</h3>
                            <p class="lekarz">
                            lekarz onkolog
                            </p>
                            <p>
                                <img class="lekarz" src={Lekarka2} alt="lekarz"/>
                            </p>
                            </center>
                        </section>
                        <section class="column middle1">
                            <center><h3>Szczepan Kaliniak</h3>
                                <p class="lekarz">
                                    lekarz, w trakcie specjalizacji
                                </p>
                                <p>
                                    <img class="lekarz" src={Lekarz2} alt="lekarz"/>
                                </p>
                                </center>
                        </section>
                        <section class="column right1">
                            <center><h3>Katarzyna Grzywna-Podrzycka</h3>
                                <p class="lekarz">
                                    mgr pielęgniarstwa, pielęgniarka ambulatoryjna
                                </p>
                                <p>
                                    <img class="lekarz" src={Lekarka3} alt="lekarz"/>
                                </p>
                                </center>
                        </section>
                    </article>
                    <article class="row">
                        <h1>
                        </h1>
                        <section class="column left1" >
                            <img class="info" src={info1} alt="info"/>
                        </section>
                        <section class="column middle1">
                            <img class="info" src={info2} alt="info"/>
                        </section>
                        <section class="column right1">
                            <img class="info" src={info3} alt="info"/>
                        </section>
                    </article>
                    <article class="row">
                        <section class="column left1" >
                            <img class="info" src={info5} alt="info"/>
                        </section>
                        <section class="column middle1">
                            <img class="info" src={info6} alt="info"/>
                        </section>
                        <section class="column right1">
                            <img class="info" src={info7} alt="info"/>
                        </section>
                    </article>
                    
                   
                    
                </article>
            </section>
            <footer></footer>
        </div>
        );
    }
}
export default info;