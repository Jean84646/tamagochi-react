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
          key={pet.id} />)}
    </div>
  );
}

TamagotchiList.propTypes = {
  tamagotchiList: PropTypes.array.isRequired
}

export default TamagotchiList;
