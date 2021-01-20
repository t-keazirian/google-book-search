import React from 'react';

class SearchForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        searchTerm: ''
      }
    }
    
    handleSearch = (e) => {
      this.setState({
        searchTerm: e.target.value
      });
    }

    handleSubmit = (e) => {
      e.preventDefault();
    }
    
    render() {


    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='search_keyword'>
          Search:
        </label>
        <input
          type='text'
          id='search_keyword'
          name='search_keyword'
          placeholder='Search keyword here'
          onChange={this.handleSearch}
          value={this.state.value}
        >
        </input>
        <input
          type='submit'
          value='Search'
        >
        </input>
      </form>
    )
  }
}

export default SearchForm;