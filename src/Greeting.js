import React from 'react';
import Family from './Family';
import {MyContext} from './MyContext';

export default class Greeting extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            inputName : ''
        }
        this.onInputName = this.onInputName.bind(this);
    }

    onInputName(event){
        let value = event.target.value;
        this.setState({
            inputName : value
        })
    }

    render(){
        return (
            <MyContext.Consumer>
                {
                    ({onSubmit}) => (
                        <div style={{textAlign : 'center',paddingTop : '20px'}}>
                            <label>Your name</label>
                            <input style={{marginLeft : '20px'}} type='text' value= {this.state.inputName} onChange={this.onInputName}/>
                            <button style={{marginLeft : '20px'}} type='submit' onClick={() => onSubmit(this.state.inputName)}>Submit</button>
    
                            <Family/>
                        </div>
                    )
                }
            </MyContext.Consumer>
        )
    }
}