import React, {Component} from 'react';
import { Input } from 'reactstrap';

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onUpdateSearch = (e) => {
    const term = e.target.value.toLowerCase();
    this.setState({term});
    this.props.onUpdateSearch(term);
  }

  render() {
    return (
      <Input
        className = "search-input"
        placeholder="Поиск по записям"
        onChange={this.onUpdateSearch}
      />
    )
  }
}
