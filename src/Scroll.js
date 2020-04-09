import React from 'react';

const Scroll = (props) => {
    // return props.children   //props.children is an object that has properties
    //we can use it to create components that wrap other components

     /*scrollable component*/
    return (
        <div style={{overflowY: 'scroll',
                      
                     height:'700px',
                     marginTop:'20px',
                     padding: '10px'}}>
            {props.children}   
        </div>
    );

};



export default Scroll;

/*
So far we've learned about props and state
Now we're going to learn about children
The children of Scroll is CardList
 */