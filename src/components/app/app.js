import React, {Component} from 'react';
import idGenerator from 'react-id-generator';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import styled from 'styled-components';


const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`

const SearchPanelBlock = styled.div`
  display: flex;
  margin: 1rem 0;
  .search-input {
    width: auto;
    flex-grow: 1;
    margin-right: 3px;
  }
`

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [ 
        {label: 'Going to learn React!', date: new Date(2018, 11, 31, 0, 0), important: true, id: idGenerator() },
        {label: 'That is so intresting', date: new Date(2019, 0, 19, 20, 45), important: false, id: idGenerator() },
        {label: 'I need a break...', date: new Date(2019, 0, 21, 10, 30), important: false, id: idGenerator() }
      ]
    }
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
      id: idGenerator(),
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
      <AppBlock>
        <AppHeader/>
        <SearchPanelBlock>
          <SearchPanel/>
          <PostStatusFilter/>
        </SearchPanelBlock>
        <PostList 
          posts={this.state.data}
          onDelete={this.deleteItem}
          />
        <PostAddForm
          onAdd={this.addItem}
        />
      </AppBlock>
    )
  }
}
