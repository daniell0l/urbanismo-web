// import "./style.css";
import {
  FaUser,
  FaSearch,
  FaUserPlus,
  FaDownload,
  FaInfoCircle,
  FaBriefcase,
  FaUsers,
  FaBars,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logoWide from "../../assets/imgs/logoWide.png";
import logoModel from "../../assets/imgs/logoModel.png";
import logoprefeitura from "../../assets/imgs/logoPrefeitura.png";

export function Home() {
  return (
    <div>
      <header>
        <nav className="container flex items-center justify-between relative">
          <div className="logo">
            <img
              className="hidden sm:flex w-40 h-auto object-contain"
              src={logoWide}
              alt="lem urbanismo"
            />
          </div>
          <ul className="hidden sm:flex sm:h-10 h-12 border border-slate-300 rounded-full px-2 pt-2 hover:border-slate-400">
            <li>
              <a
                className="p-2 font-bold text-blue-600 hover:text-blue-500 "
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="p-2 font-bold text-blue-600 hover:text-blue-500"
                href="#info_down_cad"
              >
                Informativo
              </a>
            </li>
            <li>
              <a
                className="p-2 font-bold text-blue-600 hover:text-blue-500"
                href="/"
              >
                Downloads
              </a>
            </li>
            <li>
              <a
                className="p-2 font-bold text-blue-600 hover:text-blue-500"
                href="../register"
              >
                Cadastro
              </a>
            </li>
            <div className="search-bar flex items-center relative">
              <input
                className="hidden sm:flex sm:h-10 rounded-full indent-4 relative left-4 text-lg bottom-1 font-semibold bg-gradient-to-r from-slate-50 to-slate-200 h-12"
                type="text"
                placeholder="Pesquisar..."
              />
              <button className="text-blue-600 rounded-r-full absolute flex end-0 top-1 text-xl hover:text-blue-500">
                <FaSearch />
              </button>
            </div>
          </ul>
          <div className="md:hidden flex items-center">
            <button className="text-blue-600 relative right-12 text-2xl">
              <FaBars />
            </button>
          </div>
          <Link to="../Login" style={{ textDecoration: "none" }}>
            <div
              id="login"
              className="relative left-20 flex items-center h-14 p-2 pr-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-l-full hover:pr-24 ease-in duration-200 sm:w-full"
            >
              <div className="bg-white p-2 mr-4 rounded-full flex">
                <FaUser size={25} className="text-green-500 rounded-b-full" />
              </div>
              <span className="font-semibold font-serif text-2xl text-white">
                Login
              </span>
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
