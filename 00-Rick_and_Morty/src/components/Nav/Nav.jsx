import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <nav>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png"
        alt=""
        width="20%"
      />
      <div>
        <Link to="/home" className={style.links}>
          Home
        </Link>
        <Link to="/favorites" className={style.links}>
          Favorites
        </Link>
        <Link to="/about" className={style.links}>
          About
        </Link>
        <button className={style.links} onClick={props.logout}>
          LogOut
        </button>
      </div>
      <SearchBar onSearch={props.onSearch} random={props.random} />
    </nav>
  );
}
