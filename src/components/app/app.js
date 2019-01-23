import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

let date = new Date();
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [ 
        {label: 'Going to learn React!', date: date, important: true, id: '1' },
        {label: 'That is so intresting', date: date, important: false, id: '2' },
        {label: 'I need a break...', date: date, important: false, id: '3' }
      ]
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      
      const before = data.slice(0, index);
      const after = data.slice(index + 1);

      const newArr = [...before, ...after];
      // const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

      return {
        data: newArr
      }
    });
  }

  addItem = (body) => {
    const newItem = {
      label: body,
      important: false,
      id: this.maxId++,
      date: new Date()
    }

    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    })
  }


  render() {
    return (
      <div className="app">
        <AppHeader/>
        <div className="search-panek d-flex">
          <SearchPanel/>
          <PostStatusFilter/>
        </div>
        <PostList 
          posts={this.state.data}
          onDelete={this.deleteItem}
          />
        <PostAddForm
          onAdd={this.addItem}
        />
      </div>
    )
  }
}
