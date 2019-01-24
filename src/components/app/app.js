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
        {label: 'Going to learn React!', date: new Date(2018, 11, 31, 0, 0), important: true, like: false, id: idGenerator() },
        {label: 'That is so intresting', date: new Date(2019, 0, 19, 20, 45), important: false, like: true, id: idGenerator() },
        {label: 'I need a break...', date: new Date(2019, 0, 21, 10, 30), important: false, like: false, id: idGenerator() }
      ],

      term: '',
      filter: 'all'
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

  
  inverseStatus = (dataItem, id) => {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id == id);
      const old = data[index];
      const newItem = {...old, [dataItem]: !old[dataItem]};

      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

      return {
        data: newArr
      }
    })
  }


  searchPost = (items, term) => {
    if (term.trim().length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term) > -1;
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term})
  }

  filterPosts = (items, filter) => {
    if (filter == 'like') {
      return items.filter(item => item.like);
    } else {
      return items
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter});
  }


  render() {
    const {data, term, filter} = this.state;

    const liked = data.filter(item => item.like).length;
    const allPosts = data.length;
    const visiblePosts = this.filterPosts(this.searchPost(data, term), filter);

    return (
      <AppBlock>
        <AppHeader
          liked={liked}
          allPosts={allPosts}
        />
        <SearchPanelBlock>
          <SearchPanel
            onUpdateSearch={this.onUpdateSearch}
          />
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}
          />
        </SearchPanelBlock>
        <PostList 
          posts={visiblePosts}
          onDelete={this.deleteItem}
          onToggleImportant={this.inverseStatus}
          onToggleLike={this.inverseStatus}
          />
        <PostAddForm
          onAdd={this.addItem}
        />
      </AppBlock>
    )
  }
}
