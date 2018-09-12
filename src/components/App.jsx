import React from 'react';
import Header from './Header';

import TamagotchiList from './TamagotchiList';
import NewTamagotchi from './NewTamagotchi';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTamagotchiList: [
        {
          name: "Dewberry",
          hunger: 50,
          rest: 50,
          activity: 50,
          id: 1
        },
        {
          name: "Dollop",
          hunger: 70,
          rest: 70,
          activity: 70,
          id: 2
        }
      ]
    };
    this.handleCreateTamagotchi = this.handleCreateTamagotchi.bind(this);
  }

  handleCreateTamagotchi(newTamagotchi){
    let newTamagotchiList = this.state.masterTamagotchiList.slice();
    newTamagotchiList.push(newTamagotchi);
    this.setState({masterTamagotchiList: newTamagotchiList})
  }


  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TamagotchiList tamagotchiList={this.state.masterTamagotchiList} />} />
          <Route exact path='/NewTamagotchi' render={()=><NewTamagotchi onCreateTamagotchi={this.handleCreateTamagotchi}/>} />
        </Switch>
      </div>
    );
  }
}

export default App;
