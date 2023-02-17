import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const textos = { color: "violet" };
const info = { textAlign: "left", fontSize: "24px" };
const image = { borderRadius: "10px", border: "2px solid darkslateblue" };
const divPrincipal = {
  color: "white",
  display: "flex",
  justifyContent: "space-around",
  width: "80%",
  margin: "auto",
  marginTop: "75px",
};
const styleButton = {
  backgroundColor: "pink",
  color: "purple",
  border: "0px",
  borderRadius: "5px",
  fontWeight: "bold",
  fontSize: "15px",
  padding: "10px",
  marginTop: "35px",
  cursor: "pointer",
};

export default function Detail() {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({
    name: "",
    status: "",
    specie: "",
    gender: "",
    origin: "",
    image: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter({
            name: char.name,
            status: char.status,
            specie: char.specie,
            gender: char.specie,
            origin: char.origin.name,
            image: char.image,
          });
          console.log(character);
        } else {
          alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        alert("No hay personajes con ese ID");
      });
  }, [detailId]);

  return (
    <div>
      <div style={divPrincipal}>
        <div style={info}>
          {character.name && (
            <p>
              <b style={textos}>Name:</b> &#160; {character.name}
            </p>
          )}
          {character.status && (
            <p>
              <b style={textos}>Status:</b> &#160; {character.status}
            </p>
          )}
          {character.specie && (
            <p>
              <b style={textos}>Specie:</b> &#160; {character.specie}
            </p>
          )}
          {character.gender && (
            <p>
              <b style={textos}>Gender:</b> &#160; {character.gender}
            </p>
          )}
          {character.origin && (
            <p>
              <b style={textos}>Origin:</b> &#160; {character.origin}
            </p>
          )}
        </div>
        <img style={image} src={character.image} />
      </div>
      <button style={styleButton} onClick={() => navigate('/home')}>Back To Home</button>
    </div>
  );
}
