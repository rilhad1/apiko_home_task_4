import React from 'react';


function PostListItem(props) {
    console.log('2', props)
    if (props.data.length !== 0) {
        return props.data.slice(0, props.lim)
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
    } else {
        return <h3>No items found</h3>;
    }
}

export default PostListItem;