import "./style.css";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import logoWide from "../../assets/imgs/logoWide.png";
import logoModel from "../../assets/imgs/logoModel.png";

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
              <a href="/">informativo</a>
            </li>
            <li>
              <a href="/">downloads</a>
            </li>
            <li>
              <a href="/">cadastro</a>
            </li>
          </ul>
          <div className="search-bar">
            <input type="text" placeholder="Pesquisar..." />
            <button type="submit">
              <FaSearch />
            </button>
          </div>

          <div id="login">
            <div className="circle">
              <FaUser size={25} color="3a28a" />
            </div>
            <span>Login</span>
          </div>
        </nav>
      </header>

      <main>
        <section className="paragrafo">
          <h1>LEM URBANISMO</h1>
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
        {/* <section id="redes_sociais">
          <button
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          ></button>
          <button
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          ></button>
        </section> */}
      </main>

      <section id="conteudo_final">
        <div className="info_down_cad">
          <a href="/">informativo</a>
          <a href="/">download</a>
          <a href="/">cadastro</a>
        </div>
        <div className="area_prof_tra">
          <a href="/">área profissional</a>
          <a href="/">área trabalho</a>
        </div>
      </section>

      <footer id="rodape">
        <div>
          <img src="assets/imgs/logo.png" alt="Logo" />
          <p>
            Prefeitura Municipal de Luís Eduardo Magalhães Telefone: 77
            3628-9000 - Luís Eduardo Magalhães - Bahia
          </p>
          <p>
            © {new Date().getFullYear()} VALLE TEC LAB todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
