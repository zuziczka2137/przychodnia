import przychodnia from "./przychodnia.jpg"
import slide2 from "./slide2.png"
import slide32 from "./slide32.jpg"
import React from "react";

class faq extends React.Component{
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
            <a className="menu active" href="stronaglowna">Strona Główna</a><a className="menu" href="kontakt">Kontakt</a><a className="menu" href="informacje">Informacje</a><a className="menu" href="faq">FAQ</a><a className="menu" href="konto">Konto</a>
            </nav>
            <section>               
                <article>
                    <h1> FAQ</h1>
                    <p class="pytanie">
                        1. Czy ze skierowaniem od lekarza rodzinnego mogę iść do specjalisty 
                        przyjmującego poza placówkami NZOZ „Twój Lekarz”?                      
                    </p>
                    <p1>
                        Tak, pacjent ma prawo wyboru specjalisty, u którego będzie realizował skierowanie.
                    </p1>
                    <p class="pytanie">
                        2. Dlaczego dodzwoniłem się do innej jednostki Twój Lekarz, 
                        jeżeli wybrałem telefon do konkretnej placówki?
                    </p>
                    <p1>
                        W placówce funkcjonuje call center - jeżeli linia jest zajęta bądź połączenie nie zostało odebrane, 
                        po 3 sekundach, połączenie jest przełączane do wolnego agenta call center.
                    </p1>
                    <p class="pytanie">
                        3. Idąc na badania laboratoryjne, mam być na czczo. 
                        Czy oznacza to, że przed badaniem nie mogę przyjąć leków?
                    </p>
                    <p1>
                        Nie, przed badaniem należy bezwzględnie przyjąć przepisane przez lekarza leki i 
                        popić je wodą. Bycie na czczo oznacza, że nie można przed badaniem zjeść 
                        posiłku, wypić kawy lub herbaty, co mogłoby po prostu zafałszować wynik 
                        badania. W przypadku osób chorujących przewlekle np. na cukrzycę jeżeli to 
                        możliwe, należy odłożyć pierwszy posiłek i przyjęcie insuliny na czas po 
                        badaniu lub uwzględnić to podczas odczytywania wyników.
                    </p1> 
                    <p class="pytanie">
                        4. Jak długo od wypisania przez lekarza POZ ważne jest skierowanie do poradni specjalistycznej?
                    </p>
                    <p1>
                        Skierowanie do poradni specjalistycznej jest ważne od czasu wydania do wyleczenia danej jednostki chorobowej. W związku z tym w nowym roku kalendarzowym nie ma konieczności przepisywania skierowania.
                    </p1>
                    <p class="pytanie">
                        5. Kiedy odbywać się będą wizyty osobiste do POZ?
                    </p>
                    <p1>
                        Wizyty osobiste odbywają się cały czas. Jednak pacjenci, 
                        którzy podejrzewają u siebie zakażenie koronawirusem powinni zgłosić to 
                        podczas rejestracji telefonicznej, zanim przyjdą do przychodni.
                    </p1>
                    <p class="pytanie">
                        6. W jaki sposób mogę zamówić receptę?
                    </p>
                    <p1>
                        Pacjenci zadeklarowani do NZOZ Twój Lekarz mają możliwość zamówienia recept 
                        na zapisane w dokumentacji medycznej, stale przyjmowane leki. 
                        Zamówienia można składać za pomocą formularza przesyłanego na adres 
                        e-mail lub telefonicznie pod numer 71 311 12 36.
                    </p1>    
                    <h1> </h1>
                        <p class="pytanie">
                            Jeżeli tutaj nie ma odpowiedzi na twoje pytanie, zadzwoń pod numer:
                        </p>
                        <p class="pytanie">
                            790 787 070
                        </p>             
                </article>
            </section>
            <footer></footer>
        </div>
        );
    }
}
export default faq;