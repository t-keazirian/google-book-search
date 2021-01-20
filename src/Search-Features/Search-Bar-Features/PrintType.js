import React from 'react';

class PrintType extends React.Component {
  render() {
    return (
      <div className='print_type_options'>
        <label
          htmlFor='print_type'
        >
        Print Type:
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

export default PrintType;