import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import { fetchUserInfo } from "../../redux/actions";

export default function UserInfo() {

  useEffect(() => {
    async function fetchData() {}
    fetchData();
  }, []);

  return (
    <div>
      <h1>USER ID: </h1>
      <a>Album</a>
      <br />
      <a>ToDos</a>
      <br />
      <br />
      <button>Volver</button>
    </div>
  );
}
