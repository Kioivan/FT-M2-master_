import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { finishTodo } from "../../redux/actions";
import { divItem } from "../Photo/Photo";

export default function Todo({ id, title, completed }) {

  const [isCompleted, setIsCompleted] = useState(completed);

  const dispatch = useDispatch();

  function handleClick(e) {
    setIsCompleted(true);
    dispatch(finishTodo(id));
  }

  useEffect(() => {
    dispatch({type: 'RESET'})
  }, [isCompleted]);

  return (
    <div style={divItem}>
      <h2>{id}</h2>
      <p>{title}</p>
      {(isCompleted) ? <span>✅</span> : <button onClick={handleClick}>🔄</button> }
    </div>
  );
}
