import React from 'react'; 
import { Button, Input } from 'reactstrap';
import styled from 'styled-components';

const BottomPanel = styled.div`
  display:flex;
  margin-top: 20px;
  .new-post-label {
    width: auto;
    flex-grow: 1;
    margin-right: 3px;
  }
`

const PostAddForm = ({onAdd}) => {
  return (
    <BottomPanel>
      <Input
        type="text"
        placeholder="О чем вы думаете сейчас?"
        className="new-post-label"
      />

      <Button
        color="secondary"
        outline
        onClick={() => onAdd('Hello')}>Добавить</Button>
    </BottomPanel>
  )
}

export default PostAddForm