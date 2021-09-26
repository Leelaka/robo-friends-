import React, {Component} from "react";
import CardList from "../components/CardList";
import { robots } from "../components/Robots";
// import {robots} from './Robots';
import './App.css';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from "../components/ErrorBoundry";

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
        // console.log('constructor');
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users}))
        }
        //this.setState({ robots: users })
        // console.log('componentDidMount');

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        console.log(event.target.value);
        // console.log(filteredRobots);
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
            return !robots.length ? 
            <h1 className='tc'>Loading</h1>:
            (
                <div className='tc'>
                    <h1 className='f2'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                    </Scroll>
                </div>
        
            )
        }
        // console.log('render');

    }

export default App;