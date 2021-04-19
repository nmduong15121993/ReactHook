import React, { useState } from 'react'

const TodoForm = ({onSubmit}) => {
  const [value, setValue] = useState("");
  const [name, setName] = useState("");

  const onhandleSubmit = (e) => {
    e.preventDefault();
    if(!onSubmit) return undefined;
    const valueForm = {
      title: value,
      name: name
    };

    onSubmit(valueForm);

    // reset Form
    setName("");
    setValue("");
  };

  return (
    <form onSubmit={onhandleSubmit}>
      <input 
        type="text" 
        value={value}
        onChange={({target}) => setValue(target.value)} 
      />
      
      <input 
        type="text"
        value={name}
        onChange={({target}) => setName(target.value)}
      />

      <button type="submit">Submit</button>

    </form>
  )
}

export {TodoForm};
