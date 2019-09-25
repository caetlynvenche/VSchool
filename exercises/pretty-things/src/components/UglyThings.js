import React from 'react';

const UglyThings = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <img src={props.imgUrl} alt={props.title} width={200}/>
    </div>
  );
};

export default UglyThings;