import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { addFav, removeFav } from "../../redux/actions";

const DivCard = styled.div`
  display: inline-block;
  background-color: rgb(72, 61, 139, 0.7);
  border-radius: 10px;
  color: white;
  overflow: hidden;
  margin: 15px 0px;
  max-width: 18.8rem;
`;

const Button = styled.button`
  background-color: pink;
  color: purple;
  border: 0px;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 15px;
  margin: 15px 15px 0px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const styleSpecie = {
  display: "inline-block",
  fontSize: "16px",
  color: "violet",
  marginRight: "15px",
  marginTop: "-10px",
};

const styleGender = {
  display: "inline-block",
  fontSize: "16px",
  color: "deeppink",
  marginTop: "-10px",
};

// const styleName = {
//   position: 'relative',
//   bottom: '-280px',
//   backgroundColor: 'rgb(0,0,0,0.5)',
//   padding: '5px',
//   display: 'inline-block',
// }

export function Card(props) {
  const [isFav, setIsFav] = useState(props.fav);

  useEffect(() => {
    props.myFavorites &&
      props.myFavorites.forEach((fav) => {
        if (fav.id === props.id) {
          setIsFav(true);
        }
      });
  }, [props.myFavorites]);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      props.removeFav(props.id);
    } else {
      setIsFav(true);
      props.addFav({
        name: props.name,
        species: props.species,
        gender: props.gender,
        image: props.image,
        id: props.id,
      });
    }
  }

  return (
    <DivCard>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        {isFav ? (
          <Button onClick={handleFavorite}>❤️</Button>
        ) : (
          <Button onClick={handleFavorite}>🤍</Button>
        )}
        {props.onClose && <Button onClick={props.onClose}>X</Button>}
      </div>
      <Link
        to={`/detail/${props.id}`}
        style={{ textDecoration: "none", color: "white" }}
      >
        <h2>{props.name}</h2>
      </Link>
      <h2 style={styleSpecie}>{props.species}</h2>
      <h2 style={styleGender}>{props.gender}</h2>
      {/* <h2 style={styleName}>{props.name}</h2> */}
      <img style={{ display: "block" }} src={props.image} alt="" />
    </DivCard>
  );
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    addFav: function (personaje) {
      dispatch(addFav(personaje));
    },
    removeFav: function (id) {
      dispatch(removeFav(id));
    },
  };
}

export default connect(null, mapDispatchToProps)(Card);
