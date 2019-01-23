import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

const App = () => {

  let date = new Date();
  const data = [ 
      1,
      {label: 'Going to learn', date: date},
      {label: 'Going to learn R', date: '', important: true, id: 'jhjhf' },
      {label: '', date: date, important: true, id: 'jhjhf' },
      {label: 'Going to learn React!', important: true, id: 'weffew' },

      {label: 'Going to learn React!', date: date, important: true, id: 'weqw' },
      {label: 'That is so intresting', date: date, important: false, id: 'dggdf' },
      {label: 'I need a break...', date: date, important: false, id: 'sdcsd' }
  ]

  return (
    <div className="app">
      <AppHeader/>
      <div className="search-panek d-flex">
        <SearchPanel/>
        <PostStatusFilter/>
      </div>
      <PostList posts={data}/>
      <PostAddForm/>
    </div>
  )
}

export default App;