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
            lim: 10,
            searchText: ""
        };
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
        this.filterData = this.filterData.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    add = () => {
        const { lim } = this.state;
        this.setState({
            lim: lim < this.filterData().length ? lim + 10 : lim
        });
    };
    remove = () => {
        const { lim } = this.state;
        this.setState({
            lim: lim > 10 ? lim - 10 : 10
        });

    };
    filterData = () => {
        return data.filter((item) => {
            return item.title.toLowerCase()
            .search(this.state.searchText.toLowerCase()) > -1;
        });
    }
    handleChange = (event) => {
        console.log()
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
                    lim={this.state.lim} 
                    search={this.state.searchText}
                    filterData={this.filterData()}
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