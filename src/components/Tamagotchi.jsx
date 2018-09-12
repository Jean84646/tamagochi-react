import React from 'react';
import PropTypes from 'prop-types';

function Tamagotchi(props){
  function handleClickFeed(){
    props.onClickFeed(props.id);
  }
  function handleClickSleep(){
    props.onClickSleep(props.id);
  }
  function handleClickPlay(){
    props.onClickPlay(props.id);
  }
  return(
    <div>
      <h1>{props.name}</h1>
      <h3>Hunger Level: {props.hunger} <button onClick={handleClickFeed} className="btn btn-success">Feed</button></h3>
      <h3>Rest Level: {props.rest} <button onClick={handleClickSleep} className="btn btn-success">Sleep</button></h3>
      <h3>Activity Level: {props.activity} <button onClick={handleClickPlay} className="btn btn-success">Play</button></h3>
      <hr/>
    </div>
  );
}

Tamagotchi.propTypes = {
  name: PropTypes.string.isRequired,
  hunger: PropTypes.number.isRequired,
  rest: PropTypes.number.isRequired,
  activity: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  onClickFeed: PropTypes.func,
  onClickSleep: PropTypes.func,
  onClickPlay: PropTypes.func,
}

export default Tamagotchi;
