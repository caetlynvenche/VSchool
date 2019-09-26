import React from 'react';

const Things = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <img src={props.imgUrl} alt={props.title} width={200}/>
      <button onClick={props.deleteItem}>Delete</button>
      <button onClick={props.handleEdit}>Edit</button>
    </div>
  );
};

export default Things;