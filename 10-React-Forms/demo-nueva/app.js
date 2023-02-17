import React, {useState} from 'react';
import { render } from 'react-dom';

function App(){
  const [input, setInput] = useState({
    name: '',
    lastname: '',
  })

  const [error, setError] = useState({
    name: '',
    lastname: '',
  })

  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  const handleChange = (e) =>{
    const value = e.target.value;
    const name = e.target.name;

    switch(name){
      case 'name':
        /\S+@\S+\.\S+/.test(value) ? setError({...error, name: true}) : setError({...error, name: false})
        break;
      case 'lastname':
        value.length > 5 ? setError({...error, lastname: true}) : setError({...error, lastname: false})
        break;
    }

    setInput({...input, [name]: value});

    //const submit = validateSubmit(error);
    //console.log(submit);
  }

  function validateSubmit(error){
    let valid = 0;
    let valoresError = Object.values(error);  //{name: true,lastname: false,} -> [true, false]
    valoresError.forEach((val) => {if(val) valid++})
    if(valid === valoresError.length) return true;
    return false;
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
          <input type='text' name='name' value={input.name} onChange={handleChange} />
          <input type='text' name='lastname' value={input.lastname} onChange={handleChange} />
          <input type='submit' value='Enviar' disabled={!validateSubmit(error)}/>
      </form>
      <div>
        <p>{input.name}</p>
        <p>{input.lastname}</p>
      </div>
    </div>
  );
}

render(<div>
    <App />
  </div>, document.getElementById('app'));
