import React from 'react';
import Login from "./views/Login/Login";
import Home from "./views/Home/Home";

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isAuth: false,
            name: '',
            email: ''
        }
    }

    render() {
        const IsAuth = ()=> {
            if(this.state.isAuth === false) {
                return <Login isAuth={(e)=> this.setState({isAuth : e})} name={(e)=> this.setState({name : e})} email={(e)=> this.setState({email: e})}/>
            } else {
                return <Home isAuth={(e)=> this.setState({isAuth : e})} name={this.state.name} email={this.state.email}/>
            }
        };

        return(
            <IsAuth/>
        )
    }
}