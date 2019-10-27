import React from "react";

const Smurf = props => {
  const char = props.smurf;
  return (
    <div>
    <h2>Smurf Component</h2>
      <h3>{char.name}</h3>
      <p>Age: {char.age}</p>
      <p>Height: {char.height}</p>
    </div>
  );
};
export default Smurf;
