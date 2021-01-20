import React from 'react';

class BookType extends React.Component {
  render() {
    return (
      <div className='book_type_options'>
        <label
          htmlFor='book_type'
        >
        Book Type:
        </label>

        <select>
          <option value='Test'>Test
          </option>
          <option value='Book'>Book
          </option>
          <option value='Movie'>Movie
          </option>
        </select>

      </div>

    )
  }
}

export default BookType;