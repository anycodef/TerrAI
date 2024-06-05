import React from "react";
import "./Home.css"; 

const Home = () => {
    return (
        <div className="home-container">
            <header>
                <h1>Bienvenido a terrAI</h1>
                <hr />
                <blockquote>Analiza. Verifica. Invierte.</blockquote>
                <hr />
            </header>
            <section className="description">
                <p>Aplicación web que utiliza IA para analizar la erosión del suelo y evaluar la idoneidad para la construcción.</p>
            </section>
            <section className="content-columns">
                <div className="ascii-art">
                    <pre>
{`
 .______... 
 /\__.._\\.. 
 \\/_/\\.\\/.. 
 ...\\.\\_\\.. 
 ....\\/_/.. 
 .______... 
 /\\..___\\.. 
 \\.\\..__\\.. 
 .\\.\\_____\\ 
 ..\\/_____/ 
 .______... 
 /\\..==.\\.. 
 \\.\\..__<.. 
 .\\.\\_\\.\\_\\ 
 ..\\/_/./_/ 
 .______... 
 /\\..==.\\.. 
 \\.\\..__<.. 
 .\\.\\_\\.\\_\\ 
 ..\\/_/./_/ 
 .______... 
 /\\..__.\\.. 
 \\.\\..__.\\. 
 .\\.\\_\\.\\_\\ 
 ..\\/_/\\/_/ 
 .__....... 
 /\\.\\...... 
 \\.\\.\\..... 
 .\\.\\_\\.... 
 ..\\/_/.... 
`}
                    </pre>
                </div>
                <div className="poem">
                    <p>en tierras vastas, datos emergieron,<br />
                    de suelo y rocas, voces se alzaron,<br />
                    la inteligencia, con su luz, guiaron,<br />
                    en busca de un lugar para el suelo.</p>

                    <p>la erosión antes oculta, en sombras,<br />
                    con precisión y ciencia se revela,<br />
                    cada grano, cada piedra, observa,<br />
                    donde construir, el futuro anhela.</p>

                    <p>mapas que hablan, con sabiduría,<br />
                    a arquitectos dan su fiel consejo,<br />
                    donde edificar, segura armonía,<br />
                    evitando el dolor del suelo viejo.</p>

                    <p>en react native, el código brilla,<br />
                    tejiendo puentes entre web y móvil,<br />
                    con cada línea, un sueño se perfila,<br />
                    en terrAI, la visión se vuelve noble.</p>

                    <p>creado con amor y gran cuidado,<br />
                    para un futuro justo y brillante,<br />
                    cada análisis, un paso dado,<br />
                    guiado por estrellas, adelante.</p>
                    <p className="signature">~ GPT-4o</p>
                </div>
            </section>
            <footer>
                <h2>Para ejecutar este proyecto</h2>
                <section className="instructions">
                    <h3>Backend</h3>
                    <ol>
                        <li>cd ./Desarrollo/Fuentes/Backend</li>
                        <li>python3 -m venv venv</li>
                        <li>
                            Linux:
                            <pre>source venv/bin/activate</pre>
                            Windows:
                            <pre>venv\Scripts\activate</pre>
                        </li>
                        <li>pip install django</li>
                        <li>
                            <pre>
                                python manage.py makemigrations
                                <br />
                                python manage.py migrate
                            </pre>
                        </li>
                        <li>python manage.py runserver</li>
                    </ol>
                    <h3>Frontend</h3>
                    <ol>
                        <li>cd ./Desarrollo/Fuentes/Frontend/terrai-frontend-app</li>
                        <li>npm install</li>
                        <li>npm start</li>
                    </ol>
                </section>
                <h2>Licencia</h2>
                <p>Este proyecto está licenciado bajo la Licencia Apache - vea el archivo LICENSE.md para más detalles.</p>
            </footer>
        </div>
    );
};

export default Home;
