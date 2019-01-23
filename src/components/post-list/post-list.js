import React from 'react';
import PostListItem from '../post-list-item';

import './post-list.css'

const PostList = ({posts}) => {

  const filterPosts = posts.filter((item) => {
    if (item === Object(item) && item.id && item.label && item.date) {
      return true;
    }
  })

  const elements = filterPosts.map((item) => {
    const {id, ...itemProps} = item;
    return (
      <li key={id} className="list-group-item">
        <PostListItem {...itemProps}/>
      </li>
    )
  })

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default PostList;