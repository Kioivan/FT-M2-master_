import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Todo from "../Todo/Todo";
import styled from "styled-components";

const DivContainer = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
`;

export default function Todos() {

  const {user} = useSelector({state} => {return state});

  const navigate = useNavigate();
  return (
    <div>
      <DivContainer>
        {user.todos.map((e, i) => (<Todo {...e} key={i} user={i} />))} 
      </DivContainer>
      <br />
      <button>Volver</button>
    </div>
  );
}