import React from 'react';
import Tamagotchi from './Tamagotchi';
import PropTypes from 'prop-types';

function TamagotchiList(props){
  return(
    <div>
      {props.tamagotchiList.map((pet) =>
        <Tamagotchi
          name={pet.name}
          hunger={pet.hunger}
          rest={pet.rest}
          activity={pet.activity}
          id={pet.id}
          onClickFeed={props.onClickFeed}
          onClickSleep={props.onClickSleep}
          onClickPlay={props.onClickPlay}
          key={pet.id} />)}
    </div>
  );
}

TamagotchiList.propTypes = {
  tamagotchiList: PropTypes.array.isRequired,
  onClickFeed: PropTypes.func,
  onClickSleep: PropTypes.func,
  onClickPlay: PropTypes.func,
}

export default TamagotchiList;
