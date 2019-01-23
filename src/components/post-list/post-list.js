import React from 'react';
import PostListItem from '../post-list-item';
import { ListGroup, ListGroupItem } from 'reactstrap';
import styled from 'styled-components';

const AppList = styled.ul`
  margin-top: 50px;
  .list-group-item {
    padding: 15px 35px 15px 35px;
    margin-top: 10px;
  }
`

const PostList = ({posts, onDelete}) => {

  const filterPosts = posts.filter((item) => {
    if (item === Object(item) && item.id && item.label && item.date) {
      return true;
    }
  })

  const elements = filterPosts.map((item) => {
    const {id, ...itemProps} = item;
    return (
      <ListGroupItem key={id}>
        <PostListItem 
          {...itemProps}
          onDelete={() => onDelete(id)}
          />
      </ListGroupItem>
    )
  })

  return (
    <AppList className="list-group">
      {elements}
    </AppList>
  )
}

export default PostList;