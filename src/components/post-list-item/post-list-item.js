import React, {Component} from 'react';
import './post-list-item.css'


export default class PostListItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {label, date, important, like, onDelete, onToggleImportant, onToggleLike, openModal} = this.props;

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
            onClick={onDelete}>
            <i className="fa fa-trash-o"></i>
          </button>
          <button 
            type="button" 
            className="btn-sm"
            onClick={openModal}>
            <i className="fa fa-pencil"></i>
          </button>
          <i className="fa fa-heart"></i>
        </div>

        <span className="app-list-date">{date.toLocaleDateString('ru-RU', dateOptions)}</span>
      </div>
    )
  }
}
