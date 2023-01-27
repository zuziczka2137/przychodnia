import przychodnia from "./przychodnia.jpg"
import slide2 from "./slide2.png"
import slide32 from "./slide32.jpg"
import logo from "./logo.png"
import grupa from "./grupa.jpg"
import React from "react";
class Home extends React.Component{
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
                    <h1> Przychodnia Rodzinna - Kielce</h1>
                    <p><img class="left" src={logo} alt="logo" />
                        Zapewniamy kompleksową opiekę zdrowotną pacjentom indywidualnym, 
                        rodzinom i przedsiębiorstwom.
                    </p>
                    <p>
                        Naszą dewizą jest rzetelność, dlatego współpracujemy z wysokiej klasy 
                        specjalistami i wykonujemy badania przy użyciu nowoczesnej aparatury medycznej.
                    </p>
                    <p>
                        Kładziemy nacisk nie tylko na diagnostykę i terapię, ale też na profilaktykę
                         i edukację zdrowotną. Do każdego pacjenta podchodzimy indywidualnie. 
                         Otaczamy go opieką, towarzysząc mu na wszystkich etapach leczenia, 
                         a także doradzamy, jak uchronić się przed chorobą i cieszyć się dobrym 
                         samopoczuciem na co dzień.
                    </p>
                    <p>
                        Co nas jeszcze wyróżnia? Serdeczny stosunek do pacjentów. 
                        Przyjazna atmosfera w naszych przychodniach sprawia, 
                        że wielu z nich chętnie do nas powraca. Czekamy również 
                        na Ciebie. Jesteśmy dla Twojego zdrowia! 
                    </p>
                    <center>
                        <img src={grupa} alt=""/>
                    </center>
                    <h1>Nasz wachlarz usług</h1>
                    <p>
                        <li class="glw">Konsultacje lekarskie (ponad 30 specjalności) zarówno prywatne jak i w ramach pakietów medycznych</li>
                        <li class="glw">Poradnię POZ</li>
                        <li class="glw">Opiekę pielęgniarską</li>
                        <li class="glw">Poradnię dietetyczną</li>
                        <li class="glw">Poradnię leczenia niepłodności</li>
                        <li class="glw">Badania diagnostyczne (posiadamy własnelaboratorium, pracownie RTG i USG)</li>
                        <li class="glw">Fizjoterapię</li>
                        <li class="glw">Medycynę pracy (u nas wykonasz wszystkie potrzebne badania w jeden dzień!)</li>
                        <li class="glw">Opiekę i badania psychologiczne (w tym do pozwoleń do pracy, posiadania broni i inne)
                        </li>
                    
                    <p class="pytanie">
                        Każda usługa jest wyceniana indywidualnie dla potrzeb pacjenta
                    </p>
                </p>
                </article>

            </section>
            <footer></footer>
        </div>
        );
    }
}
export default Home;