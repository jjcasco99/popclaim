import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Login.css';
import logo from '../assets/logo_popclaim.png';
import img1 from '../assets/rafiki.png';
import img2 from '../assets/section2.png';
import client1 from '../assets/image 11.png';
import client2 from '../assets/image 12.png';
import client3 from '../assets/image 13.png';
import dashboard1 from '../assets/Dashboard_ 1.png';
import social from '../assets/social-icons.png';
import world from '../assets/world.png';
import arrow from '../assets/arrow2.png';

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="landing-container">
      <header className="header">
        <div className="header-nav">
          <div>
            <img className="logo-popclaim" src={logo} alt="logo" />
          </div>
          <nav className="nav">
            <ul className="nav-links">
              <li>Plataforma</li>
              <li>Planes</li>
              <li>Enterprise</li>
              <li>Recursos</li>
            </ul>
          </nav>
        </div>
        <div className="btn-container">
          <button className="login-btn" onClick={() => loginWithRedirect()}>
            Únete
          </button>
        </div>
      </header>

      <section className="section-container">
        <div>
          <img className="img1" src={img1} alt="girl" />
        </div>
        <div className="copy1-container">
          <h1 className="copy1-title">Empodera tu reputación</h1>
          <p className="copy-text">
            Popclaim es la herramienta de social listening que te ayudará a
            tener un mayor conocimiento de lo que opina la comunidad de usuarios
            sobre tus productos o servicios
          </p>
          <button className="login-btn login-btn--section1">
            Comienza tu prueba gratuita de 10 días
          </button>
        </div>
      </section>

      <section className="section-container section-container--2">
        <div className="copy1-container">
          <h1 className="copy1-title">¿Qué dicen sobre ti?</h1>
          <p className="copy-text">
            Popclaim es una herramienta que te permite identificar tu reputación
            online. ¿Te gustaría saber con facilidad qué es lo que dicen los
            usuarios de tu marca? ¿Te gustaría poder escuchar activamente tus
            RRSS? Aprende a conocer a tus usuarios, saber lo que dicen de ti a
            través de una herramienta intuitiva.
          </p>
          <button className="login-btn login-btn--section1">
            Registrate en popclaim
          </button>
        </div>
        <div>
          <img className="img1" src={img2} alt="girl" />
        </div>
      </section>

      <section className="client-section">
        <h2 className="client-section-title">
          Conoce lo que dicen nuestros clientes
        </h2>
        <div className="cards-container">
          <div className="client-card">
            <img src={client1} alt="people" />
            <p className="client-text">
              “Los community managers de mi agencia están muy contentos con
              PopClaim, ya que han podido optimizar su tiempo y ser más
              eficientes al momento de gestionar las cuentas de todas nuestras
              redes.”
            </p>
            <h4>Nora Gómez</h4>
            <h4>CEO, Agency Factory</h4>
          </div>
          <div className="client-card">
            <img src={client2} alt="people" />
            <p className="client-text">
              “Era increíble la cantidad de fake news que circulaban acerca de
              nosotros en RR.SS. Gracias al uso de PopClaim descubrimos esta
              situación y nuestro CM pudieron corregir y desmentir aquello que
              se estaba diciendo”.
            </p>
            <h4>Fabián García</h4>
            <h4>CEO, Tienda Jewerly</h4>
          </div>
          <div className="client-card">
            <img src={client3} alt="people" />
            <p className="client-text">
              “Desde que usamos PopClaim tenemos muy claro en que fallamos con
              nuestros usuarios conocemos cada interés, por lo que mejoramos a
              cada momento, además ahorramos tiempo en la gestión”.
            </p>
            <h4>Laura Sánchez</h4>
            <h4>Community Manager, The Bridge</h4>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div>
          <img className="img1" src={dashboard1} alt="dashboard" />
        </div>
        <div className="copy1-container">
          <h1 className="copy1-title">Exprime tus redes</h1>
          <p className="copy-text">
            Controla cómo evoluciona la reputación de tu empresa en todas las
            redes sociales. Conoce los puntos fuertes de tu estrategia de
            comunicación además de tus productos y servicios gracias al análisis
            de keywords. Filtra los comentarios mas importantes de tus redes
            para poder responder de la manera más rápida y eficaz posible.
          </p>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-services">
            <h4 className="services-title">Plataforma</h4>
            <ul className="services-list">
              <li>Funcionalidades</li>
              <li>Integraciones</li>
              <li>Directorio de aplicaciones</li>
              <li>Novedades</li>
            </ul>
          </div>
          <div className="footer-services">
            <h4 className="services-title">Planes</h4>
            <ul className="services-list">
              <li>Free</li>
              <li>Professional</li>
              <li>Equipo</li>
              <li>Business</li>
              <li>Enterprise</li>
              <li>Comparar planes</li>
            </ul>
          </div>
          <div className="footer-services">
            <h4 className="services-title">Enterprise</h4>
            <ul className="services-list">
              <li>Soluciones</li>
              <li>Industrias</li>
            </ul>
          </div>
          <div className="footer-services">
            <h4 className="services-title">Educación</h4>
            <ul className="services-list">
              <li>Academia</li>
              <li>Recursos</li>
              <li>Blog</li>
              <li>Seminarios web</li>
              <li>Eventos</li>
            </ul>
          </div>
          <div className="footer-services">
            <h4 className="services-title">Acerca de</h4>
            <ul className="services-list">
              <li>Acerca de</li>
              <li>Contáctanos</li>
              <li>Ayuda</li>
              <li>Trabaja con nosotros</li>
              <li>Equipo directivo</li>
              <li>Impácto social</li>
              <li>Diversidad, igualdad e inlusión</li>
              <li>Sala de redacción</li>
            </ul>
          </div>
        </div>
        <div className="footer-legal">
          <div>
            <p className="legal-text">
              <img src={world} alt="" />
              Español
              <img src={arrow} alt="" />
            </p>
            <p className="legal-text">
              &copy; 2022 Popclaim Inc. Todos los derechos reservados.
            </p>
            <p className="legal-text">
              Centro legal | Centro de confianza | Privacidad | Mapa del sitio |
              Accesibilidad
            </p>
          </div>
          <div>
            <img src={social} alt="social icons" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;
