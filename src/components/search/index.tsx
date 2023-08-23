import {FaSearch} from "react-icons/fa";

export const SearchPrincipal = () => {
  return (
    <div>
            <input className="w-100 h-10 flex float-left mb:w-200" type="text" placeholder="Pesquisar..." />
            <button className="w-10 h-10 bg-blue-100 flex float-left" type="submit">
              <FaSearch />
            </button>
          </div>
  );
};