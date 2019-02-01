import React from 'react';
import PostListItem from '../post-list-item';
import { ListGroupItem } from 'reactstrap';
import styled from 'styled-components';

const AppList = styled.ul`
  margin-top: 50px;
  .list-group-item {
    padding: 15px 35px 15px 35px;
    margin-top: 10px;
  }
`

const PostList = ({posts, onDelete, onUpdate, openModal, onToggleLike, onToggleImportant}) => {

  const filterPosts = posts.filter((item) => {
    if (item === Object(item) && item.id && item.label && item.date) {
      return item;
    } else {
      return false;
    }
  })

  const elements = filterPosts.map((item) => {
    const {id, ...itemProps} = item;
    return (
      <ListGroupItem key={id}>
        <PostListItem 
          {...itemProps}
          id={id}
          onDelete={onDelete}
          onUpdate={onUpdate}
          openModal={() => openModal(id)}
          onToggleImportant={() => onToggleImportant('important', id)}
          onToggleLike={() => onToggleLike('like', id)}
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