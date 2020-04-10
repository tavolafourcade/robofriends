import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    //new life cycle method that triggers the render if there is an error
    componentDidCatch(error, info){
        this.setState({hasError: true})
    }

    render(){
        if (this.state.hasError){
            return <h1>Oppps. Tha is not good</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;