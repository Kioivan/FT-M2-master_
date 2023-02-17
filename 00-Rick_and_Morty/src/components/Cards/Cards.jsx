import Card from "../Card/Card";
import styled from "styled-components";

const DivCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default function Cards(props) {
  const { characters } = props;
  let i = 0;
  return (
    <DivCards>
      {characters.length === 0 ? (
        <p style={{ color: "violet", marginTop: "150px", fontSize: "24px" }}>
          ¡Busca un personaje!
        </p>
      ) : (
        characters.map((e) => (
          <Card
            id={e.id}
            name={e.name}
            species={e.species}
            gender={e.gender}
            image={e.image}
            onClose={() => props.onClose(e.id)}
            key={i++}
          />
        ))
      )}
    </DivCards>
  );
}
