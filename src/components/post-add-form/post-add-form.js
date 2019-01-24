import React, {Component} from 'react'; 
import { Button, Input, Alert } from 'reactstrap';
import styled from 'styled-components';

const BottomPanel = styled.form`
  display:flex;
  margin-top: 20px;
  position:relative;
  .new-post-label {
    width: auto;
    flex-grow: 1;
    margin-right: 3px;
  }
  .alert {
    position: absolute;
    top: 110%;
    left: 0;
  }
`
class AlertError extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Alert color="danger" isOpen={this.props.visible}>
        Сообщение не должно быть пустым
      </Alert>
    );
  }
}

export default class PostAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      error: false
    }
  }

  onValueChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text.trim().length > 0) {
      this.props.onAdd(this.state.text);
      this.setState({
        text: '',
        error: false
      })
    } else {
      console.error('Сообщение не было отправлено');
      this.setState({
        error: true
      })
    }
  }

  render() {
    return (
      <BottomPanel
      onSubmit={this.onSubmit}>
        <Input
          type="text"
          placeholder="О чем вы думаете сейчас?"
          className="new-post-label"
          onChange={this.onValueChange}
          value={this.state.text}
        />
  
        <Button
          color="secondary"
          outline
          type="submit">
          Добавить
        </Button>

        <AlertError
          visible={this.state.error}
        /> 
      </BottomPanel>
    )
  }
}
