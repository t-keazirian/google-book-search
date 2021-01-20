import React from 'react';
import '../css_files/filterablelist.css';

class FilterableList extends React.Component {
  render() {

    let { isLoaded, items } = this.props;

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