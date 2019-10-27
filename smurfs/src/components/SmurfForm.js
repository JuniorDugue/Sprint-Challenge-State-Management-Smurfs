import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf } from "./actions/index";

const SmurfForm = props => {
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(newSmurf);
    props.addSmurf(newSmurf);
  };

  const handleChanges = e => {
    let smurfName = e.target.name;
    setNewSmurf({ ...newSmurf, [smurfName]: e.target.value });
  };

  return (
    <div className="smurfForm">
    {/* <h2>Smurf Form Component</h2> */}
      <form>
        <input
          name="name"
          type="text"
          placeholder="name.."
          onChange={handleChanges}
        ></input>
        <input
          name="age"
          type="number"
          placeholder="age.."
          onChange={handleChanges}
        ></input>
        <input
          name="height"
          type="text"
          placeholder="height.."
          onChange={handleChanges}
        ></input>
        <button type="submit" onClick={handleSubmit}>
          Add Your Smurf
        </button>
      </form>
    </div>
  );
};
export default connect(
  null,
  { addSmurf }
)(SmurfForm);
