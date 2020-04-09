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
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            //return the robot name if is in searchfield
        })
        console.log('filtered', filteredRobots);
    }
    render(){
        return (
            <div className='pa2'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Cardlist robots = {this.state.robots}/>
            </div>
        )
    }
    
}

export default App;