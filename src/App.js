import React, { Component } from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';
import { robots } from './robots';



class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        // console.log(e.target.value);
        this.setState({searchfield: event.target.value})
        
        // console.log('filtered', filteredRobots);
    }
    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            //return the robot name if is in searchfield
        });
        return (
            <div className='pa2'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Cardlist robots = {filteredRobots}/>
            </div>
        )
    }
    
}

export default App;