import Card from "../Card/Card";
import styled from "styled-components";
import { connect } from "react-redux";

const DivCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export function Favorites({myFavorites}) {
  return (
    <DivCards>
      {myFavorites.length === 0 ? (
        <p style={{ color: "violet", marginTop: "150px", fontSize: "24px" }}>
          ¡Agrega un favorito!
        </p>
      ) : (
        myFavorites.map((e, i) => (
          <Card
            id={e.id}
            name={e.name}
            species={e.species}
            gender={e.gender}
            image={e.image}
            onClose={false}
            fav={true}
            key={i++}
          />
        ))
      )}
    </DivCards>
  );
}

export function mapStateToProps(state) {
    return {
      myFavorites: state.myFavorites,
    };
}

export default connect(mapStateToProps, null)(Favorites);
