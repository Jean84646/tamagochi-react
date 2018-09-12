import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewTamagotchi(props){
  let _name = null;

  function handleCreateTamagotchi(event){
    event.preventDefault();
    props.onCreateTamagotchi({name: _name.value, hunger: 50, rest: 50, activity: 50, id: v4()});
    _name.value = "";
  }

  return (
    <div>
      <form onSubmit={handleCreateTamagotchi}>
        <input type='text' id='name' placeholder='Tamagotchi Name' ref={(input) => {_name = input;}} />
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

NewTamagotchi.propTypes = {
  onCreateTamagotchi: PropTypes.func
}

export default NewTamagotchi;
