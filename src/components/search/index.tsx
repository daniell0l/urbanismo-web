import {FaSearch} from "react-icons/fa";

export const SearchPrincipal = () => {
  return (
    <div className="principalSearch">
            <input type="text" placeholder="Pesquisar..." />
            <button type="submit">
              <FaSearch />
            </button>
          </div>
  );
};