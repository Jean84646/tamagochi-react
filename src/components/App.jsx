import React from 'react';
import Header from './Header';
import Moment from 'moment';
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
          hunger: 100,
          rest: 100,
          activity: 20,
          id: "1"
        },
        {
          name: "Dollop",
          hunger: 10,
          rest: 80,
          activity: 90,
          id: "2"
        }
      ]
    };
    this.handleCreateTamagotchi = this.handleCreateTamagotchi.bind(this);
    this.handleClickFeed = this.handleClickFeed.bind(this);
    this.handleClickSleep = this.handleClickSleep.bind(this);
    this.handleClickPlay = this.handleClickPlay.bind(this);
    this.updateStats = this.updateStats.bind(this);
  }

  handleCreateTamagotchi(newTamagotchi){
    let newTamagotchiList = this.state.masterTamagotchiList.slice();
    newTamagotchiList.push(newTamagotchi);
    this.setState({masterTamagotchiList: newTamagotchiList})
  }

  handleClickFeed(id){
    let newTamagotchiList = this.state.masterTamagotchiList.slice();
    newTamagotchiList.map((pet) => {
      if(pet.id === id) {
        pet.hunger += 5;
      }
    });
    this.setState({masterTamagotchiList: newTamagotchiList});
  }

  handleClickSleep(id){
    let newTamagotchiList = this.state.masterTamagotchiList.slice();
    newTamagotchiList.map((pet) => {
      if(pet.id === id) {
        pet.rest += 5;
      }
    });
    this.setState({masterTamagotchiList: newTamagotchiList});
  }

  handleClickPlay(id){
    let newTamagotchiList = this.state.masterTamagotchiList.slice();
    newTamagotchiList.map((pet) => {
      if(pet.id === id) {
        pet.activity += 5;
      }
    });
    this.setState({masterTamagotchiList: newTamagotchiList});
  }

  componentDidMount() {
    this.gameTimer = setInterval(() =>
      this.updateStats(),
      2000
    );
  }

  componentWillUnmount(){
    clearInterval(this.gameTimer);
  }

  updateStats() {
    let newTamagotchiList = this.state.masterTamagotchiList.slice();
    newTamagotchiList.map((pet) => {
      pet.hunger -= 2;
      pet.rest--;
      pet.activity -= 3;
    });
    this.setState({masterTamagotchiList: newTamagotchiList});
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TamagotchiList
                                                tamagotchiList={this.state.masterTamagotchiList}
                                                onClickFeed={this.handleClickFeed}
                                                onClickSleep={this.handleClickSleep}
                                                onClickPlay={this.handleClickPlay}/>} />
          <Route exact path='/NewTamagotchi' render={()=><NewTamagotchi onCreateTamagotchi={this.handleCreateTamagotchi}/>} />
        </Switch>
      </div>
    );
  }
}

export default App;
