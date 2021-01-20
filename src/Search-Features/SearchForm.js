import React from 'react';
import FilterableList from '../Lists/FilterableList';
import SearchInput from '../Search-Features/Search-Bar-Features/SearchInput';
import BookType from '../Search-Features/Search-Bar-Features/BookType';
import PrintType from '../Search-Features/Search-Bar-Features/PrintType';

class SearchForm extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      searchTerm: ''
    };
  }

  handleSearch = (e) => {
    this.setState({
      searchTerm: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.searchTerm);
    const url = 'https://www.googleapis.com/books/v1/volumes?q=';
    const searchTerm = this.state.searchTerm;
    const apiKey = '&key=AIzaSyA2CB8O6yvW3d__Sy1cWVBzFFMQHXOmi58';
    
    fetch(url + searchTerm + apiKey)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          items: data.items,
          isLoaded: true,
        });
        // console.log(this.state.items)
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
  }

    render() {

    return (
      <div className='form'>

        <SearchInput 
          handleSearch={this.handleSearch}
          handleSubmit={this.handleSubmit}
          searchTerm={this.state.searchTerm}
        />
        <BookType />
        <PrintType />

        <FilterableList 
          items={this.state.items}
          isLoaded={this.state.isLoaded}
        />
      </div>
    )
  }
}

export default SearchForm;