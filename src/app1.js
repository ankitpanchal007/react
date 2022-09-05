
import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react';
export default class App1 extends Component{
    constructor(props)
    {
        super(props);
        this.color='red';
    }
    render()
    {
        return(<>
       <h1>i have a {this.color} car</h1>
        </>);   
    }
}
