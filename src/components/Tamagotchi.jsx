import React from 'react';
import PropTypes from 'prop-types';

function Tamagotchi(props){
  return(
    <div>
      <h1>{props.name}</h1>
      <h3>Hunger Level: {props.hunger} <button className="btn btn-success">Feed</button></h3>
      <h3>Rest Level: {props.rest} <button className="btn btn-success">Sleep</button></h3>
      <h3>Activity Level: {props.activity} <button className="btn btn-success">Play</button></h3>
      <hr/>
    </div>
  );
}

Tamagotchi.propTypes = {
  name: PropTypes.string.isRequired,
  hunger: PropTypes.number.isRequired,
  rest: PropTypes.number.isRequired,
  activity: PropTypes.number.isRequired
}

export default Tamagotchi;
