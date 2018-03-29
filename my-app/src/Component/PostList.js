import React from 'react';
import PostListItem from './PostListItem.js';


function PostList(props) {
    console.log('1', props)
    return (
        <ul className="post-list">
            <PostListItem 
                data={props.filterData} 
                lim={props.lim}
            />
        </ul>
    );
}


export default PostList;