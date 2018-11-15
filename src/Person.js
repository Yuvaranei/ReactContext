import React from 'react'
import {MyContext} from './MyContext';

export default class Person extends React.Component{
    render(){
        return <MyContext.Consumer>
            {
                ({name}) => (
                    name && <div 
                        style={{ fontSize : '30px',
                            padding : '10px',
                            textAlign : 'center'
                            }}>
                    A Warm Welcome, {name} !!</div>
                )
            }
        </MyContext.Consumer>
    }
}