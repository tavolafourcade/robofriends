import React, { Component } from 'react';
import Cardlist from '../components/Cardlist.js';
import SearchBox from '../components/SearchBox';
// import { robots } from './robots';
import './App.css';
import Scroll from '../components/Scroll'   //creating a scroll component
import ErrorBoundry from '../components/ErrorBoundry.js';

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
        // const {robots, searchfield} = this.state; 
        // Cleaned code to just use robots and searchfield without this.state
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
            //return the robot name if is in searchfield
        });

        /* !this.state.robots.length is the same as this.state.robots.length===0*/
        //ternary if-else statement
        return !robots.length ?
        <h1 className='tc f1'>Loading...</h1>:
        (
            <div className='pa2'>
                <h1 className='tc f1'>RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <Cardlist robots = {filteredRobots}/>
                    </ErrorBoundry>
                    
                </Scroll>
                    
            </div>
        );
    }
        
    
    
}

export default App;