import React, {Component} from 'react';
import './post-list-item.css';
import ModalWindow from '../modal-window';
import {Form, FormGroup, Button, Input} from 'reactstrap';

export default class PostListItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: false,
      label: this.props.label,
      modalOptions: {
        isOpen: false,
        header: null,
        content: null,
      }
    }
  }


  openModal = (butn) => {
    let header, content;

    if (butn === 'update') {
      header = 'Редактировать запись';
      content = (
        <Form onSubmit={this.onSubmit}>
          <FormGroup >
            <Input type="text" defaultValue={this.state.label} onChange={this.onValueChange} />
          </FormGroup>
          
          <Button color="primary" className="mr-3"
            onClick={() => {
              if (this.state.label.trim().length > 0) {
                this.props.onUpdate(this.props.id, this.state.label);
                this.closeModal();
              } else {
                console.error('Сообщение не должно быть пустым');
                this.setState({
                  error: true
                })
              }
            }}>
            Сохранить
          </Button>

          <Button color="secondary" onClick={this.closeModal}>Отмена</Button>
        </Form>
      );
    }

    if (butn === 'delete') {
      header = 'Удалить запись';
      content = (
        <>
        <FormGroup>Вы уверены, что хотите удалить запись?</FormGroup>

        <Button 
          color="primary"
          className="mr-3"
          onClick={() => {
            this.props.onDelete(this.props.id);
            this.closeModal();
            }}>
            Удалить
          </Button>

          <Button color="secondary" onClick={this.closeModal}>Отмена</Button>
        </>
      )
    }

    this.setState({
      modalOptions: {
        isOpen: true,
        header: header,
        content: content
      }
    })
  }

  onValueChange = (e) => {
    const text = e.target.value;
    this.setState({
      label: text
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.label.trim().length > 0) {
      this.props.onAdd(this.state.label);
      this.setState({
        label: ''
      })
    } else {
      console.error('Сообщение не было отправлено');
      this.setState({
        error: true
      })
    }
  }

  closeModal = () => {
    this.setState({
      modalOptions: {
        isOpen: false,
        header: null,
        content: null,
        actionOnOk: false,
      }
    })
  }

  render() {
    const {label, date, important, like, onToggleImportant, onToggleLike} = this.props;

    const dateOptions = {
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      hour: 'numeric', 
      minute: 'numeric', 
      day: 'numeric'
    };
  
    let classNames = 'app-list-item d-flex justify-content-between';
  
    if (important) {
      classNames +=' important';
    }

    if (like) {
      classNames +=' like';
    }

    return (
      <>
        <div className={classNames}>
          <span 
            className="app-list-item-label"
            onClick={onToggleLike}>
            
            {label}
          </span>

          <div className="d-flex justify-content-center align-items-center">
            <button 
              type="button" 
              className="btn-star btn-sm"
              onClick={onToggleImportant}>

              <i className="fa fa-star"></i>
            </button>
            <button 
              type="button" 
              className="btn-trash btn-sm"
              onClick={() => this.openModal('delete')}>
              <i className="fa fa-trash-o"></i>
            </button>
            <button 
              type="button" 
              className="btn-sm"
              onClick={() => this.openModal('update')}>
              <i className="fa fa-pencil"></i>
            </button>
            <i className="fa fa-heart"></i>
          </div>
          <span className="app-list-date">{date.toLocaleDateString('ru-RU', dateOptions)}</span>

        </div>
        <ModalWindow modalOptions={this.state.modalOptions}/>
      </>
    )
  }
}
