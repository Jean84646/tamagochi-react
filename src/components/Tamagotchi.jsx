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
  let Bg = "";
  if(props.hunger < 10 || props.rest < 10 || props.activity < 10) {
    Bg = "danger";
  }
  if(props.hunger <= 0 || props.rest <= 0 || props.activity <= 0) {
    document.getElementById(props.id+'div').style.display = "none";
    document.getElementById(props.id).style.display = "inline";
  }

  return(
    <div className={Bg}>
      <style jsx>{`
          .danger {
            background-color: #b21f1a;
          }
          .deathNotice {
            display: none;
          }
      `}</style>
      <div id={props.id+'div'}>
        <h1>{props.name}</h1>
        <h3>Hunger Level: {props.hunger} <button onClick={handleClickFeed} className="btn btn-success">Feed</button></h3>
        <h3>Rest Level: {props.rest} <button onClick={handleClickSleep} className="btn btn-success">Sleep</button></h3>
        <h3>Activity Level: {props.activity} <button onClick={handleClickPlay} className="btn btn-success">Play</button></h3>
      </div>
      <div className="deathNotice" id={props.id}>{props.name} is DEAD!!!!!</div>
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
