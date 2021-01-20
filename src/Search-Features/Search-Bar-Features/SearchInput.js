import React from 'react';

class SearchInput extends React.Component {

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
          <label htmlFor='search_keyword'>
            Search:
          </label>
          <input
            type='text'
            id='search_keyword'
            name='search_keyword'
            placeholder='Search keyword here'
            onChange={this.props.handleSearch}
            value={this.props.searchTerm}
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

export default SearchInput;