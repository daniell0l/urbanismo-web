import "./style.css";
import {
  FaUser,
  FaSearch,
  FaUserPlus,
  FaDownload,
  FaInfoCircle,
  FaBriefcase,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logoWide from "../../assets/imgs/logoWide.png";
import logoModel from "../../assets/imgs/logoModel.png";
import logoprefeitura from "../../assets/imgs/logoPrefeitura.png";

export function Home() {
  return (
    <div>
      <header>
        <nav id="navbar">
          <div className="logo">
            <img src={logoWide} alt="lem urbanismo" />
          </div>
          <ul id="navbar_lateral">
            <li>
              <a href="/">home</a>
            </li>
            <li>
              <a href="#info_down_cad">informativo</a>
            </li>
            <li>
              <a href="/">downloads</a>
            </li>
            <li>
              <a href="../register">cadastro</a>
            </li>
          </ul>
          <div className="search-bar">
            <input type="text" placeholder="Pesquisar..." />
            <button type="submit">
              <FaSearch />
            </button>
          </div>

          <Link to="../Login" style={{ textDecoration: "none" }}>
            <div id="login">
              <div className="circle">
                <FaUser size={25} color="3a28a" />
              </div>
              <span>Login</span>
            </div>
          </Link>
        </nav>
      </header>

      <main>
        <div className="conteudo">
          <section className="paragrafo">
            <h1>
              LEM <br /> URBANISMO
            </h1>
            <div className="linha"></div>
            <p>
              Sistema de Planejamento, Orçamento e Gestão tem a finalidade de
              virtualizar todo o processo e etapas de elaboração de processos de
              Alvará de Construção, Regularização, Acréscimo de Área,
              Desmembramento, Remembramento e Redimensionamento.
            </p>
          </section>
          <section className="modelo_png">
            <div className="bloco">
              <div className="circulo">
                <img src={logoModel} alt="mulher modelo" />
              </div>
            </div>
          </section>
        </div>
        <section id="conteudo_final">
          <div className="info_down_cad">
            <div className="info_item">
              <a href="/">
                <FaInfoCircle color="3a28a" />
              </a>
              <div className="info_text">
                <h2>informativo</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolorediam
                  nonummy nibh euismod tincidunt ut laoreet dolorediam nonummy
                  nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                  volutpat.
                </p>
              </div>
            </div>

            <div className="info_item">
              <a href="/">
                <FaDownload color="3a28a" />
              </a>
              <div className="info_text">
                <h2>download</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolorediam
                  nonummy nibh euismod tincidunt ut laoreet dolorediam nonummy
                  nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                  volutpat.
                </p>
              </div>
            </div>

            <Link to="../register" style={{ textDecoration: "none" }}>
              <div className="info_item">
                <a href="">
                  <FaUserPlus color="3a28a" />
                </a>
                <div className="info_text">
                  <h2>cadastro</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet
                    dolorediam nonummy nibh euismod tincidunt ut laoreet
                    dolorediam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        <section>
          <div className="area_prof_tra">
            <div className="statistica"></div>
            <div className="botao-container">
              <a href="/" id="profissional-area">
                <div className="circle-profissional">
                  <FaBriefcase size={50} color="3a28a" />
                </div>
                <span>
                  <h2>Área Profissional</h2>
                </span>
              </a>
              <a href="/" id="work-area">
                <div className="circle-work">
                  <FaUsers size={60} color="3a28a" />
                </div>
                <h2>Área do Cliente</h2>
              </a>
            </div>
          </div>
        </section>

        <section>
          <div className="prefeitura">
            <img src={logoprefeitura} alt="logo prefeitura" />
            <div className="conteudo-prefeitura">
              <p>
                Prefeitura Municipal de Luís Eduardo Magalhães <br />
                CEP: 47.850-000 - Luís Eduardo Magalhães - Bahia <br />
                Telefone: 77 3628-9000
              </p>
              <div className="quadrado"></div>
            </div>
          </div>
        </section>
      </main>

      <footer id="rodape">
        <div>
          <p>
            © {new Date().getFullYear()} VALLE TEC LAB todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
