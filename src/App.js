import React, { Component } from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';
// import { robots } from './robots';
import './App.css'


class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users =>this.setState({robots: users}));
        
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

        if (this.state.robots.length === 0) {
            return (
                <h1 className='tc f1'>Loading...</h1>
            )
        } else {
            return (
                <div className='pa2'>
                    <h1 className='tc f1'>RoboFriends</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Cardlist robots = {filteredRobots}/>
                </div>
            )
        }
        
    }
    
}

export default App;