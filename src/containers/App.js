import React, { Component } from 'react';
import {connect} from 'react-redux';
import Cardlist from '../components/Cardlist.js';
import SearchBox from '../components/SearchBox';
// import { robots } from './robots';
import './App.css';
import Scroll from '../components/Scroll'   //creating a scroll component
import ErrorBoundry from '../components/ErrorBoundry.js';

import { setSearchField } from '../actions.js'

const mapStateToProps = (state) => {
    return {
        searchField: state.searchField
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
    
}

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: []
            
        }
    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users =>this.setState({robots: users}));
        
    }


    render(){
        // const {robots, searchfield} = this.state; 
        // Cleaned code to just use robots and searchfield without this.state
        const {robots} = this.state;
        const {searchField, onSearchChange} = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
            //return the robot name if is in searchfield
        }); 

        /* !this.state.robots.length is the same as this.state.robots.length===0*/
        //ternary if-else statement
        return !robots.length ?
        <h1 className='tc f1'>Loading...</h1>:
        (
            <div className='pa2'>
                <h1 className='tc f1'>RoboFriends</h1>
                <SearchBox searchChange = {onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <Cardlist robots = {filteredRobots}/>
                    </ErrorBoundry>
                    
                </Scroll>
                    
            </div>
        );
    }
        
    
    
}

export default connect(mapStateToProps, mapDispatchToProps)(App);