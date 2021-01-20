import React from 'react';
import '../css_files/filterablelist.css';

class FilterableList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      // searchTerm: ''
    };
  }

  componentDidMount() {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=';
    const searchTerm = 'stephen king';
    const apiKey = '&key=AIzaSyA2CB8O6yvW3d__Sy1cWVBzFFMQHXOmi58';
    
    fetch(url + searchTerm + apiKey)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          items: data.items,
          // searchTerm,
          isLoaded: true,
        });
        console.log(this.state.items)
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
    }

    setSearchTerm(searchTerm) {
      this.setState({
        searchTerm
      })
    }

  render() {

    let { isLoaded, items } = this.state;

    if (!isLoaded) {
      return (
        <p>Loading...</p>
      )
    }

    const books = items.map((book) => {
      return (
      <li key={book.id}>
        <h2>
          {book.volumeInfo.title}
        </h2>
        <h4>
          {book.volumeInfo.authors}
        </h4>
        <p>
          {book.volumeInfo.description}
        </p>
        <a href={book.volumeInfo.previewLink} target='_blank' rel='noreferrer'>
          Click here to preview: <strong>{book.volumeInfo.title}</strong>
        </a>
      </li>
    )})

    return (
      <div className='list_container'>
        <ul>
        {books}
        </ul>
      </div>
    )
  }
}

export default FilterableList;