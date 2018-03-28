import React from 'react';

import data from './data.js';
import PostList from './Component/PostList.js';
import SearchBar from './Component/SearchBar.js';
import MoreButton from './Component/MoreButton.js';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 10,
            searchText: ""
        };
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    add = () => {
        const { num } = this.state;
        this.setState({
            num: num < data.length ? num + 10 : data.length
        });
    };
    remove = () => {
        const { num } = this.state;
        this.setState({
            num: num > 10 ? num - 10 : 10
        });

    };
    handleChange = (event) => {
        const { value } = event.target;
        this.setState({
            searchText: value 
        });
    };
    render = () => {
        return (
            <React.Fragment> 
                <h1>Apiko Full Stack Intensive</h1> 
                <h1>Home task #4</h1>
                <SearchBar 
                    onChange={this.handleChange} 
                    text={this.state.searchText} 
                />
                <PostList 
                    count={this.state.num} 
                    search={this.state.searchText}
                />
                 <div className="but">
                    <MoreButton onClick={this.add} content="More" />
                    <MoreButton onClick={this.remove} content="Less" />
                </div>
            </React.Fragment> 
        );
    };
}

export default App;