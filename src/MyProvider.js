import React from 'react';
import {MyContext} from './MyContext';

export default class MyProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : ''
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(name){
        this.setState({
            name
        })
    }

    render(){
        return(
            <MyContext.Provider 
                value={{
                    onSubmit : this.onSubmit,
                    name : this.state.name
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        )
    }
}