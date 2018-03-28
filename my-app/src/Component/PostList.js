import React from 'react';
import data from '../data.js';

function PostList(props) {
    const filterData = data.filter((item) => {
        return item.title.toLowerCase()
        .search(props.search.toLowerCase()) > -1;
    });
    let PostListItem;
    if(filterData.length !== 0){
        PostListItem = filterData.slice(0, props.count)
        .map((item, i) => {
            return (
                <li className="post-card" key={item.id}>
                    <a href="">
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                    </a>
                </li>
                );
        });
    }else{
        PostListItem = <h3>No items found</h3>;
    }
    return (
        <ul className="post-list">
            {PostListItem}
        </ul>
    );
}


export default PostList;